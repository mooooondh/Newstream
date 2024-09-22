import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Search } from ".";
import { searchNews } from "@/lib/actions";

const user = userEvent.setup();

jest.mock("../../lib/actions", () => ({
	searchNews: jest.fn(),
}));

describe("검색 컴포넌트 테스트", () => {
	test("검색어 입력 영역이 존재한다.", () => {
		render(<Search />);

		const searchInput =
			screen.getByPlaceholderText("검색어를 입력해주세요.");

		expect(searchInput).toBeInTheDocument();
	});

	test("검색 버튼이 존재한다.", () => {
		render(<Search />);

		const searchButton = screen.getByRole("button", { name: "검색" });

		expect(searchButton).toBeInTheDocument();
	});

	test("검색어를 입력하고 검색 버튼 클릭시 searchNews함수가 호출된다.", async () => {
		render(<Search />);

		const searchInput =
			screen.getByPlaceholderText("검색어를 입력해주세요.");
		const searchKeyword = "dogs";
		const searchButton = screen.getByRole("button", { name: "검색" });

		await user.type(searchInput, searchKeyword);
		await user.click(searchButton);

		expect(searchNews).toHaveBeenCalledTimes(1);
		expect(searchNews).toHaveBeenCalledWith(searchKeyword, "1");
	});

	test("검색어를 입력하지 않고 검색 버튼 클릭시 searchNews함수가 호출되지 않는다.", async () => {
		render(<Search />);

		const searchButton = screen.getByRole("button", { name: "검색" });

		await user.click(searchButton);

		expect(searchNews).toHaveBeenCalledTimes(0);
	});
});
