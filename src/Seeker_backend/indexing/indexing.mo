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
    };
    // ... keep all other records as they are ...
  ];

  // Existing search function
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

  // New function to return all records
  public shared func getAllRecords() : async [Types.MetadataRecord] {
    return records;
  };
};
