import dayjs from "dayjs";

import { Search } from "@/components/Search";

import { getNewsApi } from "@/api/newsApi";

import { Btag2BoldText, decodeHtmlEntities } from "@/utils/stringTransformers";

export default async function SearchResult({
  params,
}: {
  params: { keyword: string };
}) {
  const newsData = await getNewsApi(params.keyword);

  if (typeof newsData === "string") {
    return (
      <main>
        <h1>데이터를 가져오던 중 오류가 발생했습니다.</h1>
      </main>
    );
  }

  return (
    <main>
      <Search />
      <h1>{"총 " + newsData.total + "개의 뉴스가 있습니다."}</h1>
      <ul>
        {newsData.items.map((news) => (
          <li key={news.originallink}>
            <h1>{Btag2BoldText(decodeHtmlEntities(news.title))}</h1>
            <p>{dayjs(news.pubDate).format("YYYY.MM.DD HH:mm")}</p>
            <h2>{Btag2BoldText(decodeHtmlEntities(news.description))}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
