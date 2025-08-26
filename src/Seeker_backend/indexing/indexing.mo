import Array "mo:base/Array";
import Text "mo:base/Text";
import Char "mo:base/Char";
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
    };
    // ... other records ...
  ];

  // Returns only titles (for searchQuery)
  public shared func searchQuery(searchTerm: Text) : async [Text] {
    if (Text.size(searchTerm) == 0) {
      return Array.map(records, func(r) { r.title });
    };
    let lowercaseQuery = Text.map(searchTerm, func(c) {
      if (c >= 'A' and c <= 'Z') { Char.fromNat32(Char.toNat32(c) + 32) } else { c }
    });
    Array.mapFilter(records, func(r) : ?Text {
      let lowerTitle = Text.map(r.title, func(c) {
        if (c >= 'A' and c <= 'Z') { Char.fromNat32(Char.toNat32(c) + 32) } else { c }
      });
      if (Text.contains(lowerTitle, #text lowercaseQuery)) { ?r.title } else { null }
    })
  };

  // Returns full records (for searchCanisters)
  public shared func searchCanisters(searchTerm: Text) : async [Types.MetadataRecord] {
    if (Text.size(searchTerm) == 0) {
      return records;
    };
    let lowercaseQuery = Text.map(searchTerm, func(c) {
      if (c >= 'A' and c <= 'Z') { Char.fromNat32(Char.toNat32(c) + 32) } else { c }
    });
    Array.filter(records, func(r) {
      let lowerTitle = Text.map(r.title, func(c) {
        if (c >= 'A' and c <= 'Z') { Char.fromNat32(Char.toNat32(c) + 32) } else { c }
      });
      Text.contains(lowerTitle, #text lowercaseQuery)
        or Text.contains(r.description, #text lowercaseQuery)
        or Array.foldLeft(r.tags, false, func(acc, tag) { acc or Text.contains(tag, #text lowercaseQuery) })
    })
  };

  // Optional: return all records
  public shared func getAllRecords() : async [Types.MetadataRecord] {
    return records;
  };


  // Returns all unique categories
  public shared func getCategories() : async [Text] {
    let cats = Array.map(records, func(r) { r.category });
    Array.dedup(cats, func(a, b) { a == b });
  }


};
