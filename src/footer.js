import React from 'react';

import Logo from './logo';
import Nav from './nav';

import './footer.scss';

export default () => (
	<footer className="footer">
		<div className="footer__container">
			<div className="footer__content">
				<div className="footer__brand">
					<Logo white />
				</div>
				<Nav />
			</div>
		</div>
	</footer>
)