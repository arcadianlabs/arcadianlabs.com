import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";

import "./nav.css";

export default () => (
	<nav className="nav">
		<ul className="nav__list">
			<li className="nav__list-item">
				<a className="nav__list-item-link" href="#team">
					Team
				</a>
			</li>
			<li className="nav__list-item">
				<a className="nav__list-item-link" href="#work">
					Work
				</a>
			</li>
			<li className="nav__list-item">
				<a className="nav__list-item-link" href="#contact">
					Contact
				</a>
			</li>
		</ul>
		<ul className="nav__list nav__list--social">
			<li className="nav__list-item">
				<a
					className="nav__list-item-link"
					href="https://www.facebook.com/arcadianlabs/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</li>
			<li className="nav__list-item">
				<a
					className="nav__list-item-link"
					href="https://www.linkedin.com/company/arcadian-labs/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</li>
			<li className="nav__list-item">
				<a
					className="nav__list-item-link"
					href="https://github.com/arcadianlabs"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</li>
			<li className="nav__list-item">
				<a
					className="nav__list-item-link"
					href="https://twitter.com/ArcadianLabs"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</li>
		</ul>
	</nav>
);
