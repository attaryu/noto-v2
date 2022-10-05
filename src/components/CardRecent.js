import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

import Language from "../contexts/Language";

export default function CardRecent({ data }) {
	const { language } = useContext(Language);
	const navigate = useNavigate();

	return (
		<div className="group">
			<div
				className="snap-start min-w-[280px] max-w-[280px] h-36 p-4 bg-white rounded-md shadow-md flex flex-col cursor-pointer dark:bg-black-1 xl:min-w-[480px] xl:max-w-[480px] xl:h-44 xl:group-hover:scale-105 xl:group-hover:shadow-xl"
				onClick={() => navigate(`/note/${data.id}`)}
			>
				<h3 className="w-full h-[90px] overflow-hidden leading-6 font-poppins-bold text-black-1 dark:text-white-1 xl:text-xl xl:h-28">
					{data.title}
				</h3>
				<Moment
					className="mt-auto font-poppins-medium text-xs text-white-4 xl:text-sm"
					format="DD MMMM YYYY"
					locale={language}
				>
					{data.createdAt}
				</Moment>
			</div>
		</div>
	);
}

CardRecent.propTypes = { data: PropTypes.object.isRequired };
