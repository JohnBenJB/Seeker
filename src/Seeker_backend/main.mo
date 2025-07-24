/**
* Seeker - Decentralized AI-Powered Search Engine for Web3
* 
* This actor serves as the backend for Seeker, a decentralized search engine
* built on the Internet Computer Protocol (ICP). It provides basic search
* functionality and metadata management for dApps and canisters.
*
* Features:
* - Search functionality with dummy results filtering
* - Metadata storage and retrieval for dApps/canisters
* - Stable storage for persistence across upgrades
* - Modular design for future scalability
*
* Author: Seeker Development Team
* Version: 1.0.0 (MVP)
*/

import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Option "mo:base/Option";
import Char "mo:base/Char";
import Nat "mo:base/Nat";

actor Seeker {
    
    // =============================================================================
    // STABLE VARIABLES & DATA STRUCTURES
    // =============================================================================
    
    /**
    * Stable storage for dApp/canister metadata
    * Key: Canister/dApp ID (Text)
    * Value: Metadata description (Text)
    * 
    * This uses stable variables to ensure data persists across canister upgrades
    */
    private stable var metadataEntries : [(Text, Text)] = [];
    
    /**
    * In-memory HashMap for efficient metadata operations
    * Initialized from stable storage on canister start
    */
    private var metadataStore = HashMap.HashMap<Text, Text>(10, Text.equal, Text.hash);
    
    // =============================================================================
    // SYSTEM FUNCTIONS
    // =============================================================================
    
    /**
    * System function called before canister upgrade
    * Saves the current state to stable memory
    */
    system func preupgrade() {
        metadataEntries := Iter.toArray(metadataStore.entries());
    };
    
    /**
    * System function called after canister upgrade
    * Restores state from stable memory
    */
    system func postupgrade() {
        metadataEntries := [];
    };
    
    // Initialize HashMap with stable data on first run
    for ((id, metadata) in metadataEntries.vals()) {
        metadataStore.put(id, metadata);
    };
    
    // =============================================================================
    // CORE PUBLIC METHODS
    // =============================================================================
    
    /**
    * Performs a search query and returns filtered dummy results
    * 
    * @param searchTerm - The search term to filter results by
    * @returns Array of search results that contain the query string (case-insensitive)
    * 
    * Note: This is MVP functionality with dummy data. In production, this would
    * interface with AI search algorithms and real canister/dApp indexing.
    */
    public func searchQuery(searchTerm: Text) : async [Text] {
        // Dummy search results representing various Web3 resources
        let dummyResults : [Text] = [
            "ICP Ledger Canister",
            "NFT Marketplace dApp",
            "DeFi Trading Platform",
            "Internet Identity Service",
            "Cycles Wallet Manager",
            "Governance Canister (NNS)",
            "Bitcoin Integration Canister",
            "Ethereum Bridge Protocol",
            "Web3 Social Network",
            "Decentralized File Storage",
            "Cross-Chain Swap dApp",
            "DAOs Management Platform",
            "DAppStore was launched on the ICP July 24th, 2025",
            "Cafe - Dev Collab Workspace/Tool"
        ];
        
        // Handle empty query case
        if (Text.size(searchTerm) == 0) {
            return dummyResults;
        };
        
        // Filter results based on case-insensitive query matching
        let lowercaseQuery = Text.map(searchTerm, func (c: Char) : Char {
            if (c >= 'A' and c <= 'Z') {
                Char.fromNat32(Char.toNat32(c) + 32)
            } else { c }
        });
        
        Array.filter<Text>(dummyResults, func(result: Text) : Bool {
            let lowercaseResult = Text.map(result, func (c: Char) : Char {
                if (c >= 'A' and c <= 'Z') {
                    Char.fromNat32(Char.toNat32(c) + 32)
                } else { c }
            });
            Text.contains(lowercaseResult, #text lowercaseQuery)
        })
    };
    
    /**
    * Adds metadata for a dApp or canister to the storage system
    * 
    * @param id - Unique identifier for the dApp/canister
    * @param description - Descriptive metadata about the dApp/canister
    * @returns Success message confirming the addition
    * 
    * This function handles both new additions and updates to existing entries
    */
    public func addMetadata(id: Text, description: Text) : async Text {
        // Validate input parameters
        if (Text.size(id) == 0) {
            return "Error: ID cannot be empty";
        };
        
        if (Text.size(description) == 0) {
            return "Error: Description cannot be empty";
        };
        
        // Check if updating existing entry
        let isUpdate = switch (metadataStore.get(id)) {
            case null { false };
            case (?_) { true };
        };
        
        // Store the metadata
        metadataStore.put(id, description);
        
        // Return appropriate success message
        if (isUpdate) {
            "Successfully updated metadata for ID: " # id
        } else {
            "Successfully added metadata for ID: " # id
        }
    };
    
    /**
    * Retrieves metadata for a specific dApp or canister ID
    * 
    * @param id - The unique identifier to look up
    * @returns Optional text containing the metadata, or null if not found
    * 
    * This function provides safe access to stored metadata with proper error handling
    */
    public func getMetadata(id: Text) : async ?Text {
        // Validate input
        if (Text.size(id) == 0) {
            return null;
        };
        
        // Retrieve and return metadata
        metadataStore.get(id)
    };
    
    // =============================================================================
    // HELPER FUNCTIONS & ENHANCEMENTS
    // =============================================================================
    
    /**
    * Returns all stored metadata entries as key-value pairs
    * 
    * @returns Array of tuples containing (ID, Description) pairs
    * 
    * Useful for administrative purposes and debugging. In production,
    * this might be restricted to admin users only.
    */
    public func listAllMetadata() : async [(Text, Text)] {
        Iter.toArray(metadataStore.entries())
    };
    
    /**
    * Returns the total count of stored metadata entries
    * 
    * @returns Natural number representing the count of entries
    * 
    * Useful for monitoring and analytics purposes
    */
    public func getMetadataCount() : async Nat {
        metadataStore.size()
    };
    
    /**
    * Removes metadata for a specific ID
    * 
    * @param id - The unique identifier to remove
    * @returns Success message or error if ID not found
    * 
    * This function provides cleanup capabilities for the metadata store
    */
    public func removeMetadata(id: Text) : async Text {
        if (Text.size(id) == 0) {
            return "Error: ID cannot be empty";
        };
        
        switch (metadataStore.remove(id)) {
            case null {
                "Error: No metadata found for ID: " # id
            };
            case (?_) {
                "Successfully removed metadata for ID: " # id
            };
        }
    };
    
    /**
    * Health check endpoint to verify canister status
    * 
    * @returns Status message indicating the canister is operational
    * 
    * Useful for monitoring and deployment verification
    */
    public func healthCheck() : async Text {
        "Seeker backend is operational. Metadata entries: " # Nat.toText(metadataStore.size())
    };
}
