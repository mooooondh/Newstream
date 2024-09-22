import axios from "axios";
import { INaverNewsDataResult } from "@/utils/interfaces";

export const getNewsApi = async (
	pageNumber: number,
	encodeKeyword?: string
) => {
	const start = pageNumber - 1 === 0 ? "1" : String((pageNumber - 1) * 10);

	const naverNewsResult: INaverNewsDataResult | string = await axios({
		method: "get",
		url:
			process.env.NAVER_SEARCH_BASE_URL +
			"/v1/search/news.json?query=" +
			(encodeKeyword ? encodeKeyword : "오늘의 주요 뉴스") + // 네이버 뉴스 검색 api는 무조건 검색어가 있어야 함
			"&start=" +
			(Number(start) >= 1001 ? "1000" : start), // start에 들어가는 값이 1~1,000사이라서 이보다 크면 오류남. 임시로 최대 1,000까지만 들어가게 해둠.
		headers: {
			"X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
			"X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
		},
	})
		.then((result) => result.data)
		.catch((error) => error.code);

	return naverNewsResult;
};
