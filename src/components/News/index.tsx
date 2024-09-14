import Link from "next/link";
import dayjs from "dayjs";

import { Btag2BoldText, decodeHtmlEntities } from "@/utils/stringTransformers";

import { INewsItem } from "@/utils/interfaces";

import styles from "./index.module.css";

interface props {
  newsItem: INewsItem;
}

export const News = ({ newsItem }: props) => {
  return (
    <div className={styles.newsWrapper}>
      <Link href={newsItem.link}>
        <h1 className={styles.newsTitle}>
          {Btag2BoldText(decodeHtmlEntities(newsItem.title))}
        </h1>
        <p className={styles.newsPubDate}>
          {dayjs(newsItem.pubDate).format("YYYY.MM.DD HH:mm")}
        </p>
        <p>{Btag2BoldText(decodeHtmlEntities(newsItem.description))}</p>
      </Link>
    </div>
  );
};
