import Array "mo:base/Array";
import Text "mo:base/Text";
import Char "mo:base/Char";
import Iter "mo:base/Iter";
import Types "./types";

persistent actor class Indexing() {

  private stable var records: [Types.MetadataRecord] = [
    {
      id = "icp-ledger-canister";
      title = "ICP Ledger Canister";
      description = "Official Internet Computer Protocol ledger canister for ICP token transactions, balance queries, and transfer operations";
      category = "DeFi";
      url = "https://ic.rocks/principal/rrkah-fqaaa-aaaaa-aaaaq-cai";
      tags = ["ledger","icp","transactions","defi","balance","transfer"];
      searchKeywords = ["ledger","icp","balance","transfer","token","payment"];
      popularity = 95;
    },
    {
      id = "entrepot-nft-marketplace";
      title = "Entrepot NFT Marketplace";
      description = "The largest NFT marketplace on the Internet Computer, featuring digital art, collectibles, and unique digital assets";
      category = "NFT";
      url = "https://entrepot.app";
      tags = ["nft","marketplace","trading","collectibles","art","digital assets"];
      searchKeywords = ["nft","art","collectibles","marketplace","buy","sell","trade"];
      popularity = 88;
    },
    {
      id = "icpswap-dex";
      title = "ICPSwap - Decentralized Exchange";
      description = "Advanced decentralized exchange on Internet Computer for token swapping, liquidity provision, and yield farming";
      category = "DeFi";
      url = "https://icpswap.com";
      tags = ["defi","swap","trading","liquidity","dex","yield farming"];
      searchKeywords = ["swap","trade","defi","exchange","liquidity","farming","tokens"];
      popularity = 92;
    },
    {
      id = "internet-identity";
      title = "Internet Identity Authentication";
      description = "Secure, privacy-preserving authentication service for the Internet Computer ecosystem using WebAuthn";
      category = "Identity";
      url = "https://identity.ic0.app";
      tags = ["identity","authentication","security","login","webauthn","privacy"];
      searchKeywords = ["identity","login","authentication","security","webauthn","biometric"];
      popularity = 97;
    },
    {
      id = "cycles-wallet";
      title = "Cycles Wallet Manager";
      description = "Manage your cycles balance, top up canisters, and monitor resource consumption across your ICP applications";
      category = "Development";
      url = "https://nns.ic0.app/wallet";
      tags = ["cycles","wallet","development","canisters","resources","management"];
      searchKeywords = ["cycles","wallet","canister","development","resources","top-up"];
      popularity = 75;
    },
    {
      id = "nns-governance";
      title = "Network Nervous System (NNS) Governance";
      description = "Decentralized governance system for the Internet Computer, allowing ICP token holders to vote on network proposals";
      category = "DeFi";
      url = "https://nns.ic0.app";
      tags = ["governance","voting","nns","proposals","democracy","decentralized"];
      searchKeywords = ["governance","vote","proposals","nns","democracy","participate"];
      popularity = 82;
    },
    {
      id = "bitcoin-integration";
      title = "Bitcoin Integration Canister";
      description = "Direct Bitcoin integration on Internet Computer, enabling native Bitcoin transactions and smart contracts";
      category = "DeFi";
      url = "https://internetcomputer.org/bitcoin-integration";
      tags = ["bitcoin","integration","btc","smart contracts","cross-chain"];
      searchKeywords = ["bitcoin","btc","integration","cross-chain","smart contracts"];
      popularity = 78;
    },
    {
      id = "ethereum-bridge";
      title = "Ethereum Bridge Protocol";
      description = "Bridge protocol connecting Ethereum and Internet Computer for cross-chain asset transfers and interactions";
      category = "DeFi";
      url = "https://bridge.ic0.app";
      tags = ["ethereum","bridge","cross-chain","eth","interoperability"];
      searchKeywords = ["ethereum","bridge","cross-chain","eth","transfer","interoperability"];
      popularity = 65;
    },
    {
      id = "distrikt-social";
      title = "Distrikt - Web3 Social Network";
      description = "Decentralized social networking platform built on Internet Computer with user-owned data and content";
      category = "Social";
      url = "https://distrikt.app";
      tags = ["social","network","web3","decentralized","content","community"];
      searchKeywords = ["social","network","community","posts","friends","decentralized"];
      popularity = 71;
    },
    {
      id = "dscvr-social-platform";
      title = "DSCVR Social Platform";
      description = "Community-driven social platform on Internet Computer featuring content creation, NFTs, and social tokens";
      category = "Social";
      url = "https://dscvr.one";
      tags = ["social","community","content","nft","tokens","creator economy"];
      searchKeywords = ["social","community","content","creator","posts","engagement"];
      popularity = 74;
    },
    {
      id = "dappstore-launch-news";
      title = "DAppStore Official Launch";
      description = "DAppStore was officially launched on the Internet Computer Protocol on July 24th, 2025, featuring curated decentralized applications";
      category = "News";
      url = "https://dappstore.ic0.app";
      tags = ["dappstore","launch","icp","news","applications","marketplace"];
      searchKeywords = ["dappstore","launch","applications","marketplace","discover","apps"];
      popularity = 89;
    },
    {
      id = "cafe-dev-workspace";
      title = "Cafe - Developer Collaboration Workspace";
      description = "Comprehensive development workspace and collaboration tools specifically designed for Internet Computer developers";
      category = "Development";
      url = "https://cafe.ic0.app";
      tags = ["development","collaboration","workspace","tools","ide","developers"];
      searchKeywords = ["development","collaboration","workspace","ide","tools","coding"];
      popularity = 68;
    },
    {
      id = "ic-rocks-explorer";
      title = "IC.rocks - Internet Computer Explorer";
      description = "Comprehensive blockchain explorer for Internet Computer showing canister information, transactions, and network statistics";
      category = "Development";
      url = "https://ic.rocks";
      tags = ["explorer","blockchain","canisters","transactions","analytics","monitoring"];
      searchKeywords = ["explorer","blockchain","canisters","transactions","search","analytics"];
      popularity = 81;
    },
    {
      id = "plug-wallet";
      title = "Plug Wallet - ICP Browser Extension";
      description = "Browser extension wallet for Internet Computer supporting ICP, cycles, NFTs, and dApp interactions";
      category = "Development";
      url = "https://plugwallet.ooo";
      tags = ["wallet","browser extension","icp","nft","dapps","transactions"];
      searchKeywords = ["wallet","extension","plug","browser","icp","nft","connect"];
      popularity = 86;
    },
    {
      id = "icgames-platform";
      title = "IC Games - Gaming Platform";
      description = "Decentralized gaming platform on Internet Computer featuring blockchain games, NFT gaming assets, and tournaments";
      category = "Games";
      url = "https://icgames.io";
      tags = ["games","gaming","nft gaming","tournaments","blockchain games","entertainment"];
      searchKeywords = ["games","gaming","play","tournaments","nft","blockchain","entertainment"];
      popularity = 77;
    }
  ];

  public shared func search(searchTerm: Text) : async [Text] {
    if (Text.size(searchTerm) == 0) {
      return Array.map(records, func(r: Types.MetadataRecord) : Text { r.title });
    };

    let lowercaseQuery = Text.map(searchTerm, func(c: Char) : Char {
      if (c >= 'A' and c <= 'Z') { Char.fromNat32(Char.toNat32(c) + 32) } else { c }
    });

    Array.mapFilter<Types.MetadataRecord, Text>(records, func(r: Types.MetadataRecord) : ?Text {
      let lowerTitle = Text.map(r.title, func(c: Char) : Char {
        if (c >= 'A' and c <= 'Z') { Char.fromNat32(Char.toNat32(c) + 32) } else { c }
      });
      if (Text.contains(lowerTitle, #text lowercaseQuery)) { ?r.title } else { null }
    })
  };
}