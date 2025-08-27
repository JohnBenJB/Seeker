export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  searchKeywords: string[];
  popularity: number;
  timestamp?: bigint;
  views?: bigint;
  totalRating?: bigint;
  ratingCount?: bigint;
  submitter?: string;
}
export interface MetadataRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  searchKeywords: string[];
  popularity: number;
}
