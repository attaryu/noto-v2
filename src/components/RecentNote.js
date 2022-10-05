import React from "react";
import PropTypes from "prop-types";

import NoteNotFound from "./NoteNotFound";
import CardNote from "./CardNote";

import useSearhURL from "../hooks/useSearchURL";

export default function RecentNote({ notes }) {
	const [searchKey] = useSearhURL("title");
	const searchNotes = searchKey
		? notes.filter((note) =>
				note.title.toLowerCase().match(searchKey.toLowerCase())
		  )
		: notes;

	const containerClass =
		searchNotes.length === 0
			? "h-80 place-items-center"
			: "grid-cols-2 grid-flow-row gap-3 xl:grid-cols-6 xl:gap-5";

	return (
		<div className={`w-full mt-10 p-4 grid xl:px-8 ${containerClass}`}>
			{searchNotes.length === 0 ? (
				<NoteNotFound colorBlack={true} />
			) : (
				searchNotes
					.slice()
					.reverse()
					.map((note, i) => (
						<CardNote key={note.id} note={note} index={++i} />
					))
			)}
		</div>
	);
}

RecentNote.propTypes = { notes: PropTypes.array.isRequired };
