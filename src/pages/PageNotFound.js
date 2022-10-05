import React from "react";

import Header from "../components/Header";

import useLanguage from "../hooks/useLanguage";

export default function PageNotFound() {
	const language = useLanguage("pageNotFound");

	return (
		<>
			<Header />
			<div className="w-full h-[92vh] grid place-items-center dark:bg-black-1">
				<div className="flex flex-col items-center gap-3">
					<h1 className="font-chillax-bold text-5xl text-black-1 dark:text-white-1">
						404
					</h1>
					<p
						className={`${
							language.description.includes("Halaman") && "w-3/4"
						} font-poppins-medium text-sm text-center text-black-4 dark:text-white-4`}
					>
						{language.description}
					</p>
				</div>
			</div>
		</>
	);
}
