import { INaverNewsDataResult, INewsItem } from "@/utils/interfaces";

const mockNewsItem: INewsItem[] = [
  {
    title: "title01",
    originallink: "originallink01",
    link: "link01",
    description: "description01",
    pubDate: "Fri, 13 Sep 2024 06:08:00 +0900",
  },
  {
    title: "title02",
    originallink: "originallink02",
    link: "link02",
    description: "description02",
    pubDate: "Fri, 14 Sep 2024 06:08:00 +0900",
  },
];

export const mockGetNewsApi: INaverNewsDataResult = {
  lastBuildDate: "Mon, 26 Sep 2016 11:01:35 +0900",
  total: 100,
  start: 1,
  display: 10,
  items: mockNewsItem,
};

export const mockGetNewsApi_FAIL = "ERR_BAD_REQUEST";
