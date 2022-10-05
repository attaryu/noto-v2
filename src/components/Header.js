import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
	const navigate = useNavigate();
	const location = useLocation();
	const logoOrSearchbar =
		location.pathname === "/" ||
		location.pathname === "/add" ||
		location.pathname.includes("/note/");

	return (
		<header className="w-full h-[8vh] p-1.5 flex justify-end dark:bg-black-1 xl:px-5">
			{location.pathname !== "/" && (
				<button
					className="mr-auto py-1 px-2 bg-white-1 rounded-md dark:bg-black-2 xl:px-3"
					onClick={() => navigate(-1)}
				>
					<MdOutlineArrowBackIos className="dark:text-white" />
					<p className="hidden">Back</p>
				</button>
			)}
			{logoOrSearchbar ? <Logo /> : <SearchBar />}
		</header>
	);
}
