import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import PropTypes from "prop-types";

import Language from "../contexts/Language";

export default function CardNote({ note, index }) {
	const navigate = useNavigate();
	const { language } = useContext(Language);
	const cardShape = index % 3 === 0 ? "h-28 col-span-2" : "h-48";

	const bgColor =
		index % 2 === 0
			? "bg-primary-dark dark:bg-secondary-dark"
			: "bg-secondary dark:bg-primary-dark";

	const titleColor =
		index % 2 === 0 ? "text-black-1 dark:text-white-1" : "text-black-1";

	const dateColor =
		index % 2 === 0 ? "text-black-4 dark:text-white-4" : "text-black-4";

	return (
		<div
			className={`w-full p-3 rounded-md flex flex-col shadow-md cursor-pointer xl:h-56 xl:p-4 xl:hover:scale-105 xl:hover:shadow-xl ${bgColor} ${cardShape}`}
			onClick={() => navigate(`/note/${note.id}`)}
		>
			<h2
				className={`font-poppins-semibold ${titleColor} text-sm h-[150px] leading-5 block break-words xl:text-lg xl:leading-7 xl:font-poppins-bold`}
			>
				{note.title}
			</h2>
			<Moment
				locale={language}
				format="DD MMMM YYYY"
				className={`mt-auto ${dateColor} font-poppins-semibold text-[0.6rem] whitespace-nowrap xl:text-xs`}
			>
				{note.createdAt}
			</Moment>
		</div>
	);
}

CardNote.propTypes = {
	note: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};
