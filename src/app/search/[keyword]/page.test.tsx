import { render, screen } from "@testing-library/react";

import SearchResult from "./page";
import * as newsApi from "@/api/newsApi";
import { mockGetNewsApi, mockGetNewsApi_FAIL } from "@/api/newsApiMockData";

jest.mock("../../../api/newsApi");

describe("SearchResult 페이지 UI 테스트", () => {
  const inputKeyword = "dogs";

  // getNewsApi는 항상 성공하며, mock data를 return
  beforeEach(() => {
    (newsApi.getNewsApi as jest.Mock).mockResolvedValue(mockGetNewsApi);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("검색 컴포넌트가 존재한다.", async () => {
    render(await SearchResult({ params: { keyword: inputKeyword } }));

    const searchInput = screen.getByPlaceholderText("검색어를 입력해주세요.");
    const searchButton = screen.getByRole("button", { name: "검색" });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("뉴스 리스트가 존재한다.", async () => {
    render(await SearchResult({ params: { keyword: inputKeyword } }));

    const newsList = screen.getByRole("list");
    const newsListItem = screen.getAllByRole("listitem");

    expect(newsList).toBeInTheDocument();
    expect(newsListItem.length).toBeGreaterThanOrEqual(
      mockGetNewsApi.items.length
    );
  });

  test("뉴스 제목, 발행일, 내용이 존재한다.", async () => {
    render(await SearchResult({ params: { keyword: inputKeyword } }));

    const newsTitle = screen.getByText("title01");
    const newsPubDate = screen.getByText("2024.09.13 06:08");
    const newsDescription = screen.getByText("description01");

    expect(newsTitle).toBeInTheDocument();
    expect(newsPubDate).toBeInTheDocument();
    expect(newsDescription).toBeInTheDocument();
  });
});

describe("getNews api 결과에 따른 UI테스트", () => {
  const inputKeyword = "dogs";

  // mock 초기화
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("[성공] 입력한 키워드의 뉴스 갯수가 출력된다.", async () => {
    (newsApi.getNewsApi as jest.Mock).mockResolvedValue(mockGetNewsApi);

    render(await SearchResult({ params: { keyword: inputKeyword } }));

    const searchData = screen.getByText(
      "총 " + mockGetNewsApi.total + "개의 뉴스가 있습니다."
    );

    expect(searchData).toBeInTheDocument();
  });

  test("[실패] 오류 메세지를 출력한다.", async () => {
    (newsApi.getNewsApi as jest.Mock).mockResolvedValue(mockGetNewsApi_FAIL);

    render(await SearchResult({ params: { keyword: inputKeyword } }));

    const searchData = screen.getByText(
      "데이터를 가져오던 중 오류가 발생했습니다."
    );

    expect(searchData).toBeInTheDocument();
  });

  test("[성공] 뉴스 리스트가 출력된다.", async () => {
    (newsApi.getNewsApi as jest.Mock).mockResolvedValue(mockGetNewsApi);

    render(await SearchResult({ params: { keyword: inputKeyword } }));
  });
});
