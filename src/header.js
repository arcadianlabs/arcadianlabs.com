import React from 'react';

import './header.scss';

import Logo from './logo';
import Nav from './nav';

export default () => (
	<header className="header">
		<div className="header__content">
			<h1 className="header__brand">
				<a href="/" className="header__brand-link">
					<Logo />
				</a>
			</h1>
			<Nav />
		</div>
	</header>
);