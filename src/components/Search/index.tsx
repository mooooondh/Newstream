"use client";

import { useForm } from "react-hook-form";

import { searchNews } from "@/lib/actions";
import { ISearchInput } from "@/utils/interfaces";

import styles from "./index.module.css";

export const Search = () => {
	const { register, handleSubmit } = useForm<ISearchInput>();

	return (
		<form
			onSubmit={handleSubmit(({ keyword }) => searchNews(keyword, "1"))}
			className={styles.searchWrapper}
		>
			<input
				type={"text"}
				placeholder={"검색어를 입력해주세요."}
				{...register("keyword", { required: true })}
				className={styles.searchInput}
			/>
			<button className={styles.searchButton}>검색</button>
		</form>
	);
};
