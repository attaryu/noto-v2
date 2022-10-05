import React, { createContext, useMemo } from "react";
import useContextAdder from "../hooks/useContextAdder";

const Language = createContext();

function LanguageProvider({ children }) {
	const [language, setLanguage] = useContextAdder("LANGUAGE", "en", "id");

	const LanguageContext = useMemo(() => {
		return { language, setLanguage };
	}, [language, setLanguage]);

	return (
		<Language.Provider value={LanguageContext}>{children}</Language.Provider>
	);
}

export default Language;
export { LanguageProvider };
