import React from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs/index";

export default function AddNoteButton() {
	return (
		<Link
			to="/add"
			className="p-3 block bg-accent rounded-full shadow-lg xl:p-4 xl:hover:bg-accent/70 dark:bg-accent-dark dark:xl:hover:bg-accent-dark/70"
		>
			<BsPlusLg className="text-white xl:text-xl dark:text-black-1" />
		</Link>
	);
}
