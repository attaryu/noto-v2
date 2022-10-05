import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiArchive, FiLogOut } from "react-icons/fi/index";
import { TbNotes } from "react-icons/tb/index";
import { MdOutlineArrowBackIos } from "react-icons/md";
import PropTypes from "prop-types";

import CardProfile from "./CardProfile";
import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

import useLanguage from "../hooks/useLanguage";

export default function Sidebar({ nameUser, logOut }) {
	const language = useLanguage("sidebar");
	const sideBarRef = useRef();
	const buttonRef = useRef();

	function openCloseHandler() {
		const buttonClass = ["-left-[50.5%]", "left-0"];
		const sideBarClass = ["rotate-180", "-right-5", "rotate-0", "-right-3"];

		buttonClass.map((cls) => sideBarRef.current.classList.toggle(cls));
		sideBarClass.map((cls) => buttonRef.current.classList.toggle(cls));
	}

	return (
		<nav
			ref={sideBarRef}
			className="w-1/2 h-full-vh fixed -left-[50.5%] top-0 bg-primary z-50 flex flex-col dark:bg-black-2 xl:left-0 xl:static xl:w-full"
		>
			<div className="px-2 pt-2">
				<CardProfile nameUser={nameUser} />
			</div>

			<ul className="px-3">
				<li>
					<Link to="/" className="w-full mt-5 flex items-center gap-3.5">
						<FiHome className="text-white text-lg" />
						<p className="text-white font-chillax-medium">
							{language.home}
						</p>
					</Link>
				</li>
				<li>
					<Link
						to="/notes"
						className="w-full mt-5 flex items-center gap-3.5"
					>
						<TbNotes className="text-white text-lg" />
						<p className="text-white font-chillax-medium">
							{language.notes}
						</p>
					</Link>
				</li>
				<li>
					<Link
						to="/archive"
						className="w-full mt-5 flex items-center gap-3.5"
					>
						<FiArchive className="text-white text-lg" />
						<p className="text-white font-chillax-medium">
							{language.archive}
						</p>
					</Link>
				</li>
			</ul>

			<div className="mt-auto px-3 pb-3 flex flex-col">
				<SwitchLanguage forSideBar={true} />
				<SwitchTheme forSideBar={true} />
				<button className="action-button-sidebar" onClick={logOut}>
					<FiLogOut className="action-button-sidebar__icon" />
					<p className="action-button-sidebar__text">Log out</p>
				</button>
			</div>

			<button
				className="p-1 absolute top-[50vh] bg-accent rounded-full -right-5 rotate-180 dark:bg-accent-dark xl:hidden"
				onClick={openCloseHandler}
				ref={buttonRef}
			>
				<MdOutlineArrowBackIos className="text-white dark:text-black-1" />
			</button>
		</nav>
	);
}

Sidebar.propTypes = {
	nameUser: PropTypes.string.isRequired,
	logOut: PropTypes.func.isRequired,
};
