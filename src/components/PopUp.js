import React, { useRef } from "react";

export default function PopUp() {
	const bg = useRef();

	function closePopUp() {
		bg.current.classList.remove("grid");
		bg.current.classList.add("hidden");
	}

	return (
		<div
			className="pop-up w-full h-[100vh] hidden fixed top-0 right-0 place-items-center bg-black/50 backdrop-blur-sm z-50"
			ref={bg}
		>
			<div className="w-56 py-6 flex justify-center items-center flex-col bg-light shadow-lg rounded-3xl dark:bg-black-2 xl:w-96">
				<img
					src=""
					alt=""
					className="pop-up__image w-[30%] mt-2 mb-8 xl:mt-5 xl:mb-10"
				/>
				<h2 className="pop-up__heading text-lg font-poppins-bold text-center text-primary dark:text-primary-dark xl:text-2xl">
					Login gagal
				</h2>
				<p className="pop-up__text mt-1 text-sm text-black-3 xl:text-base dark:text-white-3"></p>
				<button
					className="mt-8 mx-auto px-6 py-0.5 block text-base font-chillax-semibold bg-primary text-white rounded-full transition-colors duration-300 xl:hover:bg-primary/[.75] dark:bg-primary-dark dark:text-black-1 dark:xl:hover:bg-primary-dark/[.75] xl:mt-10 xl:mb-2 xl:text-xl xl:px-8 xl:py-1"
					onClick={closePopUp}
				>
					Close
				</button>
			</div>
		</div>
	);
}
