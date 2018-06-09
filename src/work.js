import React from "react";

import "./work.scss";

export default ({ items = [] }) => (
	<section className="work" id="work">
		<div className="work__container">
			<h2 className="work__title">Work</h2>
			<ul className="work__items">
				{items.map(({ url, name, image }) => (
					<li className="work__item" key={ url }>
						<a
							className="work__item-link"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="work__card">
								
								<img
									className="work__card-illustration"
									src={image}
									alt={name}
								/>
								<h3 className="work__card-title">{name}</h3>
							</div>

						</a>
					</li>
				))}
			</ul>
		</div>
	</section>
);
