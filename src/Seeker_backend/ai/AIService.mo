/**
* Seeker AI Service Module
* 
* This module provides AI-powered features for the Seeker search engine,
* working with your actual MetadataRecord structure and real ICP ecosystem data.
*
* Author: Seeker Development Team
* Version: 1.0.0 (MVP)
*/

import Array "mo:base/Array";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Char "mo:base/Char";
import Float "mo:base/Float";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Iter "mo:base/Iter";

module {
    
    /**
    * Simple text-to-lowercase conversion
    */
    private func toLowercase(text: Text) : Text {
        Text.map(text, func (c: Char) : Char {
            if (c >= 'A' and c <= 'Z') {
                Char.fromNat32(Char.toNat32(c) + 32)
            } else { c }
        })
    };

    /**
    * Internal helper types
    */
    private type CategoryData = {
        count: Nat;
        totalPopularity: Nat;
        allTags: [Text];
    };

    /**
    * Public types for AI service responses
    */
    public type SearchPatternAnalysis = {
        dominantCategories: [Text];
        suggestedCategories: [Text];
        searchBehavior: Text; // "new_user", "regular_user", "power_user"
        recommendations: [Text];
    };
    
    public type CategoryStat = {
        name: Text;
        count: Nat;
        avgPopularity: Float;
        topTags: [Text];
    };
    
    public type QueryAnalysis = {
        originalQuery: Text;
        enhancedQuery: Text;
        suggestedCategories: [Text];
        relatedTerms: [Text];
        confidenceScore: Float;
    };
    
    /**
    * AIService class providing intelligent search features
    * Tailored for your ICP ecosystem data
    */
    public class AIService() {
        
        // Knowledge base based on your actual data categories and tags
        let icpKnowledgeBase : [(Text, [Text])] = [
            ("defi", ["ICPSwap", "Ledger", "Trading", "Swap", "Liquidity", "Yield", "Governance", "Bitcoin"]),
            ("nft", ["Entrepot", "Marketplace", "Collectibles", "Art", "Digital Assets", "Trading"]),
            ("identity", ["Internet Identity", "Authentication", "WebAuthn", "Security", "Login", "Privacy"]),
            ("development", ["Cycles Wallet", "Cafe", "IC.rocks", "Explorer", "Canisters", "Tools"]),
            ("social", ["Distrikt", "DSCVR", "Community", "Content", "Creator Economy", "Web3"]),
            ("games", ["IC Games", "Gaming", "Entertainment", "Tournaments", "Blockchain Games"]),
            ("news", ["DAppStore", "Launch", "Platform", "Applications", "Marketplace"]),
            ("wallet", ["Plug", "Browser Extension", "ICP", "Cycles", "Transactions"]),
            ("bitcoin", ["Integration", "BTC", "Cross-chain", "Smart Contracts"]),
            ("ethereum", ["Bridge", "ETH", "Interoperability", "Cross-chain"]),
            ("ledger", ["ICP", "Transactions", "Balance", "Transfer", "Payments"]),
            ("governance", ["NNS", "Voting", "Proposals", "Democracy", "Neuron"])
        ];
        
        // Category-based trending suggestions from your data
        let categoryTrends : [(Text, [Text])] = [
            ("DeFi", ["ICP Ledger", "ICPSwap Exchange", "Bitcoin Integration", "NNS Governance"]),
            ("NFT", ["Entrepot Marketplace", "NFT Trading", "Digital Collectibles"]),
            ("Development", ["Cycles Wallet", "Cafe Workspace", "IC.rocks Explorer", "Plug Wallet"]),
            ("Social", ["Distrikt Network", "DSCVR Platform", "Web3 Social"]),
            ("Games", ["IC Games Platform", "Blockchain Gaming", "NFT Gaming"]),
            ("Identity", ["Internet Identity", "Authentication", "WebAuthn"])
        ];

        /**
        * Get most frequent tags from an array
        */
        private func getTopTags(tags: [Text], limit: Nat) : [Text] {
            if (tags.size() == 0) { return []; };
            
            var tagCounts = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);
            
            for (tag in tags.vals()) {
                switch (tagCounts.get(tag)) {
                    case (?count) { tagCounts.put(tag, count + 1) };
                    case null { tagCounts.put(tag, 1) };
                };
            };
            
            let tagEntries = Iter.toArray(tagCounts.entries());
            let sortedTags = Array.sort<(Text, Nat)>(tagEntries, func(a, b) {
                if (a.1 > b.1) { #less } else if (a.1 < b.1) { #greater } else { #equal }
            });
            
            let maxResults = if (sortedTags.size() > limit) { limit } else { sortedTags.size() };
            Array.tabulate<Text>(maxResults, func(i) { sortedTags[i].0 })
        };
        
        /**
        * Generate intelligent search suggestions based on searchQuery and your data
        * 
        * @param searchQuery - User's search query
        * @returns Array of relevant suggestions from your ecosystem
        */
        public func generateSuggestions(searchQuery: Text) : async [Text] {
            let queryLower = toLowercase(searchQuery);
            
            if (Text.size(searchQuery) == 0) {
                return ["ICP Ledger", "Internet Identity", "ICPSwap", "Entrepot", "Plug Wallet"];
            };
            
            // Find matching suggestions from ICP knowledge base
            let matchedSuggestions = Array.foldLeft<(Text, [Text]), [Text]>(
                icpKnowledgeBase,
                [],
                func(acc, (key, suggestions)) {
                    if (Text.contains(queryLower, #text key) or Text.contains(key, #text queryLower)) {
                        Array.append<Text>(acc, suggestions)
                    } else {
                        acc
                    }
                }
            );
            
            if (matchedSuggestions.size() > 0) {
                // Return top 5 suggestions
                Array.tabulate<Text>(
                    if (matchedSuggestions.size() > 5) { 5 } else { matchedSuggestions.size() },
                    func(i) { matchedSuggestions[i] }
                )
            } else {
                // Fallback to popular ICP ecosystem suggestions
                ["Internet Identity", "ICP Ledger", "ICPSwap DEX", "Entrepot NFT", "Plug Wallet"]
            }
        };
        
        /**
        * Get category-specific suggestions
        * 
        * @param category - Category to get suggestions for
        * @returns Array of suggestions for that category
        */
        public func getCategorySuggestions(category: Text) : async [Text] {
            switch (Array.find<(Text, [Text])>(categoryTrends, func((cat, _)) { Text.equal(cat, category) })) {
                case (?(_, suggestions)) { suggestions };
                case null { ["Explore " # category # " applications"] };
            }
        };
        
        /**
        * Enhanced query expansion using your ecosystem data
        * 
        * @param searchQuery - Original search query
        * @returns Enhanced query with related ICP terms
        */
        public func enhanceQuery(searchQuery: Text) : async Text {
            let queryLower = toLowercase(searchQuery);
            
            // Add relevant ICP ecosystem terms
            let enhancement = if (Text.contains(queryLower, #text "wallet")) {
                " cycles plug icp"
            } else if (Text.contains(queryLower, #text "nft")) {
                " entrepot marketplace collectibles"
            } else if (Text.contains(queryLower, #text "defi")) {
                " icpswap trading liquidity"
            } else if (Text.contains(queryLower, #text "social")) {
                " distrikt dscvr community"
            } else if (Text.contains(queryLower, #text "development") or Text.contains(queryLower, #text "dev")) {
                " cafe cycles canisters"
            } else if (Text.contains(queryLower, #text "identity") or Text.contains(queryLower, #text "auth")) {
                " webauthn security login"
            } else {
                ""
            };
            
            searchQuery # enhancement
        };
        
        /**
        * Calculate relevance score for MetadataRecord
        * 
        * @param searchQuery - Search query
        * @param record - MetadataRecord to score
        * @returns Relevance score (0.0 to 1.0)
        */
        public func calculateRelevance(searchQuery: Text, record: { title: Text; description: Text; tags: [Text]; searchKeywords: [Text]; popularity: Nat }) : async Float {
            let queryLower = toLowercase(searchQuery);
            let queryWords = Text.split(queryLower, #char ' ');
            var score : Float = 0.0;
            let queryWordCount = Iter.size(queryWords);
            
            if (queryWordCount == 0) {
                return 0.0;
            };
            
            // Title matches have highest weight (0.3)
            let titleLower = toLowercase(record.title);
            var titleMatches = 0;
            for (word in queryWords) {
                if (Text.contains(titleLower, #text word)) {
                    titleMatches += 1;
                };
            };
            score += 0.3 * Float.fromInt(titleMatches) / Float.fromInt(queryWordCount);
            
            // Description matches (0.2)
            let descLower = toLowercase(record.description);
            var descMatches = 0;
            for (word in queryWords) {
                if (Text.contains(descLower, #text word)) {
                    descMatches += 1;
                };
            };
            score += 0.2 * Float.fromInt(descMatches) / Float.fromInt(queryWordCount);
            
            // Tag matches (0.2)
            var tagMatches = 0;
            for (word in queryWords) {
                for (tag in record.tags.vals()) {
                    if (Text.contains(toLowercase(tag), #text word)) {
                        tagMatches += 1;
                    };
                };
            };
            if (record.tags.size() > 0) {
                score += 0.2 * Float.fromInt(tagMatches) / Float.fromInt(queryWordCount);
            };
            
            // Search keywords matches (0.15)
            var keywordMatches = 0;
            for (word in queryWords) {
                for (keyword in record.searchKeywords.vals()) {
                    if (Text.contains(toLowercase(keyword), #text word)) {
                        keywordMatches += 1;
                    };
                };
            };
            if (record.searchKeywords.size() > 0) {
                score += 0.15 * Float.fromInt(keywordMatches) / Float.fromInt(queryWordCount);
            };
            
            // Popularity boost (0.1) - normalize popularity score (0-100) to 0-0.1
            let popularityBoost = Float.fromInt(record.popularity) / 1000.0;
            score += popularityBoost;
            
            // Exact matches get bonus (0.05)
            if (Text.contains(titleLower, #text queryLower) or 
                Text.contains(descLower, #text queryLower)) {
                score += 0.05;
            };
            
            // Ensure score doesn't exceed 1.0
            if (score > 1.0) { 1.0 } else { score }
        };
        
        /**
        * Get trending terms based on your ecosystem data
        * 
        * @returns Array of trending search terms from your data
        */
        public func getTrendingTerms() : async [Text] {
            [
                "Internet Identity",
                "ICP Ledger",
                "ICPSwap DEX", 
                "DAppStore Launch",
                "Entrepot NFT",
                "Plug Wallet",
                "Bitcoin Integration",
                "Cafe Workspace"
            ]
        };
        
        /**
        * Get related records based on category and tags
        * 
        * @param record - Source record
        * @param allRecords - All available records to find relations
        * @returns Array of related record IDs
        */
        public func findRelatedRecords(record: { id: Text; category: Text; tags: [Text] }, allRecords: [{ id: Text; category: Text; tags: [Text] }]) : async [Text] {
            let relatedRecords = Array.filter<{ id: Text; category: Text; tags: [Text] }>(allRecords, func(r) {
                if (Text.equal(r.id, record.id)) {
                    false // Don't include self
                } else if (Text.equal(r.category, record.category)) {
                    true // Same category
                } else {
                    // Check for tag overlap
                    let hasCommonTag = Array.find<Text>(record.tags, func(tag1) {
                        Array.find<Text>(r.tags, func(tag2) { Text.equal(tag1, tag2) }) != null
                    }) != null;
                    hasCommonTag
                }
            });
            
            // Return max 5 related records
            let maxResults = if (relatedRecords.size() > 5) { 5 } else { relatedRecords.size() };
            Array.tabulate<Text>(maxResults, func(i) { relatedRecords[i].id })
        };
        
        /**
        * Analyze search patterns and provide insights
        * 
        * @param searchHistory - User's search history
        * @returns Analysis of user's search patterns
        */
        public func analyzeSearchPatterns(searchHistory: [Text]) : async SearchPatternAnalysis {
            if (searchHistory.size() == 0) {
                return {
                    dominantCategories = [];
                    suggestedCategories = ["DeFi", "Development", "Identity"];
                    searchBehavior = "new_user";
                    recommendations = await getTrendingTerms();
                };
            };
            
            var categoryInterest = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);
            
            // Analyze search terms to identify category interests
            for (searchTerm in searchHistory.vals()) {
                let termLower = toLowercase(searchTerm);
                for ((category, keywords) in icpKnowledgeBase.vals()) {
                    for (keyword in keywords.vals()) {
                        if (Text.contains(termLower, #text (toLowercase(keyword)))) {
                            switch (categoryInterest.get(category)) {
                                case (?count) { categoryInterest.put(category, count + 1) };
                                case null { categoryInterest.put(category, 1) };
                            };
                        };
                    };
                };
            };
            
            let interests = Iter.toArray(categoryInterest.entries());
            let dominantCategories = Array.map<(Text, Nat), Text>(interests, func((cat, _)) { cat });
            
            {
                dominantCategories = dominantCategories;
                suggestedCategories = if (dominantCategories.size() > 0) { dominantCategories } else { ["DeFi", "Development"] };
                searchBehavior = if (searchHistory.size() > 10) { "power_user" } else { "regular_user" };
                recommendations = await generatePersonalizedRecommendations(searchHistory);
            }
        };
        
        /**
        * Generate personalized recommendations based on search history
        * 
        * @param searchHistory - User's recent searches
        * @returns Personalized recommendations
        */
        public func generatePersonalizedRecommendations(searchHistory: [Text]) : async [Text] {
            if (searchHistory.size() == 0) {
                return await getTrendingTerms();
            };
            
            // Simple recommendation logic based on search patterns
            let recentSearch = searchHistory[searchHistory.size() - 1];
            let recentLower = toLowercase(recentSearch);
            
            if (Text.contains(recentLower, #text "defi")) {
                ["ICPSwap Advanced Features", "Bitcoin DeFi", "Yield Farming", "Governance Staking"]
            } else if (Text.contains(recentLower, #text "nft")) {
                ["NFT Creator Tools", "Digital Art Platforms", "NFT Gaming", "Collectibles Trading"]
            } else if (Text.contains(recentLower, #text "development")) {
                ["Advanced Canister Tools", "IC SDK", "Deployment Guides", "Developer Resources"]
            } else if (Text.contains(recentLower, #text "social")) {
                ["Creator Economy", "Community Building", "Social Tokens", "Content Platforms"]
            } else {
                await getTrendingTerms()
            }
        };
        
        /**
        * Get category statistics from your data
        * 
        * @param records - All MetadataRecords to analyze
        * @returns Statistics about categories
        */
        public func getCategoryStats(records: [{ category: Text; popularity: Nat; tags: [Text] }]) : async [CategoryStat] {
            var categoryMap = HashMap.HashMap<Text, CategoryData>(10, Text.equal, Text.hash);
            
            // Collect category data
            for (record in records.vals()) {
                switch (categoryMap.get(record.category)) {
                    case (?data) {
                        let newData = {
                            count = data.count + 1;
                            totalPopularity = data.totalPopularity + record.popularity;
                            allTags = Array.append<Text>(data.allTags, record.tags);
                        };
                        categoryMap.put(record.category, newData);
                    };
                    case null {
                        categoryMap.put(record.category, {
                            count = 1;
                            totalPopularity = record.popularity;
                            allTags = record.tags;
                        });
                    };
                };
            };
            
            // Convert to CategoryStat array
            let categoryEntries = Iter.toArray(categoryMap.entries());
            Array.map<(Text, CategoryData), CategoryStat>(categoryEntries, func((category, data)) {
                let avgPopularity = if (data.count > 0) {
                    Float.fromInt(data.totalPopularity) / Float.fromInt(data.count)
                } else { 0.0 };
                
                {
                    name = category;
                    count = data.count;
                    avgPopularity = avgPopularity;
                    topTags = getTopTags(data.allTags, 3);
                }
            })
        };
        
        /**
        * Advanced searchQuery analysis with your ecosystem context
        * 
        * @param searchQuery - Search query to analyze
        * @returns Detailed analysis with ICP ecosystem context
        */
        public func analyzeQueryAdvanced(searchQuery: Text) : async QueryAnalysis {
            let queryLower = toLowercase(searchQuery);
            let enhancedQuery = await enhanceQuery(searchQuery);
            
            // Determine suggested categories based on searchQuery content
            var suggestedCategories: [Text] = [];
            if (Text.contains(queryLower, #text "defi") or Text.contains(queryLower, #text "swap") or Text.contains(queryLower, #text "trading")) {
                suggestedCategories := ["DeFi"];
            } else if (Text.contains(queryLower, #text "nft") or Text.contains(queryLower, #text "art") or Text.contains(queryLower, #text "collectible")) {
                suggestedCategories := ["NFT"];
            } else if (Text.contains(queryLower, #text "social") or Text.contains(queryLower, #text "community")) {
                suggestedCategories := ["Social"];
            } else if (Text.contains(queryLower, #text "dev") or Text.contains(queryLower, #text "canister") or Text.contains(queryLower, #text "cycle")) {
                suggestedCategories := ["Development"];
            } else if (Text.contains(queryLower, #text "game") or Text.contains(queryLower, #text "gaming")) {
                suggestedCategories := ["Games"];
            } else if (Text.contains(queryLower, #text "identity") or Text.contains(queryLower, #text "auth")) {
                suggestedCategories := ["Identity"];
            } else {
                suggestedCategories := ["DeFi", "Development"];
            };
            
            // Get related terms
            let relatedTerms = await generateSuggestions(searchQuery);
            
            // Calculate confidence score based on searchQuery specificity
            let wordCount = Iter.size(Text.split(queryLower, #char ' '));
            let confidenceScore = if (wordCount == 1) {
                0.6
            } else if (wordCount <= 3) {
                0.8
            } else {
                0.9
            };
            
            {
                originalQuery = searchQuery;
                enhancedQuery = enhancedQuery;
                suggestedCategories = suggestedCategories;
                relatedTerms = relatedTerms;
                confidenceScore = confidenceScore;
            }
        };
    }
}