import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import TextHero from "../components/TextHero";
import Input from "../components/Input";

import useLanguage from "../hooks/useLanguage";
import useInput from "../hooks/useInput";

import { login } from "../utils/api";

export default function Login({ userLogged, setLoading }) {
	const language = useLanguage("login");
	const [email, setEmail] = useInput("");
	const [password, setPassword] = useInput("");

	function loginHandler(event) {
		event.preventDefault();
		setLoading(true);

		login({ email, password }).then((response) => {
			if (!response.error) {
				userLogged();
			} else {
				setLoading(false);
			}
		});
	}

	return (
		<div className="login-register">
			<div className="login-register__hero-text">
				<TextHero heading={language.heading} text={language.text} />
			</div>

			<form
				className="login-register__form-container xl:h-3/5"
				onSubmit={loginHandler}
			>
				<div className="xl:w-1/2">
					<Input
						type="email"
						value={email}
						handler={setEmail}
						placeholder="Email"
					/>
					<Input
						type="password"
						value={password}
						handler={setPassword}
						placeholder="Password"
					/>
				</div>
				<div className="mt-auto xl:w-1/2">
					<button type="submit" className="button-primary w-full py-1.5">
						Login
					</button>
					<p className="text-xs mt-3 text-center text-black-3 font-poppins-medium dark:text-white-3">
						{language.ask}
						<Link
							to="/register"
							className="text-primary underline font-poppins-semibold hover:text-primary/70 dark:text-primary-dark dark:hover:text-primary-dark/70"
						>
							{language.link}
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

Login.propTypes = {
	userLogged: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
};
