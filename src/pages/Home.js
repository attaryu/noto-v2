import React from "react";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import TextHero from "../components/TextHero";
import RecentHome from "../components/RecentHome";
import Header from "../components/Header";

import useLanguage from "../hooks/useLanguage";
import useNotes from "../hooks/useNotes";

import { getNotes, getArchive } from "../utils/api";

export default function Home() {
	const [notes, loadingNotes] = useNotes(getNotes);
	const [archive, loadingArchive] = useNotes(getArchive);
	const language = useLanguage("home");

	if (loadingNotes || loadingArchive) {
		return (
			<div className="h-full w-full grid place-items-center dark:bg-black-1">
				<Loading />
			</div>
		);
	}

	return (
		<>
			<Header />
			<main className="w-full h-[92vh] overflow-y-auto dark:bg-black-1">
				<div className="w-full p-4 xl:px-8">
					<TextHero heading={language.heading} text={language.text} />
					<Link
						to="/add"
						className="mt-8 py-1 px-3 inline-block font-chillax-semibold text-sm rounded-md bg-accent text-white xl:text-lg xl:hover:bg-accent/80 dark:bg-accent-dark dark:text-black-1 xl:dark:hover:bg-accent-dark/70 xl:mt-14"
					>
						{language.button}
					</Link>
				</div>
				<div className="mt-16 mb-20">
					<RecentHome heading={language.recentNotes} data={notes || []} />
				</div>
				<div className="mb-10">
					<RecentHome
						heading={language.recentArchive}
						data={archive || []}
					/>
				</div>
			</main>
		</>
	);
}
