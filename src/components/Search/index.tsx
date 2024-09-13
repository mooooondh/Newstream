"use client";

import { useForm } from "react-hook-form";

import { searchNews } from "@/lib/actions";
import { ISearchInput } from "@/utils/interfaces";

import styles from "./index.module.css";

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchInput>();

  return (
    <form onSubmit={handleSubmit(({ keyword }) => searchNews(keyword))}>
      <input
        type={"text"}
        placeholder={"검색어를 입력해주세요."}
        {...register("keyword", { required: true })}
      />
      <button>검색</button>
    </form>
  );
};
