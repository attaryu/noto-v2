import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Archive from "./pages/Archive";
import DetailNote from "./pages/DetailNote";
import AddNote from "./pages/AddNote";
import PageNotFound from "./pages/PageNotFound";

import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import SwitchLanguage from "./components/SwitchLanguage";
import SwitchTheme from "./components/SwitchTheme";
import Logo from "./components/Logo";

import { getUserLogged } from "./utils/api";

export default function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		getUserLogged().then((response) => {
			if (!response.error) {
				setUser(response.data);
			}
			setLoading(false);
		});
	}, []);

	function userLogged() {
		getUserLogged().then((response) => {
			if (!response.error) {
				setUser(response.data);
			}

			navigate("/");
			setLoading(false);
		});
	}

	function logOut() {
		setUser(null);
		localStorage.clear("TOKEN");
		navigate("/login");
	}

	if (loading) {
		return (
			<div className="w-full h-[100vh] grid place-items-center z-40 dark:bg-black-1">
				<Loading />
			</div>
		);
	}

	if (!user) {
		return (
			<>
				<header className="w-full h-[8vh] px-3 py-2 flex justify-end items-center gap-3 xl:h-[9vh] xl:gap-5 xl:px-6 dark:bg-black-1">
					<SwitchLanguage />
					<SwitchTheme />
					<Logo />
				</header>
				<Routes>
					<Route
						path="/login"
						element={
							<Login userLogged={userLogged} setLoading={setLoading} />
						}
					/>
					<Route
						path="/register"
						element={<Register setLoading={setLoading} />}
					/>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/*" element={<Navigate to="/login" />} />
				</Routes>
			</>
		);
	}

	return (
		<div className="w-full h-[100vh] xl:flex">
			<div className="xl:w-[13%]">
				<Sidebar nameUser={user.name} logOut={logOut} />
			</div>
			<div className="w-full h-[100vh] xl:w-[87%]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<AddNote />} />
					<Route path="/notes" element={<Notes />} />
					<Route path="/archive" element={<Archive />} />
					<Route path="/note/:id" element={<DetailNote />} />
					<Route path="/login" element={<Navigate to="/" />} />
					<Route path="/register" element={<Navigate to="/" />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</div>
		</div>
	);
}
