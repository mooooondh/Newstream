"use server";

import { redirect } from "next/navigation";

export const searchNews = async (keyword: string) => {
  const encodingKeyword = encodeURI(keyword);
  redirect(`/search/${encodingKeyword}`);
};
