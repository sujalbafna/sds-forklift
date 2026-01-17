export type SdsSection = {
  title: string;
  content: string;
};

export type SdsVersion = {
  version: string;
  date: string;
  author: string;
  summary: string;
};

export type SdsDocument = {
  id: string;
  productName: string;
  productCode: string;
  manufacturer: string;
  lastUpdated: string;
  currentVersion: string;
  versions: SdsVersion[];
  sections: SdsSection[];
};
