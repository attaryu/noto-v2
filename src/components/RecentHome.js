import React from "react";
import PropTypes from "prop-types";

import CardRecent from "./CardRecent";
import NoteNotFound from "./NoteNotFound";

export default function RecentHome({ heading, data }) {
	const dataRecent = data.slice().reverse();
	const justifyCenter = dataRecent.length === 0 ? "justify-center" : "";

	return (
		<section className="w-full">
			<h2 className="px-4 pb-1.5 font-chillax-semibold text-xl text-black-1 dark:text-white-1 xl:px-8 xl:pb-3 xl:text-2xl">
				{heading}
			</h2>
			<div
				className={`w-full h-48 p-5 bg-primary/70 flex items-center flex-nowrap gap-8 overflow-auto snap-x snap-mandatory scroll-px-5 dark:bg-primary-dark ${justifyCenter} xl:p-10 xl:h-72 xl:gap-10 xl:snap-none`}
			>
				{dataRecent.length === 0 ? (
					<NoteNotFound />
				) : (
					dataRecent.map(
						(note, i) =>
							i <= 4 && <CardRecent key={note.id} data={note} />
					)
				)}
			</div>
		</section>
	);
}

RecentHome.propTypes = {
	heading: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
};
