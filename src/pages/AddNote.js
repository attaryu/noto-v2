import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import useInput from "../hooks/useInput";
import useLanguage from "../hooks/useLanguage";

import { addNote } from "../utils/api";

export default function AddNote() {
	const [title, setTitle] = useInput("");
	const [body, setBody] = useInput("");
	const language = useLanguage("addNote");
	const navigate = useNavigate();
	const bodyInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		addNote({ title, body }).then((response) => {
			if (!response.error) {
				navigate("/notes");
			}
		});
	}

	function bodyFocusHandler() {
		bodyInputRef.current.focus();
	}

	return (
		<>
			<Header />
			<main className="w-full h-[92vh] p-4 overflow-y-auto xl:px-6 xl:pt-6 dark:bg-black-1">
				<form
					className="w-full h-full flex flex-col"
					onSubmit={submitHandler}
				>
					<div>
						<div className="w-full flex items-center">
							<input
								type="text"
								maxLength={30}
								value={title}
								onChange={setTitle}
								placeholder={language.title}
								className="w-4/5 bg-transparent outline-none text-lg font-poppins-semibold xl:text-3xl dark:text-white-1 dark:placeholder:text-white-4"
								required
							/>
							<p
								className={`ml-auto font-chillax-semibold text-xs xl:text-sm ${
									title.length === 30
										? "text-red-400"
										: "text-black-4 dark:text-white-4"
								}`}
							>
								{title.length}/30
							</p>
						</div>
						<div className="h-96 mt-5 relative">
							<p
								onClick={bodyFocusHandler}
								className={`absolute ${
									body.length === 0 ? "block" : "hidden"
								} font-poppins-medium text-sm text-gray-400 xl:text-base xl:text-white-4`}
							>
								{language.body}
							</p>
							<div
								className="h-full w-full text-sm break-words overflow-y-auto text-black-2 outline-none xl:text-base dark:text-white-2"
								contentEditable
								onInput={setBody}
								ref={bodyInputRef}
							></div>
						</div>
					</div>
					<div className="mt-auto xl:flex xl:justify-end">
						<button className="w-full p-1.5 bg-accent rounded-md font-chillax-semibold text-white xl:w-40 xl:hover:bg-accent/70 dark:text-black-1 dark:bg-accent-dark dark:xl:hover:bg-accent-dark/70">
							{language.button}
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
