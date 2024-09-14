import { render, screen } from "@testing-library/react";

import dayjs from "dayjs";

import { News } from ".";

import { mockGetNewsApi } from "@/api/newsApiMockData";

const mockSingleNews = mockGetNewsApi.items[0];

describe("News 컴포넌트 테스트", () => {
  test("제목, 발행일, 내용이 존재한다.", () => {
    render(<News newsItem={mockSingleNews} />);

    const newsTitle = screen.getByText(mockSingleNews.title);
    const newsPubDate = screen.getByText(
      dayjs(mockSingleNews.pubDate).format("YYYY.MM.DD HH:mm")
    );
    const newsDescription = screen.getByText(mockSingleNews.description);

    expect(newsTitle).toBeInTheDocument();
    expect(newsPubDate).toBeInTheDocument();
    expect(newsDescription).toBeInTheDocument();
  });

  test("뉴스의 링크가 정상적으로 생성됐는지 확인.", async () => {
    render(<News newsItem={mockSingleNews} />);

    const newsButton = screen.getByRole("link");

    expect(newsButton).toHaveAttribute("href", mockSingleNews.link);
  });
});
