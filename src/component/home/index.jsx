import React from "react";
import { useTranslation } from "react-i18next";

import "./home.scss";

const Home = () => {
	const { t } = useTranslation();
	return (
		<div className="home">
			<h1 className="title">{t("home.title")}</h1>
			<div className="content">{t("home.content")}</div>
		</div>
	);
};

export default Home;
