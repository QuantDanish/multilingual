import React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../i18n";
import Home from "../component/home";

import "./app.scss";
import Toolbar from "./toolbar";

const App = () => (
	<div className="App">
		{/* <I18nextProvider i18n={i18n}> */}
		<Toolbar />
		<Home />
		{/* </I18nextProvider> */}
	</div>
);
export default App;
