import { Search } from "@/components/Search";
import { News } from "@/components/News";
import { Pagination } from "@/components/Pagination";

import { getNewsApi } from "@/api/newsApi";

import styles from "./page.module.css";

export default async function SearchResult({
	params,
	searchParams,
}: {
	params: { keyword: string };
	searchParams: { start: string };
}) {
	const newsData = await getNewsApi(
		Number(searchParams.start),
		params.keyword
	);

	if (typeof newsData === "string") {
		return (
			<main>
				<h1>데이터를 가져오던 중 오류가 발생했습니다.</h1>
			</main>
		);
	}

	return (
		<main className={styles.wrapper}>
			<Search />
			<div className={styles.searchInfo}>
				<h1>{"총 " + newsData.total + "개의 뉴스가 있습니다."}</h1>
			</div>
			<ul>
				{newsData.items.map((news) => (
					<li key={news.originallink}>
						<News newsItem={news} />
					</li>
				))}
			</ul>
			<Pagination
				keyword={decodeURI(params.keyword)}
				currentPage={Number(searchParams.start)}
				totalDataLength={newsData.total}
			/>
		</main>
	);
}
