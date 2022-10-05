import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MdTranslate } from "react-icons/md";

import Language from "../contexts/Language";

export default function SwitchLanguage({ forSideBar = false }) {
	const { language, setLanguage } = useContext(Language);

	if (forSideBar) {
		return (
			<button className="action-button-sidebar" onClick={setLanguage}>
				<MdTranslate
					className={`action-button-sidebar__icon opacity-50 ${
						language === "id" && "opacity-100"
					}`}
				/>
				<p
					className={`action-button-sidebar__text opacity-50 ${
						language === "id" && "opacity-100"
					}`}
				>
					{language}
				</p>
			</button>
		);
	}

	return (
		<button className="action-button" onClick={setLanguage}>
			<MdTranslate
				className={`action-button__icon opacity-50 ${
					language === "id" && "opacity-100"
				}`}
			/>
			<p
				className={`action-button__text opacity-50 ${
					language === "id" && "opacity-100"
				}`}
			>
				{language}
			</p>
		</button>
	);
}

SwitchLanguage.propTypes = { forSideBar: PropTypes.bool };
