import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import parser from "html-react-parser";
import { RiInboxUnarchiveLine, RiInboxArchiveLine } from "react-icons/ri/index";
import { BiTrash } from "react-icons/bi/index";

import Loading from "../components/Loading";
import Header from "../components/Header";
import NoteNotFound from "../components/NoteNotFound";

import Language from "../contexts/Language";
import useNotes from "../hooks/useNotes";

import { getNote, unarchiveNote, archiveNote, deleteNote } from "../utils/api";

export default function DetailNote() {
	const { id } = useParams();
	const [note, loadingNote, setNote] = useNotes(getNote, id);
	const [loading, setLoading] = useState(false);
	const { language } = useContext(Language);
	const navigate = useNavigate();

	function editNoteHandler(callback) {
		setLoading(true);

		callback(note.id).then((response) => {
			if (response.action === "delete") {
				navigate(-1);
			}

			if (!response.error) {
				setNote();
			}

			setLoading(false);
		});
	}

	if (loading || loadingNote) {
		return (
			<div className="h-[92vh] w-full grid place-items-center dark:bg-black-1">
				<Loading />
			</div>
		);
	}

	return (
		<>
			<Header />
			{note ? (
				<div className="w-full h-[92vh] px-4 py-3 overflow-y-auto xl:px-8 xl:py-4 dark:bg-black-1">
					<div>
						<div className="mb-3 flex items-center gap-4">
							<Moment
								locale={language}
								format="DD MMMM YYYY"
								className="inline-block font-poppins-medium text-xs text-black-4 dark:text-white-4 xl:text-sm"
							>
								{note.createdAt}
							</Moment>
							{note.archived && (
								<p className="px-2 py-1 bg-primary font-poppins-semibold text-white text-xs rounded-sm dark:bg-primary-dark dark:text-black-1">
									{language === "id" ? "Arsip" : "Archive"}
								</p>
							)}
						</div>
						<h1 className="mb-6 text-black-1 break-words font-poppins-bold text-2xl dark:text-white-1 xl:text-3xl">
							{note.title}
						</h1>
						<div className="pb-16 text-sm break-words text-black-2 dark:text-white-2 xl:text-base">
							{parser(note.body)}
						</div>
					</div>
					<div className="fixed right-4 bottom-3 flex justify-end gap-4 xl:mb-2 xl:gap-5">
						<button
							className="p-2.5 bg-accent rounded-full shadow-lg xl:p-4 xl:shadow-xl xl:hover:scale-125 dark:bg-accent-dark dark:shadow-none"
							onClick={() =>
								note.archived
									? editNoteHandler(unarchiveNote)
									: editNoteHandler(archiveNote)
							}
						>
							{note.archived ? (
								<RiInboxUnarchiveLine className="text-white xl:text-xl dark:text-black-1" />
							) : (
								<RiInboxArchiveLine className="text-white xl:text-xl dark:text-black-1" />
							)}
						</button>
						<button
							className="p-2.5 bg-accent rounded-full shadow-lg xl:p-4 xl:shadow-xl xl:hover:scale-125 dark:bg-accent-dark dark:shadow-none"
							onClick={() => editNoteHandler(deleteNote)}
						>
							<BiTrash className="text-white xl:text-xl dark:text-black-1" />
						</button>
					</div>
				</div>
			) : (
				<div className="w-full h-[92vh] grid place-items-center dark:bg-black-1">
					<NoteNotFound colorBlack={true} />
				</div>
			)}
		</>
	);
}
