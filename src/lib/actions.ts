"use server";

import { redirect } from "next/navigation";

export const searchNews = async (keyword: string, page: string) => {
	const encodingKeyword = encodeURI(keyword);
	redirect(`/search/${encodingKeyword}?start=${page}`);
};
