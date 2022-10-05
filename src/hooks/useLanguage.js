import { useContext } from "react";

import Language from "../contexts/Language";

import textLanguage from "../utils/textLanguage";

export default function useLanguage(where) {
	const { language } = useContext(Language);
	return textLanguage[language][where];
}
