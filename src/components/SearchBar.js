import React, { useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5/index";

import useInput from "../hooks/useInput";
import useSearchURL from "../hooks/useSearchURL";

export default function SearchBar() {
	const [keyword, setKeyword] = useInput("");
	const [searchKey, setSearchKey] = useSearchURL("title");
	const inputRef = useRef();
	const inputClass = ["pl-3", "pr-9", "w-full"];
	const inputClass2 = ["cursor-pointer", "w-9"];

	useEffect(() => {
		const search = searchKey ?? "";

		if (search.length !== 0) {
			setSearchKey(search);
			expandHandler();
		}
	}, []);

	function inputHandler(event) {
		setKeyword(event);
		setSearchKey(event);
	}

	function expandHandler() {
		const input = inputRef.current;
		if (keyword.length === 0) {
			input.focus();
			inputClass.map((className) => input.classList.add(className));
			inputClass2.map((className) => input.classList.remove(className));
		}
	}

	function shrinkHandler() {
		const input = inputRef.current;
		if (keyword.length === 0) {
			inputClass.map((className) => input.classList.remove(className));
			inputClass2.map((className) => input.classList.add(className));
		}
	}

	return (
		<div className="w-3/5 relative flex justify-end items-center">
			<input
				type="text"
				value={keyword}
				onChange={inputHandler}
				onFocus={expandHandler}
				onBlur={shrinkHandler}
				onClick={expandHandler}
				ref={inputRef}
				className="w-9 h-full text-xs bg-white-1 outline-none rounded-md cursor-pointer dark:bg-black-2 dark:text-white-2"
			/>
			<IoSearch
				className="absolute right-2.5 dark:text-white cursor-pointer"
				onClick={expandHandler}
			/>
		</div>
	);
}
