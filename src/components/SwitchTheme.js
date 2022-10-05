import React, { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import PropTypes from "prop-types";

import Theme from "../contexts/Theme";

export default function SwitchTheme({ forSideBar = false }) {
	const { theme, setTheme } = useContext(Theme);

	if (forSideBar) {
		return (
			<button className="action-button-sidebar" onClick={setTheme}>
				{theme === "light" ? (
					<MdLightMode className="action-button-sidebar__icon" />
				) : (
					<MdDarkMode className="action-button-sidebar__icon" />
				)}
				<p className="action-button-sidebar__text">{theme}</p>
			</button>
		);
	}

	return (
		<button className="action-button" onClick={setTheme}>
			{theme === "light" ? (
				<MdLightMode className="action-button__icon" />
			) : (
				<MdDarkMode className="action-button__icon" />
			)}
			<p className="action-button__text">{theme}</p>
		</button>
	);
}

SwitchTheme.propTypes = { forSideBar: PropTypes.bool };
