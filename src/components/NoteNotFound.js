import React from "react";
import PropTypes from "prop-types";
import { MdSearchOff } from "react-icons/md";

import useLanguage from "../hooks/useLanguage";

export default function NoteNotFound({ colorBlack = false }) {
	const language = useLanguage("noteNotFound");
	const colorElement = colorBlack
		? "text-black dark:text-white-1"
		: "text-white dark:text-black-1";

	return (
		<div className={`flex items-center ${colorElement}`}>
			<MdSearchOff className="text-5xl xl:text-7xl" />
			<p className="pl-3 font-chillax-semibold leading-5 dark:font-poppins-bold xl:pl-4 xl:text-2xl xl:leading-7">
				{language.text1} <br /> {language.text2}
			</p>
		</div>
	);
}

NoteNotFound.propTypes = { colorBlack: PropTypes.bool };
