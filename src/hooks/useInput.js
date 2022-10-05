import { useState } from "react";

export default function useInput(initialValue) {
	const [input, setInputOrigin] = useState(initialValue);

	function setInput(value) {
		if (typeof value === "string") {
			setInputOrigin(value);
		} else if (value.target.tagName === "DIV") {
			setInputOrigin(value.target.innerHTML);
		} else {
			setInputOrigin(value.target.value);
		}
	}

	return [input, setInput];
}
