import { render, screen } from "@testing-library/react";

import SearchResult from "./page";

describe("SearchResult 페이지 UI 테스트", () => {
  test("keyword를 출력한다.", () => {
    const inputKeyword = "dogs";
    render(<SearchResult params={{ keyword: inputKeyword }} />);

    const displayKeyword = screen.getByText(inputKeyword);

    expect(displayKeyword).toBeInTheDocument();
  });
});
