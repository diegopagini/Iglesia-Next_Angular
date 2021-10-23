export interface Results {
  resultCount: number;
  hitCount: number;
  start: number;
  limit: number;
  results: Result[];
}

export interface Result {
  title: string;
  preview: string;
}
