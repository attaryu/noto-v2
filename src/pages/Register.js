import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Input from "../components/Input";
import TextHero from "../components/TextHero";

import useLanguage from "../hooks/useLanguage";
import useInput from "../hooks/useInput";

import { register } from "../utils/api";

export default function Register({ setLoading }) {
	const [name, setName] = useInput("");
	const [email, setEmail] = useInput("");
	const [password, setPassword] = useInput("");
	const [repeatPassword, setRepeatPassword] = useInput("");
	const language = useLanguage("register");
	const navigate = useNavigate();
	const notMatchRef = useRef();
	const buttonRef = useRef();
	const limitRef = useRef();

	useEffect(() => {
		const button = buttonRef.current;
		const noMatch = notMatchRef.current;
		const limit = limitRef.current;

		if (password !== repeatPassword || password.length < 6) {
			button.disabled = true;
			noMatch.classList.remove("invisible");
			limit.classList.remove("invisible");
		}

		if (password === repeatPassword && password.length >= 6) {
			button.disabled = false;
		}

		if (password.length >= 6) {
			limit.classList.add("invisible");
		}

		if (password === repeatPassword) {
			noMatch.classList.add("invisible");
		}
	}, [password, repeatPassword]);

	function registerHandler(event) {
		event.preventDefault();
		setLoading(true);

		register({ name, email, password }).then(({ error }) => {
			if (!error) {
				navigate("/login");
			}

			setLoading(false);
		});
	}

	return (
		<div className="login-register">
			<div className="login-register__hero-text">
				<TextHero heading={language.heading} text={language.text} />
			</div>

			<form
				className="login-register__form-container xl:h-5/6"
				onSubmit={registerHandler}
			>
				<div className="xl:w-1/2">
					<Input
						type="name"
						value={name}
						handler={setName}
						placeholder={language.name}
					/>
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
					<Input
						type="password"
						value={repeatPassword}
						handler={setRepeatPassword}
						placeholder={language.repeatPassword}
					/>

					<p className="pass-alert mt-5 xl:-mt-3 visible" ref={limitRef}>
						{language.limit}
					</p>
					<p className="pass-alert mt-1 visible" ref={notMatchRef}>
						{language.match}
					</p>
				</div>

				<div className="mt-auto xl:w-1/2 xl:flex xl:gap-3">
					<button
						type="submit"
						ref={buttonRef}
						className="button-primary w-full py-1 block disabled:bg-primary/40 disabled:cursor-not-allowed disabled:hover:bg-primary/40 dark:disabled:bg-primary-dark/40 dark:disabled:hover:bg-primary-dark/40"
						disabled
					>
						{language.buttonSubmit}
					</button>
					<Link
						to="/login"
						className="button-secondary w-full py-1 mt-3 block text-center xl:mt-0"
					>
						{language.buttonBack}
					</Link>
				</div>
			</form>
		</div>
	);
}

Register.propTypes = { setLoading: PropTypes.func.isRequired };
