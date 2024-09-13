import { redirect } from "next/navigation";

import { searchNews } from "./actions";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("서버 액션 통합 테스트", () => {
  test("searchNews가 실행되면 해당 url로 redirect된다.", () => {
    const keyword = "dogs";

    searchNews(keyword);
    expect(redirect).toHaveBeenCalledWith(`/search/${keyword}`);
  });
});
