import React from 'react';

import './hero.scss';

export default ({ image }) => (
	<section className="hero" style={{ backgroundImage: `url(${image})` }}>
		<div className="hero__container">
			<p className="hero__lead">
				Complete,<br />
				full stack<br />
				web solutions
			</p>
		</div>
	</section>
)