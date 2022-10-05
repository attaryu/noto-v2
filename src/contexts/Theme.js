import React, { createContext, useMemo } from "react";
import useContextAdder from "../hooks/useContextAdder";

const Theme = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useContextAdder("THEME", "light", "dark");

	const themeContext = useMemo(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		return { theme, setTheme };
	}, [setTheme, theme]);

	return <Theme.Provider value={themeContext}>{children}</Theme.Provider>;
}

export default Theme;
export { ThemeProvider };
