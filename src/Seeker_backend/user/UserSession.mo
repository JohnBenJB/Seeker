/**
* Seeker User Session Module
* 
* This module provides user session management for the Seeker search engine.
* It handles user authentication, session validation, and user preferences.
*
* Author: Seeker Development Team
* Version: 1.0.0 (MVP)
*/

import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Option "mo:base/Option";
import Iter "mo:base/Iter";
import Int "mo:base/Int";

module {
    
    /**
    * UserSession class for managing user sessions and preferences
    */
    public class UserSession() {
        
        // Session storage (in production, use stable variables)
        var sessions = HashMap.HashMap<Text, SessionData>(10, Text.equal, Text.hash);
        var userPreferences = HashMap.HashMap<Text, UserPrefs>(10, Text.equal, Text.hash);
        
        // Session configuration
        let SESSION_DURATION : Int = 86400_000_000_000; // 24 hours in nanoseconds
        let MAX_SESSIONS_PER_USER : Nat = 5;
        
        /**
        * Internal session data structure
        */
        type SessionData = {
            userId: Text;
            createdAt: Int;
            lastActivity: Int;
            isActive: Bool;
        };
        
        /**
        * User preferences structure
        */
        type UserPrefs = {
            preferredCategories: [Text];
            searchHistory: [Text];
            darkMode: Bool;
        };
        
        /**
        * Create a new user session
        * 
        * @param userId - User identifier (could be Internet Identity principal)
        * @returns Session ID or error message
        */
        public func createSession(userId: Text) : async Text {
            if (Text.size(userId) == 0) {
                return "Error: User ID cannot be empty";
            };
            
            let now = Time.now();
            let sessionId = userId # "-" # Int.toText(now);
            
            let sessionData : SessionData = {
                userId = userId;
                createdAt = now;
                lastActivity = now;
                isActive = true;
            };
            
            sessions.put(sessionId, sessionData);
            
            // Initialize user preferences if new user
            switch (userPreferences.get(userId)) {
                case null {
                    let defaultPrefs : UserPrefs = {
                        preferredCategories = [];
                        searchHistory = [];
                        darkMode = false;
                    };
                    userPreferences.put(userId, defaultPrefs);
                };
                case (?_) { /* User already exists */ };
            };
            
            sessionId
        };
        
        /**
        * Validate an existing session
        * 
        * @param sessionId - Session identifier to validate
        * @returns True if session is valid and active
        */
        public func validateSession(sessionId: Text) : async Bool {
            switch (sessions.get(sessionId)) {
                case null { false };
                case (?sessionData) {
                    let now = Time.now();
                    let isExpired = (now - sessionData.createdAt) > SESSION_DURATION;
                    
                    if (isExpired or not sessionData.isActive) {
                        // Clean up expired session
                        sessions.delete(sessionId);
                        false
                    } else {
                        // Update last activity
                        let updatedSession = {
                            userId = sessionData.userId;
                            createdAt = sessionData.createdAt;
                            lastActivity = now;
                            isActive = true;
                        };
                        sessions.put(sessionId, updatedSession);
                        true
                    }
                };
            }
        };
        
        /**
        * Get user ID from session
        * 
        * @param sessionId - Session identifier
        * @returns Optional user ID
        */
        public func getUserFromSession(sessionId: Text) : async ?Text {
            switch (sessions.get(sessionId)) {
                case null { null };
                case (?sessionData) {
                    if (await validateSession(sessionId)) {
                        ?sessionData.userId
                    } else {
                        null
                    }
                };
            }
        };
        
        /**
        * Add search term to user's search history
        * 
        * @param userId - User identifier
        * @param searchTerm - Search term to record
        * @returns Success status
        */
        public func addToSearchHistory(userId: Text, searchTerm: Text) : async Bool {
            switch (userPreferences.get(userId)) {
                case null { false };
                case (?prefs) {
                    // Add to history (keep last 10 searches)
                    let newHistory = if (prefs.searchHistory.size() >= 10) {
                        let trimmed = Array.tabulate<Text>(9, func(i) {
                            prefs.searchHistory[i + 1]
                        });
                        Array.tabulate<Text>(10, func(i) {
                            if (i < 9) { trimmed[i] } else { searchTerm }
                        })
                    } else {
                        Array.tabulate<Text>(prefs.searchHistory.size() + 1, func(i) {
                            if (i < prefs.searchHistory.size()) {
                                prefs.searchHistory[i]
                            } else {
                                searchTerm
                            }
                        })
                    };
                    
                    let updatedPrefs = {
                        preferredCategories = prefs.preferredCategories;
                        searchHistory = newHistory;
                        darkMode = prefs.darkMode;
                    };
                    
                    userPreferences.put(userId, updatedPrefs);
                    true
                };
            }
        };
        
        /**
        * Get user's search history
        * 
        * @param userId - User identifier
        * @returns Array of recent search terms
        */
        public func getSearchHistory(userId: Text) : async [Text] {
            switch (userPreferences.get(userId)) {
                case null { [] };
                case (?prefs) { prefs.searchHistory };
            }
        };
        
        /**
        * Update user preferences
        * 
        * @param userId - User identifier
        * @param categories - Preferred categories
        * @param darkMode - Dark mode preference
        * @returns Success message
        */
        public func updatePreferences(userId: Text, categories: [Text], darkMode: Bool) : async Text {
            switch (userPreferences.get(userId)) {
                case null { "Error: User not found" };
                case (?prefs) {
                    let updatedPrefs = {
                        preferredCategories = categories;
                        searchHistory = prefs.searchHistory;
                        darkMode = darkMode;
                    };
                    userPreferences.put(userId, updatedPrefs);
                    "Preferences updated successfully"
                };
            }
        };
        
        /**
        * Get active sessions count
        * 
        * @returns Number of active sessions
        */
        public func getActiveSessionsCount() : async Nat {
            let now = Time.now();
            let activeSessions = Iter.filter<(Text, SessionData)>(sessions.entries(), func((_, sessionData)) {
                let isExpired = (now - sessionData.createdAt) > SESSION_DURATION;
                not isExpired and sessionData.isActive
            });
            
            Iter.size(activeSessions)
        };
        
        /**
        * Clean up expired sessions
        * 
        * @returns Number of sessions cleaned up
        */
        public func cleanupExpiredSessions() : async Nat {
            let now = Time.now();
            let expiredSessions = Iter.filter<(Text, SessionData)>(sessions.entries(), func((_, sessionData)) {
                let isExpired = (now - sessionData.createdAt) > SESSION_DURATION;
                isExpired or not sessionData.isActive
            });
            
            let expiredList = Iter.toArray(expiredSessions);
            
            for ((sessionId, _) in expiredList.vals()) {
                sessions.delete(sessionId);
            };
            
            expiredList.size()
        };
        
        /**
        * End a specific session
        * 
        * @param sessionId - Session to terminate
        * @returns Success status
        */
        public func endSession(sessionId: Text) : async Bool {
            switch (sessions.remove(sessionId)) {
                case null { false };
                case (?_) { true };
            }
        };
    }
}