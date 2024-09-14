import { Search } from "@/components/Search";
import { News } from "@/components/News";

import { getNewsApi } from "@/api/newsApi";

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
            <News newsItem={news} />
          </li>
        ))}
      </ul>
    </main>
  );
}
