import axios from "axios";
import { INaverNewsDataResult } from "@/utils/interfaces";

export const getNewsApi = async (encodeKeyword?: string) => {
  const naverNewsResult: INaverNewsDataResult | string = await axios({
    method: "get",
    url:
      process.env.NAVER_SEARCH_BASE_URL +
      "/v1/search/news.json?query=" +
      (encodeKeyword ? encodeKeyword : "오늘의 주요 뉴스"), // 네이버 뉴스 검색 api는 무조건 검색어가 있어야 함
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
    },
  })
    .then((result) => result.data)
    .catch((error) => error.code);

  return naverNewsResult;
};
