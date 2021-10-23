export interface Bibles {
  bibles: Bible[];
}

export interface Bible {
  bible: string;
  title: string;
  abbreviatedTitle: string;
  publicationDate: string;
  languages: string[];
  publishers: string[];
  imageUrl: string;
  description: string;
  searchFields: string[];
  copyright: string;
  extendedCopyright: string;
}
