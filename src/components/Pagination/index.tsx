"use client";

import { searchNews } from "@/lib/actions";

import styles from "./index.module.css";

interface props {
	keyword: string;
	currentPage: number;
	totalDataLength: number;
}

export const Pagination = ({
	keyword,
	currentPage,
	totalDataLength,
}: props) => {
	const totalPages = Array.from(
		{ length: Math.ceil(totalDataLength / 10) },
		(_, i) => i + 1
	);

	const renderPagination = () => {
		if (totalPages.length <= 10) {
			return (
				<div className={styles.paginationWrapper}>
					{totalPages.map((pageNum, idx) => (
						<button
							key={idx}
							onClick={() => searchNews(keyword, String(pageNum))}
							className={
								currentPage === pageNum
									? styles.selectedButton
									: styles.notSelectedButton
							}
						>
							<p>{pageNum}</p>
						</button>
					))}
				</div>
			);
		} else {
			if (currentPage <= 5) {
				const viewPages = totalPages.slice(0, 9);
				return (
					<div className={styles.paginationWrapper}>
						<>
							{viewPages.map((pageNum, idx) => (
								<button
									key={idx}
									onClick={() =>
										searchNews(keyword, String(pageNum))
									}
									className={
										currentPage === pageNum
											? styles.selectedButton
											: styles.notSelectedButton
									}
								>
									<p>{pageNum}</p>
								</button>
							))}
						</>
						<p>...</p>
						<button
							onClick={() =>
								searchNews(
									keyword,
									String(totalPages[totalPages.length - 1])
								)
							}
							className={
								currentPage ===
								totalPages[totalPages.length - 1]
									? styles.selectedButton
									: styles.notSelectedButton
							}
						>
							<p>{totalPages[totalPages.length - 1]}</p>
						</button>
					</div>
				);
			} else if (currentPage + 5 > totalPages[totalPages.length - 1]) {
				const endPageNum = totalPages[totalPages.length - 1];

				const viewPages = totalPages.slice(currentPage - 5, endPageNum);
				return (
					<div className={styles.paginationWrapper}>
						<p>...</p>
						<>
							{viewPages.map((pageNum, idx) => (
								<button
									key={idx}
									onClick={() =>
										searchNews(keyword, String(pageNum))
									}
									className={
										currentPage === pageNum
											? styles.selectedButton
											: styles.notSelectedButton
									}
								>
									<p>{pageNum}</p>
								</button>
							))}
						</>
					</div>
				);
			} else {
				const viewPages = totalPages.slice(
					currentPage - 5,
					currentPage + 5
				);
				return (
					<div className={styles.paginationWrapper}>
						<button
							onClick={() => searchNews(keyword, String(1))}
							className={
								currentPage === 1
									? styles.selectedButton
									: styles.notSelectedButton
							}
						>
							<p>1</p>
						</button>
						<p>...</p>
						<>
							{viewPages.map((pageNum, idx) => (
								<button
									key={idx}
									onClick={() =>
										searchNews(keyword, String(pageNum))
									}
									className={
										currentPage === pageNum
											? styles.selectedButton
											: styles.notSelectedButton
									}
								>
									<p>{pageNum}</p>
								</button>
							))}
						</>
						<p>...</p>
						<button
							onClick={() =>
								searchNews(
									keyword,
									String(totalPages[totalPages.length - 1])
								)
							}
							className={
								currentPage ===
								totalPages[totalPages.length - 1]
									? styles.selectedButton
									: styles.notSelectedButton
							}
						>
							<p>{totalPages[totalPages.length - 1]}</p>
						</button>
					</div>
				);
			}
		}
	};

	return <div data-testid="pagination">{renderPagination()}</div>;
};
