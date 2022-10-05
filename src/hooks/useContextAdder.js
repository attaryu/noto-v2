import { useState, useEffect } from "react";

export default function useContextAdder(KEY, value1, value2) {
	const [context, setContextOrigin] = useState(
		() => localStorage.getItem(KEY) || value1
	);

	function setContext() {
		setContextOrigin((prev) => (prev === value1 ? value2 : value1));
	}

	useEffect(() => {
		localStorage.setItem(KEY, context);
	}, [KEY, context]);

	return [context, setContext];
}
