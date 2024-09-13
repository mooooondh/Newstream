import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home 페이지 UI테스트", () => {
  test("Search 컴포넌트가 존재한다.", () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText("검색어를 입력해주세요.");
    const searchButton = screen.getByRole("button", { name: "검색" });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
