export interface Books {
  books: Book[];
}

export interface Book {
  passage: string;
  chapters: Chapter[];
}

export interface Chapter {
  passage: string;
}
