import React from "react";

import useLanguage from "../hooks/useLanguage";

export default function Loading() {
	const language = useLanguage("loading");
	const cls =
		"w-2 h-2 rounded-full bg-primary xl:w-3 xl:h-3 dark:bg-primary-dark";

	return (
		<div>
			<p className="font-chillax-bold text-2xl text-black-1 text-center animate-bounce xl:text-3xl dark:text-white-1 dark:font-chillax-semibold">
				{language}
			</p>
			<div className="w-full mt-2 flex justify-evenly gap-4 xl:mt-3">
				{[1, 2, 3, 4].map((i) => (
					<div key={i} className={`animate-circle-${i} ${cls}`}></div>
				))}
			</div>
		</div>
	);
}
