import React from "react";
import PropTypes from "prop-types";

export default function Input({ type, value, handler, placeholder = "" }) {
	return (
		<label className="w-full mt-5 block xl:mt-0 xl:mb-7">
			<input
				type={type}
				value={value}
				onChange={handler}
				placeholder={placeholder}
				required
				className="w-full pb-1 border-b-2 text-sm font-poppins-medium outline-none xl:border-b-[3px] xl:pb-2 xl:text-base focus:invalid:border-b-red-300 invalid:text-red-400  focus:invalid:text-red-400 focus:valid:border-b-primary dark:bg-black-1 dark:text-white-1 dark:border-b-white/10 dark:focus:invalid:border-b-red-400  dark:invalid:text-red-400 dark:focus:valid:border-b-primary-dark dark:placeholder:text-white-4/50"
			/>
		</label>
	);
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired,
};
