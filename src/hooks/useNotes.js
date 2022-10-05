import { useState, useEffect } from "react";

export default function useNotes(callBack, value) {
	const [notesData, setNotesData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => callBackTrigger(), []);

	function callBackTrigger() {
		setLoading(true);

		callBack(value).then((response) => {
			if (!response.error) {
				setNotesData(response.data);
			}

			setLoading(false);
		});
	}

	return [notesData, loading, callBackTrigger];
}
