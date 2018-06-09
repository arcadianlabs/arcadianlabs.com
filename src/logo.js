import React from "react";

import "./logo.scss";
import LogoGoldSVG from "./images/logo-gold.svg";
import LogoWhiteSVG from "./images/logo-white.svg";

export default ({ name, white }) => (
	<div className="logo">
		<img
			src={white ? LogoWhiteSVG : LogoGoldSVG}
			className="logo__image"
			alt={name}
		/>
	</div>
);
