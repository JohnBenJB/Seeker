/**
* Seeker - Decentralized AI-Powered Search Engine for Web3
* 
* This actor serves as the backend for Seeker, a decentralized search engine
* built on the Internet Computer Protocol (ICP). It provides basic search
* functionality and metadata management for dApps and canisters.
*
* Features:
* - Search functionality with real canister data from JSON database
* - Metadata storage and retrieval for dApps/canisters
* - Stable storage for persistence across upgrades
* - Backward compatibility with existing API
*
* Author: Seeker Development Team
* Version: 1.1.0 (With JSON Data Integration)
*/

import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Char "mo:base/Char";
import Nat "mo:base/Nat";

persistent actor Seeker {
    
    // =============================================================================
    // DATA TYPES
    // =============================================================================
    
    public type CanisterMetadata = {
        developer: Text;
        launch_date: Text;
        tvl: Text;
        users: Text;
        github: Text;
        twitter: Text;
    };
    
    public type CanisterInfo = {
        id: Text;
        name: Text;
        description: Text;
        category: Text;
        tags: [Text];
        url: Text;
        canister_id: Text;
        status: Text;
        metadata: CanisterMetadata;
    };
    
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
    stable var metadataEntries : [(Text, Text)] = [];
    
    /**
    * In-memory HashMap for efficient metadata operations
    * Initialized from stable storage on canister start
    * Explicitly declared as transient since it's rebuilt from stable storage
    */
    transient var metadataStore = HashMap.HashMap<Text, Text>(10, Text.equal, Text.hash);
    
    /**
    * Canister database from your JSON file
    */
    let canisterDatabase : [CanisterInfo] = 
    [
       {
            id = "icpswap";
            name = "ICPSwap";
            description = "The premier decentralized exchange (DEX) on the Internet Computer for trading ICP tokens and other assets.";
            category = "DeFi";
            tags = ["dex", "trading", "swap", "tokens", "exchange"];
            url = "https://app.icpswap.com";
            canister_id = "ca6gz-lqaaa-aaaah-qby5q-cai";
            status = "active";
            metadata = {
                developer = "ICPSwap Team";
                launch_date = "2022-03-01";
                tvl = "$5M+";
                users = "10K+";
                github = "https://github.com/ICPSwap-Labs";
                twitter = "@ICPSwap";
            };
        },
        {
            id = "sonic-dex";
            name = "Sonic DEX";
            description = "Fast and efficient decentralized exchange with advanced trading features and liquidity pools.";
            category = "DeFi";
            tags = ["dex", "trading", "liquidity", "fast", "amm"];
            url = "https://app.sonic.ooo";
            canister_id = "3xwpq-ziaaa-aaaah-qcn4a-cai";
            status = "active";
            metadata = {
                developer = "Psychedelic";
                launch_date = "2021-11-15";
                tvl = "$10M+";
                users = "15K+";
                github = "https://github.com/Psychedelic";
                twitter = "@sonic_ooo";
            };
        },
        {
            id = "icdex";
            name = "ICDex";
            description = "Order book-based decentralized exchange for advanced trading with limit orders and professional tools.";
            category = "DeFi";
            tags = ["dex", "orderbook", "trading", "professional", "limit-orders"];
            url = "https://ic-dex.com";
            canister_id = "j4d4d-pqaaa-aaaah-qc3qq-cai";
            status = "active";
            metadata = {
                developer = "ICDex Team";
                launch_date = "2022-06-01";
                tvl = "$2M+";
                users = "5K+";
                github = "https://github.com/Psychedelic";
                twitter = "@ICDex";
            };
        },
        {
            id = "infinityswap";
            name = "InfinitySwap";
            description = "Multi-chain DEX enabling seamless token swaps across different blockchain networks via ICP.";
            category = "DeFi";
            tags = ["dex", "multichain", "bridge", "cross-chain", "swap"];
            url = "https://infinityswap.one";
            canister_id = "gzjho-liaaa-aaaal-qaiva-cai";
            status = "active";
            metadata = {
                developer = "InfinitySwap";
                launch_date = "2022-01-15";
                tvl = "$3M+";
                users = "8K+";
                github = "https://github.com/infinity-swap";
                twitter = "@infinityswap";
            };
        },
        {
            id = "kongswap";
            name = "KongSwap";
            description = "Community-driven DEX with innovative tokenomics and yield farming opportunities.";
            category = "DeFi";
            tags = ["dex", "yield-farming", "community", "tokenomics", "kong"];
            url = "https://kongswap.io";
            canister_id = "2ipq2-uqaaa-aaaar-qailq-cai";
            status = "active";
            metadata = {
                developer = "Kong DAO";
                launch_date = "2023-02-01";
                tvl = "$1.5M+";
                users = "3K+";
                github = "https://github.com/Psychedelic";
                twitter = "@KongSwap";
            };
        },
        {
            id = "iclighthouse";
            name = "ICLightHouse";
            description = "Professional trading platform with advanced analytics, portfolio management, and DeFi tools.";
            category = "DeFi";
            tags = ["trading", "analytics", "portfolio", "professional", "lighthouse"];
            url = "https://iclighthouse.xyz";
            canister_id = "hhaaz-2aaaa-aaaah-qclfq-cai";
            status = "active";
            metadata = {
                developer = "ICLightHouse Team";
                launch_date = "2022-04-01";
                tvl = "$4M+";
                users = "7K+";
                github = "https://github.com/iclighthouse";
                twitter = "@ICLighthouse";
            };
        },
        {
            id = "funded";
            name = "Funded";
            description = "Decentralized crowdfunding platform enabling community-driven project funding and investment.";
            category = "DeFi";
            tags = ["crowdfunding", "investment", "community", "funding", "projects"];
            url = "https://funded.app";
            canister_id = "vtrom-gqaaa-aaaah-qdkma-cai";
            status = "active";
            metadata = {
                developer = "Funded Team";
                launch_date = "2023-01-15";
                tvl = "100K+ ICP";
                users = "2K+";
                github = "https://github.com/Psychedelic";
                twitter = "@FundedApp";
            };
        },
        {
            id = "entrepot";
            name = "Entrepot";
            description = "The largest NFT marketplace on Internet Computer for buying, selling, and discovering digital collectibles.";
            category = "NFT & Digital Assets";
            tags = ["nft", "marketplace", "collectibles", "digital-art", "trading"];
            url = "https://entrepot.app";
            canister_id = "jeghr-iaaaa-aaaah-qco7q-cai";
            status = "active";
            metadata = {
                developer = "Toniq Labs";
                launch_date = "2021-08-01";
                tvl = "1M+ ICP volume";
                users = "25K+";
                github = "https://github.com/Toniq-Labs";
                twitter = "@entrepot_app";
            };
        },
        {
            id = "nftanvil";
            name = "NFTAnvil";
            description = "NFT creation and minting platform with advanced tools for artists and collectors.";
            category = "NFT & Digital Assets";
            tags = ["nft", "minting", "creation", "artists", "tools"];
            url = "https://nftanvil.com";
            canister_id = "bzsui-sqaaa-aaaah-qce2a-cai";
            status = "active";
            metadata = {
                developer = "Infu";
                launch_date = "2021-10-01";
                tvl = "500K+ ICP";
                users = "15K+";
                github = "https://github.com/infu/nftanvil";
                twitter = "@NFTAnvil";
            };
        },
        {
            id = "origyn-nft";
            name = "Origyn";
            description = "Premium NFT platform for luxury brands and high-value digital assets with authentication.";
            category = "NFT & Digital Assets";
            tags = ["nft", "luxury", "authentication", "premium", "brands"];
            url = "https://origyn.com";
            canister_id = "lkmpg-riaaa-aaaah-qcqsq-cai";
            status = "active";
            metadata = {
                developer = "Origyn Foundation";
                launch_date = "2022-03-01";
                tvl = "$2M+";
                users = "5K+";
                github = "https://github.com/Psychedelic";
                twitter = "@origyn_nft";
            };
        },
        {
            id = "bitbasel-art";
            name = "BitBasel Art Marketplace";
            description = "Curated digital art marketplace featuring contemporary artists and exclusive collections.";
            category = "NFT & Digital Assets";
            tags = ["art", "marketplace", "curated", "contemporary", "exclusive"];
            url = "https://bitbasel.com";
            canister_id = "4c4fd-caaaa-aaaah-qc3ra-cai";
            status = "active";
            metadata = {
                developer = "BitBasel";
                launch_date = "2023-05-01";
                tvl = "100+ artworks";
                users = "1K+";
                github = "https://github.com/Psychedelic";
                twitter = "@BitBasel";
            };
        },
        {
            id = "dragginz";
            name = "Dragginz";
            description = "Play-to-earn NFT game featuring dragon battles, breeding, and blockchain-based gaming economy.";
            category = "Gaming & Metaverse";
            tags = ["p2e", "nft-game", "dragons", "battles", "breeding"];
            url = "https://dragginz.io";
            canister_id = "zfcdd-tqaaa-aaaah-qckva-cai";
            status = "active";
            metadata = {
                developer = "Dragginz Team";
                launch_date = "2022-09-01";
                tvl = "50K+ ICP";
                users = "8K+";
                github = "https://github.com/Psychedelic";
                twitter = "@dragginz_io";
            };
        },
        {
            id = "cubetopia";
            name = "Cubetopia";
            description = "Blockchain-based voxel metaverse where players can build, own, and monetize virtual worlds.";
            category = "Gaming & Metaverse";
            tags = ["metaverse", "voxel", "building", "virtual-world", "monetization"];
            url = "https://cubetopia.io";
            canister_id = "vlhm2-4iaaa-aaaah-qcvlq-cai";
            status = "active";
            metadata = {
                developer = "Cubetopia Studios";
                launch_date = "2023-01-01";
                tvl = "32.5K+ ICP";
                users = "5K+";
                github = "https://github.com/Psychedelic";
                twitter = "@Cubetopia_io";
            };
        },
        {
            id = "autoroyale";
            name = "AutoRoyale";
            description = "Multiplayer battle royale racing game with NFT cars and blockchain-powered tournaments.";
            category = "Gaming & Metaverse";
            tags = ["racing", "battle-royale", "nft-cars", "tournaments", "multiplayer"];
            url = "https://autoroyale.com";
            canister_id = "zgeol-wqaaa-aaaah-qcs5a-cai";
            status = "active";
            metadata = {
                developer = "AutoRoyale Team";
                launch_date = "2022-12-01";
                tvl = "25K+ ICP";
                users = "3K+";
                github = "https://github.com/Psychedelic";
                twitter = "@AutoRoyaleGame";
            };
        },
        {
            id = "cosmicrafts";
            name = "Cosmicrafts";
            description = "Space exploration NFT game with ship crafting, resource mining, and interstellar adventures.";
            category = "Gaming & Metaverse";
            tags = ["space", "nft-game", "crafting", "mining", "exploration"];
            url = "https://cosmicrafts.com";
            canister_id = "x6occ-biaaa-aaaah-qckmq-cai";
            status = "active";
            metadata = {
                developer = "Cosmicrafts Studios";
                launch_date = "2023-03-01";
                tvl = "15K+ ICP";
                users = "10K+";
                github = "https://github.com/Psychedelic";
                twitter = "@Cosmicrafts";
            };
        },
        {
            id = "isotopic-game-store";
            name = "Isotopic Game Store";
            description = "Decentralized game distribution platform and marketplace for Web3 games and digital content.";
            category = "Gaming & Metaverse";
            tags = ["game-store", "distribution", "marketplace", "web3-games", "platform"];
            url = "https://isotopic.io";
            canister_id = "suaf3-hqaaa-aaaaf-qaaya-cai";
            status = "active";
            metadata = {
                developer = "Isotopic";
                launch_date = "2022-07-01";
                tvl = "100+ games";
                users = "20K+";
                github = "https://github.com/Isotopic";
                twitter = "@IsotopicIO";
            };
        },
        {
            id = "openchat";
            name = "OpenChat";
            description = "Fully decentralized messaging platform with crypto payments, group chats, and end-to-end encryption.";
            category = "Social & Communication";
            tags = ["messaging", "chat", "crypto-payments", "decentralized", "encryption"];
            url = "https://oc.app";
            canister_id = "6hsbt-vqaaa-aaaaf-aaafq-cai";
            status = "active";
            metadata = {
                developer = "OpenChat";
                launch_date = "2021-05-01";
                tvl = "N/A";
                users = "80K+";
                github = "https://github.com/open-chat-labs";
                twitter = "@OpenChat";
            };
        },
        {
            id = "dscvr";
            name = "DSCVR";
            description = "Decentralized social network for content creation, community building, and Web3 social engagement.";
            category = "Social & Communication";
            tags = ["social-network", "content", "community", "web3-social", "engagement"];
            url = "https://dscvr.one";
            canister_id = "h5aet-waaaa-aaaab-qaamq-cai";
            status = "active";
            metadata = {
                developer = "DSCVR";
                launch_date = "2021-02-01";
                tvl = "N/A";
                users = "200K+";
                github = "https://github.com/Psychedelic";
                twitter = "@dscvr_one";
            };
        },
        {
            id = "distrikt";
            name = "Distrikt";
            description = "Professional social network for Web3 careers, networking, and decentralized professional profiles.";
            category = "Social & Communication";
            tags = ["professional", "networking", "careers", "web3", "profiles"];
            url = "https://az5sd-cqaaa-aaaah-qckea-cai.ic0.app";
            canister_id = "az5sd-cqaaa-aaaah-qckea-cai";
            status = "active";
            metadata = {
                developer = "Distrikt";
                launch_date = "2021-08-01";
                tvl = "N/A";
                users = "110K+";
                github = "https://github.com/Psychedelic";
                twitter = "@DistriktApp";
            };
        },
        {
            id = "taggr";
            name = "TAGGR";
            description = "Decentralized microblogging platform with token rewards and community-driven content moderation.";
            category = "Social & Communication";
            tags = ["microblogging", "rewards", "community", "moderation", "tokens"];
            url = "https://taggr.link";
            canister_id = "pjihx-aaaaa-aaaam-qaapq-cai";
            status = "active";
            metadata = {
                developer = "TAGGR";
                launch_date = "2022-11-01";
                tvl = "N/A";
                users = "5K+";
                github = "https://github.com/Psychedelic";
                twitter = "@TaggrLink";
            };
        },
        {
            id = "yral";
            name = "Yral";
            description = "Short-form video platform for Web3 creators with tokenized content and creator monetization.";
            category = "Social & Communication";
            tags = ["video", "creators", "monetization", "short-form", "tokenized"];
            url = "https://yral.com";
            canister_id = "4c4fd-caaaa-aaaah-qc26q-cai";
            status = "active";
            metadata = {
                developer = "Yral Team";
                launch_date = "2023-06-01";
                tvl = "N/A";
                users = "200K+";
                github = "https://github.com/Psychedelic";
                twitter = "@yral_app";
            };
        },
        {
            id = "internet-identity";
            name = "Internet Identity";
            description = "Secure, anonymous authentication system using WebAuthn for seamless Web3 identity management.";
            category = "Identity & Privacy";
            tags = ["authentication", "identity", "webauthn", "security", "anonymous"];
            url = "https://identity.ic0.app";
            canister_id = "qhbym-qaaaa-aaaah-qclfq-cai";
            status = "active";
            metadata = {
                developer = "DFINITY Foundation";
                launch_date = "2021-05-01";
                tvl = "N/A";
                users = "1M+";
                github = "https://github.com/dfinity/internet-identity";
                twitter = "@dfinity";
            };
        },
        {
            id = "nfid";
            name = "NFID";
            description = "Multi-chain identity wallet connecting Web2 and Web3 with Google login and cross-chain support.";
            category = "Identity & Privacy";
            tags = ["wallet", "identity", "multichain", "web2-web3", "google-login"];
            url = "https://nfid.one";
            canister_id = "p5deo-6aaaa-aaaah-qczgq-cai";
            status = "active";
            metadata = {
                developer = "NFID";
                launch_date = "2022-08-01";
                tvl = "N/A";
                users = "50K+";
                github = "https://github.com/internet-identity-labs";
                twitter = "@nfidapp";
            };
        },
        {
            id = "plug-wallet";
            name = "Plug Wallet";
            description = "Browser extension wallet for ICP with DeFi integration, NFT support, and dApp connectivity.";
            category = "Identity & Privacy";
            tags = ["wallet", "browser-extension", "defi", "nft", "dapp-connector"];
            url = "https://plugwallet.ooo";
            canister_id = "rdmx6-jaaaa-aaaah-qdrqq-cai";
            status = "active";
            metadata = {
                developer = "Psychedelic";
                launch_date = "2021-09-01";
                tvl = "N/A";
                users = "150K+";
                github = "https://github.com/Psychedelic";
                twitter = "@plug_wallet";
            };
        },
        {
            id = "oisy-wallet";
            name = "OISY Wallet";
            description = "Multi-chain wallet with Internet Identity integration supporting Bitcoin, Ethereum, and ICP.";
            category = "Identity & Privacy";
            tags = ["wallet", "multichain", "bitcoin", "ethereum", "internet-identity"];
            url = "https://oisy.com";
            canister_id = "sav4j-kqaaa-aaaal-qb2va-cai";
            status = "active";
            metadata = {
                developer = "DFINITY Foundation";
                launch_date = "2024-01-01";
                tvl = "N/A";
                users = "25K+";
                github = "https://github.com/dfinity/oisy-wallet";
                twitter = "@dfinity";
            };
        },
        {
            id = "nns-dapp";
            name = "NNS Dapp";
            description = "Network Nervous System interface for ICP governance, neuron management, and staking rewards.";
            category = "Infrastructure & Developer Tools";
            tags = ["governance", "staking", "neurons", "nns", "voting"];
            url = "https://nns.ic0.app";
            canister_id = "qoctq-giaaa-aaaah-aaaea-cai";
            status = "active";
            metadata = {
                developer = "DFINITY Foundation";
                launch_date = "2021-05-01";
                tvl = "300M+ ICP staked";
                users = "100K+";
                github = "https://github.com/dfinity/nns-dapp";
                twitter = "@dfinity";
            };
        },
        {
            id = "icp-explorer";
            name = "ICP Explorer";
            description = "Blockchain explorer for Internet Computer providing transaction history, canister info, and network analytics.";
            category = "Infrastructure & Developer Tools";
            tags = ["explorer", "blockchain", "transactions", "analytics", "network"];
            url = "https://explorer.icpleague.org";
            canister_id = "qsgjb-riaaa-aaaah-aaijq-cai";
            status = "active";
            metadata = {
                developer = "ICP League";
                launch_date = "2021-06-01";
                tvl = "N/A";
                users = "50K+";
                github = "https://github.com/Psychedelic";
                twitter = "@ICPLeague";
            };
        },
        {
            id = "canistergeek";
            name = "Canistergeek";
            description = "Comprehensive analytics and monitoring platform for ICP canisters and dApp performance tracking.";
            category = "Infrastructure & Developer Tools";
            tags = ["analytics", "monitoring", "performance", "canisters", "tracking"];
            url = "https://canistergeek.com";
            canister_id = "nkqop-siaaa-aaaah-qcgzq-cai";
            status = "active";
            metadata = {
                developer = "Canistergeek";
                launch_date = "2022-02-01";
                tvl = "N/A";
                users = "5K+";
                github = "https://github.com/usergeek";
                twitter = "@canistergeek";
            };
        },
        {
            id = "cycleops";
            name = "CycleOps";
            description = "Canister monitoring and management tool for tracking cycles, performance, and operational metrics.";
            category = "Infrastructure & Developer Tools";
            tags = ["monitoring", "cycles", "management", "metrics", "operations"];
            url = "https://cycleops.dev";
            canister_id = "uxyan-oyaaa-aaaah-qcn5a-cai";
            status = "active";
            metadata = {
                developer = "CycleOps";
                launch_date = "2022-10-01";
                tvl = "450+ canisters monitored";
                users = "2K+";
                github = "https://github.com/Psychedelic";
                twitter = "@CycleOps";
            };
        },
        {
            id = "motoko-playground";
            name = "Motoko Playground";
            description = "Browser-based IDE for learning and experimenting with Motoko programming language.";
            category = "Infrastructure & Developer Tools";
            tags = ["ide", "motoko", "learning", "development", "playground"];
            url = "https://m7sm4-2iaaa-aaaab-qabra-cai.ic0.app";
            canister_id = "m7sm4-2iaaa-aaaab-qabra-cai";
            status = "active";
            metadata = {
                developer = "DFINITY Foundation";
                launch_date = "2021-05-01";
                tvl = "N/A";
                users = "25K+";
                github = "https://github.com/dfinity/motoko-playground";
                twitter = "@dfinity";
            };
        },
        {
            id = "kinic";
            name = "Kinic";
            description = "Decentralized search engine for Web3 content and blockchain data discovery across multiple networks.";
            category = "Productivity & Utilities";
            tags = ["search", "web3", "discovery", "blockchain-data", "decentralized"];
            url = "https://kinic.io";
            canister_id = "xnjld-hqaaa-aaaah-qcqbq-cai";
            status = "active";
            metadata = {
                developer = "Kinic";
                launch_date = "2022-12-01";
                tvl = "N/A";
                users = "20K+";
                github = "https://github.com/Psychedelic";
                twitter = "@kinic_io";
            };
        },
        {
            id = "juno";
            name = "Juno";
            description = "Serverless platform for building and deploying Web3 applications with built-in analytics and hosting.";
            category = "Infrastructure & Developer Tools";
            tags = ["serverless", "hosting", "analytics", "web3-platform", "deployment"];
            url = "https://juno.build";
            canister_id = "ivg37-qiaaa-aaaah-qckvq-cai";
            status = "active";
            metadata = {
                developer = "Juno";
                launch_date = "2023-04-01";
                tvl = "N/A";
                users = "10K+";
                github = "https://github.com/junobuild";
                twitter = "@junobuild";
            };
        },
        {
            id = "catalyze";
            name = "Catalyze";
            description = "Community platform for Web3 projects offering governance tools, member management, and collaboration features.";
            category = "Social & Communication";
            tags = ["community", "governance", "collaboration", "web3-projects", "management"];
            url = "https://catalyze.one";
            canister_id = "rdbmz-kiaaa-aaaah-qc6mq-cai";
            status = "active";
            metadata = {
                developer = "Catalyze";
                launch_date = "2022-08-01";
                tvl = "N/A";
                users = "15K+";
                github = "https://github.com/Psychedelic";
                twitter = "@CatalyzeDAO";
            };
        },
        {
            id = "bioniq";
            name = "Bioniq";
            description = "Decentralized social platform combining social media with DeFi features and creator monetization.";
            category = "Social & Communication";
            tags = ["social-media", "defi", "creators", "monetization", "community"];
            url = "https://bioniq.io";
            canister_id = "u4gun-wyaaa-aaaah-qcqea-cai";
            status = "active";
            metadata = {
                developer = "Bioniq";
                launch_date = "2023-02-01";
                tvl = "N/A";
                users = "45K+";
                github = "https://github.com/Psychedelic";
                twitter = "@BioniqApp";
            };
        },
        {
            id = "mora";
            name = "MORA";
            description = "Decentralized content platform for writers and readers with tokenized publishing and creator rewards.";
            category = "Social & Communication";
            tags = ["content", "writing", "publishing", "rewards", "tokenized"];
            url = "https://mora.app";
            canister_id = "jqajs-xiaaa-aaaah-qcqwq-cai";
            status = "active";
            metadata = {
                developer = "MORA";
                launch_date = "2022-06-01";
                tvl = "2K+ articles";
                users = "10K+";
                github = "https://github.com/Psychedelic";
                twitter = "@MoraApp";
            };
        },
        // You can add more entries from your db.json here
    ];
    
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
    // CORE PUBLIC METHODS (Maintaining Backward Compatibility)
    // =============================================================================
    
    /**
    * Performs a search query and returns formatted results
    * 
    * @param searchTerm - The search term to filter results by
    * @returns Array of search results that contain the query string (case-insensitive)
    * 
    * This function now searches the real canister database instead of dummy data
    */
    public func searchQuery(searchTerm: Text) : async [Text] {
        // Search the canister database
        let matchingCanisters = searchCanisterDatabase(searchTerm);
        
        // Format results for backward compatibility
        Array.map<CanisterInfo, Text>(matchingCanisters, func(canister: CanisterInfo) : Text {
            canister.name # " - " # canister.description
        })
    };
    
    /**
    * Enhanced search function that returns full canister information
    * 
    * @param searchTerm - The search term to filter results by
    * @returns Array of matching canister information objects
    */
    public func searchCanisters(searchTerm: Text) : async [CanisterInfo] {
        searchCanisterDatabase(searchTerm)
    };
    
    /**
    * Get detailed information about a specific canister
    * 
    * @param canisterId - The canister ID, name, or internal ID to look up
    * @returns Optional canister information
    */
    public func getCanisterInfo(canisterId: Text) : async ?CanisterInfo {
        let lowercaseId = toLowercase(canisterId);
        
        for (canister in canisterDatabase.vals()) {
            if (toLowercase(canister.id) == lowercaseId or 
                toLowercase(canister.canister_id) == lowercaseId or
                toLowercase(canister.name) == lowercaseId) {
                return ?canister;
            };
        };
        
        null
    };
    
    /**
    * Search canisters by category
    */
    public func searchByCategory(category: Text) : async [CanisterInfo] {
        let lowercaseCategory = toLowercase(category);
        
        Array.filter<CanisterInfo>(canisterDatabase, func(canister: CanisterInfo) : Bool {
            toLowercase(canister.category) == lowercaseCategory
        })
    };
    
    /**
    * Get all available categories
    */
    public func getCategories() : async [Text] {
        let categoriesMap = HashMap.HashMap<Text, Bool>(10, Text.equal, Text.hash);
        
        for (canister in canisterDatabase.vals()) {
            categoriesMap.put(canister.category, true);
        };
        
        Iter.toArray(categoriesMap.keys())
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
    * Internal function to search the canister database
    */
    private func searchCanisterDatabase(searchTerm: Text) : [CanisterInfo] {
        if (Text.size(searchTerm) == 0) {
            return canisterDatabase;
        };
        
        let lowercaseQuery = toLowercase(searchTerm);
        
        Array.filter<CanisterInfo>(canisterDatabase, func(canister: CanisterInfo) : Bool {
            // Search in name
            if (Text.contains(toLowercase(canister.name), #text lowercaseQuery)) return true;
            
            // Search in description
            if (Text.contains(toLowercase(canister.description), #text lowercaseQuery)) return true;
            
            // Search in category
            if (Text.contains(toLowercase(canister.category), #text lowercaseQuery)) return true;
            
            // Search in tags
            for (tag in canister.tags.vals()) {
                if (Text.contains(toLowercase(tag), #text lowercaseQuery)) return true;
            };
            
            // Search in developer name
            if (Text.contains(toLowercase(canister.metadata.developer), #text lowercaseQuery)) return true;
            
            false
        })
    };
    
    /**
    * Convert text to lowercase for case-insensitive searching
    */
    private func toLowercase(text: Text) : Text {
        Text.map(text, func (c: Char) : Char {
            if (c >= 'A' and c <= 'Z') {
                Char.fromNat32(Char.toNat32(c) + 32)
            } else { c }
        })
    };
    
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
    * Get total number of canisters in the database
    */
    public func getDatabaseSize() : async Nat {
        canisterDatabase.size()
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
        "Seeker backend is operational. Database entries: " # 
        Nat.toText(canisterDatabase.size()) # 
        ", User metadata entries: " # 
        Nat.toText(metadataStore.size())
    };
}