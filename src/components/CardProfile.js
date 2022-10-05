import React from "react";
import PropTypes from "prop-types";
import useLanguage from "../hooks/useLanguage";

export default function CardProfile({ nameUser }) {
	const language = useLanguage("cardProfile");

	return (
		<div className="w-full px-2.5 py-1.5 bg-white/10 dark:bg-white/5 rounded-sm">
			<p className="text-sm text-white/50">{language},</p>
			<p className="-mt-0.5 text-xl text-white font-poppins-semibold truncate">
				{nameUser}
			</p>
		</div>
	);
}

CardProfile.propTypes = { nameUser: PropTypes.string.isRequired };
