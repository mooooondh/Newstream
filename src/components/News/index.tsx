import Link from "next/link";
import dayjs from "dayjs";

import { Btag2BoldText, decodeHtmlEntities } from "@/utils/stringTransformers";

import { INewsItem } from "@/utils/interfaces";

interface props {
  newsItem: INewsItem;
}

export const News = ({ newsItem }: props) => {
  return (
    <Link href={newsItem.link}>
      <h1>{Btag2BoldText(decodeHtmlEntities(newsItem.title))}</h1>
      <p>{dayjs(newsItem.pubDate).format("YYYY.MM.DD HH:mm")}</p>
      <p>{Btag2BoldText(decodeHtmlEntities(newsItem.description))}</p>
    </Link>
  );
};
