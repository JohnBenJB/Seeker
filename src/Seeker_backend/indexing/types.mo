/**
* Seeker Types Module
* 
* This module defines all the data types used throughout the Seeker search engine.
* It provides type safety and clear interfaces for all components.
*
* Author: Seeker Development Team
* Version: 1.0.0 (MVP)
*/

module {
    
    /**
    * MetadataRecord - Core data structure matching your indexing.mo
    * Represents a Web3 resource with comprehensive metadata
    */
    public type MetadataRecord = {
        id: Text;                    // Unique identifier
        title: Text;                 // Display title
        description: Text;           // Detailed description
        category: Text;              // Category (DeFi, NFT, Social, Development, etc.)
        url: Text;                   // Resource URL
        tags: [Text];               // Searchable tags
        searchKeywords: [Text];      // Keywords for enhanced search
        popularity: Nat;             // Popularity score (0-100)
    };
    
    /**
    * Enhanced search query parameters
    */
    public type SearchQuery = {
        text: Text;                  // Search text
        category: ?Text;             // Optional category filter
        minPopularity: ?Nat;         // Minimum popularity threshold
        limit: ?Nat;                 // Optional result limit
        offset: ?Nat;                // Optional pagination offset
        sortBy: ?SortOption;         // Sorting preference
    };
    
    /**
    * Sorting options for search results
    */
    public type SortOption = {
        #Relevance;                  // Sort by search relevance
        #Popularity;                 // Sort by popularity score
        #Alphabetical;               // Sort alphabetically
        #Category;                   // Sort by category
    };
    
    /**
    * Enhanced search results with metadata
    */
    public type SearchResults = {
        records: [MetadataRecord];   // Found records
        totalCount: Nat;             // Total matching results
        searchQuery: SearchQuery;    // Original search query for reference
        categories: [Text];          // Available categories in results
        avgPopularity: Float;        // Average popularity of results
    };
    
    /**
    * Category statistics
    */
    public type CategoryStats = {
        name: Text;                  // Category name
        count: Nat;                  // Number of records in category
        avgPopularity: Float;        // Average popularity in category
        topTags: [Text];            // Most common tags in category
    };
    
    /**
    * Search analytics data
    */
    public type SearchAnalytics = {
        totalSearches: Nat;          // Total number of searches performed
        popularTerms: [(Text, Nat)]; // Popular search terms with counts
        categoryBreakdown: [CategoryStats]; // Statistics by category
        lastUpdated: Int;            // Timestamp of last update
    };
    
    /**
    * Metadata entry for the main Seeker actor (keeping compatibility)
    */
    public type MetadataEntry = {
        id: Text;                    // Resource identifier
        description: Text;           // Metadata description
        dateAdded: Int;              // Timestamp when added
        lastUpdated: Int;            // Timestamp of last update
    };
    
    /**
    * User session information
    */
    public type UserSession = {
        userId: Text;                // User identifier (e.g., Internet Identity)
        sessionId: Text;             // Session identifier
        createdAt: Int;              // Session creation timestamp
        expiresAt: Int;              // Session expiration timestamp
        isActive: Bool;              // Session status
        searchHistory: [Text];       // Recent search terms
        preferredCategories: [Text]; // User's preferred categories
    };
    
    /**
    * User preferences
    */
    public type UserPreferences = {
        darkMode: Bool;              // UI theme preference
        resultsPerPage: Nat;         // Pagination preference
        defaultSort: SortOption;     // Default sorting preference
        preferredCategories: [Text]; // Favorite categories
        enableNotifications: Bool;   // Notification settings
    };
    
    /**
    * AI service response structure
    */
    public type AIResponse = {
        suggestions: [Text];         // Search suggestions
        enhancedQuery: Text;         // Enhanced version of user query
        relevanceScores: [Float];    // Relevance scores for results
        relatedTerms: [Text];        // Related search terms
        processingTime: Nat;         // Processing time in milliseconds
    };
    
    /**
    * Trending data structure
    */
    public type TrendingData = {
        trendingRecords: [MetadataRecord]; // Currently trending records
        trendingCategories: [Text];        // Popular categories
        trendingSearchTerms: [Text];       // Popular search terms
        timeframe: Text;                   // Trend analysis timeframe
    };
    
    /**
    * API response wrapper for consistent responses
    */
    public type ApiResponse<T> = {
        success: Bool;               // Operation success status
        data: ?T;                    // Response data
        message: Text;               // Status message
        timestamp: Int;              // Response timestamp
        requestId: ?Text;            // Optional request tracking ID
    };
    
    /**
    * Error types for better error handling
    */
    public type SeekerError = {
        #NotFound: Text;             // Resource not found
        #InvalidInput: Text;         // Invalid input parameters
        #InternalError: Text;        // Internal server error
        #Unauthorized: Text;         // Unauthorized access
        #RateLimited: Text;          // Rate limit exceeded
        #ServiceUnavailable: Text;   // Service temporarily unavailable
    };
    
    /**
    * System health status
    */
    public type HealthStatus = {
        status: Text;                // Overall system status
        uptime: Nat;                 // System uptime in seconds
        totalRecords: Nat;           // Total indexed records
        totalSearches: Nat;          // Total searches performed
        activeSessions: Nat;         // Currently active user sessions
        lastIndexUpdate: Int;        // Last time index was updated
    };
    
    /**
    * Pagination helper
    */
    public type PaginationInfo = {
        currentPage: Nat;            // Current page number (1-based)
        totalPages: Nat;             // Total number of pages
        itemsPerPage: Nat;           // Items per page
        totalItems: Nat;             // Total number of items
        hasNext: Bool;               // Whether there's a next page
        hasPrevious: Bool;           // Whether there's a previous page
    };
    
    /**
    * Advanced search filters
    */
    public type SearchFilters = {
        categories: ?[Text];         // Filter by multiple categories
        minPopularity: ?Nat;         // Minimum popularity score
        maxPopularity: ?Nat;         // Maximum popularity score
        tags: ?[Text];               // Filter by tags
        hasUrl: ?Bool;               // Filter records with/without URLs
        dateRange: ?{                // Date range filter
            from: Int;
            to: Int;
        };
    };
}