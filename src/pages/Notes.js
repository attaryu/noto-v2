import React from "react";

import Header from "../components/Header";
import Loading from "../components/Loading";
import TextHero from "../components/TextHero";
import RecentNote from "../components/RecentNote";
import AddNoteButton from "../components/AddNoteButton";

import useNotes from "../hooks/useNotes";
import useLanguage from "../hooks/useLanguage";

import { getNotes } from "../utils/api";

export default function Notes() {
	const [notes, loading] = useNotes(getNotes);
	const language = useLanguage("notes");

	if (loading) {
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
				</div>
				<RecentNote notes={notes || []} />
			</main>
			<div className="fixed right-5 xl:right-6 bottom-5 xl:bottom67">
				<AddNoteButton />
			</div>
		</>
	);
}
