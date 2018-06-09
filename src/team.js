import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";

import "./team.scss";

const SUPPORTED_SOCIAL = {
	facebook: <FontAwesomeIcon icon={faFacebook} />,
	linkedin: <FontAwesomeIcon icon={faLinkedin} />
};

export default ({ items }) => (
	<section className="team" id="team">
		<div className="team__container">
			<h2 className="team__title">Team</h2>
			<ul className="team__items">
				{items.map(({ name, image, role, social }) => (
					<li className="team__item" key={name}>
						<div
							className="team__item-illustration"
							style={{ backgroundImage: `url(${image})` }}
						/>
						<h3 className="team__item-title">{name}</h3>
						<p className="team__item-role">{role}</p>
						<ul className="team__item-social-items">
							{Object.keys(social).map(key => (
								<li
									className="team__item-social-item"
									key={key}
								>
									<a
										className="team__item-social-link"
										href={social[key]}
										target="_blank"
										rel="noopener noreferrer"
									>
										{SUPPORTED_SOCIAL[key]}
									</a>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	</section>
);
