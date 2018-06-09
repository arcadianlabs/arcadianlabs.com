import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./contact.scss";

export default ({ zoom = 13, lat = 0, lng = 0 }) => {
	const position = [lat, lng];
	return (
		<section className="contact" id="contact">
			<div className="contact__container">
				<h2 className="contact__title">Contact</h2>
				<div className="contact__card">
					<div className="contact__row">
						<div className="contact__details">
							<label className="contact__details-label">
								Email
							</label>
							<p className="contact__details-value">
								<a href="mailto:contact@arcadianlabs.com">contact@arcadianlabs.com</a>
							</p>
						</div>
						<div className="contact__map">
							<Map center={position} zoom={zoom} zoomControl={ false }>
								<TileLayer
									attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker position={position}>
									<Popup>
										A pretty CSS3 popup. <br /> Easily
										customizable.
									</Popup>
								</Marker>
							</Map>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
