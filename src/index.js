import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import PopUp from "./components/PopUp";

import { ThemeProvider } from "./contexts/Theme";
import { LanguageProvider } from "./contexts/Language";

import App from "./App";

import "moment/locale/id";
import "./fonts/Chillax/css/chillax.css";
import "./fonts/Poppins/css/poppins.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ThemeProvider>
			<LanguageProvider>
				<App />
				<PopUp />
			</LanguageProvider>
		</ThemeProvider>
	</BrowserRouter>
);
