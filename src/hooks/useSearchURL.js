import { useSearchParams } from "react-router-dom";

export default function useSearhURL(propertyURL) {
	const [keyword, setKeywordOrigin] = useSearchParams();

	function setKeyword(value) {
		if (typeof value === "string") {
			setKeywordOrigin({ [propertyURL]: value });
		} else {
			setKeywordOrigin({ [propertyURL]: value.target.value });
		}
	}

	return [keyword.get(propertyURL), setKeyword];
}
