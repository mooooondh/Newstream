import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import { Pagination } from ".";

const user = UserEvent.setup();

describe("Pagination 컴포넌트 테스트", () => {
  test("Pagnaition 컴포넌트가 존재한다.", () => {
    render(<Pagination currentPage={1} totalDataLength={100} />);

    const expectNumOfPages = screen.getAllByRole("button");

    expect(expectNumOfPages.length).toBeGreaterThanOrEqual(1);
  });

  test("데이터가 100개 이하인 경우 데이터 길이/10 + 1의 길이만큼 button이 존재한다.", () => {
    const currentPage = 1;
    const totalDataLength = 100;
    const expectNumOfPages = Math.ceil(totalDataLength / 10);

    render(
      <Pagination currentPage={currentPage} totalDataLength={totalDataLength} />
    );

    const numOfPages = screen.getAllByRole("button");

    expect(numOfPages.length).toBeGreaterThanOrEqual(expectNumOfPages);
  });

  test("데이터가 101개 이상인 경우 페이지 버튼은 최대 10개까지만 표시돼야 한다.", () => {
    const currentPage = 1;
    const totalDataLength = 101;

    render(
      <Pagination currentPage={currentPage} totalDataLength={totalDataLength} />
    );

    const numOfPages = screen.getAllByRole("button");

    expect(numOfPages.length).toBeLessThanOrEqual(10);
  });
});
