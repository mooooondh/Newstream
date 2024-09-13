export interface INaverNewsDataResult {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: INewsItem[];
}

export interface INewsItem {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export interface ISearchInput {
  keyword: string;
}
