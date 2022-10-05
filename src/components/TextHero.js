import React from "react";
import PropTypes from "prop-types";

export default function TextHero({ heading, text }) {
	return (
		<section className="w-full xl:w-2/3">
			<h1 className="font-chillax-bold text-4xl text-primary xl:text-5xl dark:text-primary-dark">
				{heading}
			</h1>
			<p className="w-full mt-2 text-sm text-black-2 dark:text-white-2 xl:text-lg xl:mt-3">
				{text}
			</p>
		</section>
	);
}

TextHero.propTypes = {
	heading: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
