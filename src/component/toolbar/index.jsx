import React from "react";
import { useTranslation } from "react-i18next";

const Toolbar = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	console.log(i18n.language);
	const isActive = (lng) => (i18n.language === lng ? "active" : "");
	return (
		<div className="toolbar">
			<button
				className={`${isActive("en")} btn-grad`}
				onClick={() => changeLanguage("en")}
			>
				English
			</button>
			<button
				className={`${isActive("hi")} btn-grad`}
				onClick={() => changeLanguage("hi")}
			>
				हिंदी
			</button>
			<button
				className={`${isActive("ur")} btn-grad`}
				onClick={() => changeLanguage("ur")}
			>
				اوردو
			</button>
		</div>
	);
};

export default Toolbar;
