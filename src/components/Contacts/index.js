import React from "react";
import UnifiedHeader from "../Unified Header";

function ContactsIcon(props) {
	return (
		<React.Fragment>
			<img src={`contact${props.number}.png`} alt="contacts-icon" />
		</React.Fragment>
	);
}

function IconsList() {
	const indexes = [0, 1, 2];
	return (
		<div className="row">
			{indexes.map((elem) => (
				<div className="col-4" key={elem}>
					<ContactsIcon number={elem} />
				</div>
			))}
		</div>
	);
}
function ContactsList() {
	const contacts = [
		"Yuriy Illenka Street, 4, Kyiv",
		"hello@gmail.com",
		"+38099 111 22 33",
	];
	return (
		<div className="row">
			{contacts.map((elem) => (
				<div className="col-4" key={elem}>
					<p>{elem}</p>
				</div>
			))}
		</div>
	);
}

function Map() {
	return (
		<div className="contact-map-container">
			<iframe
				title="map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.4056259823367!2d30.48095985771885!3d50.463428698801124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce79b12f4319%3A0xa14f8ff1e0933e0c!2z0LLRg9C70LjRhtGPINCu0YDRltGPINCG0LvQu9GU0L3QutCwLCA0LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1659396662016!5m2!1suk!2sua"
				width="100%"
				height="325"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}

function ContactForm() {
	return (
		<div className="contact-form">
			<div className="contact-name">
				<input
					type="text"
					className="form-control"
					placeholder="Full Name"
					aria-label="Full Name"
				/>
			</div>
			<div className="contact-mail">
				<input
					type="text"
					className="form-control"
					placeholder="E-mail"
					aria-label="E-mail"
				/>
			</div>
			<div className="contact-message">
				<textarea
					rows="4"
					cols="20"
					className="form-control contact-message-inner"
					placeholder="Message"
					aria-label="Message"
				></textarea>
			</div>
			<div className="col-2">
				<div className="contact-button">
					<button type="submit" className="btn btn-success">
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export function Contacts() {
	return (
		<div className="contact-container">
			<UnifiedHeader header={"Contact"} />
			<div className="row">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6">
					<ContactForm />
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6">
					<Map />
					<IconsList />
					<ContactsList />
				</div>
			</div>
		</div>
	);
}

// <div className="contact-container">
// 	<div className="contact-header">
// 		<h1>Contact</h1>
// 	</div>
// 	<div className="row">
// 		<div className="col-12 col-sm-12 col-md-6 col-lg-6">
// 			<div className="contact-form">
// 				<div className="contact-name">
// 					<input
// 						type="text"
// 						className="form-control"
// 						placeholder="Full Name"
// 						aria-label="Full Name"
// 					/>
// 				</div>
// 				<div className="contact-mail">
// 					<input
// 						type="text"
// 						className="form-control"
// 						placeholder="E-mail"
// 						aria-label="E-mail"
// 					/>
// 				</div>
// 				<div className="contact-message">
// 					<textarea
// 						rows="4"
// 						cols="20"
// 						className="form-control contact-message-inner"
// 						placeholder="Message"
// 						aria-label="Message"
// 					>
// 						Message
// 					</textarea>
// 				</div>
// 				<div className="col-2">
// 					<div className="contact-button">
// 						<button type="submit" className="btn btn-success">
// 							Send
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="col-12 col-sm-12 col-md-6 col-lg-6">
// 			<div className="contact-map-container">
// 				<iframe
// 					title="map"
// 					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.4056259823367!2d30.48095985771885!3d50.463428698801124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce79b12f4319%3A0xa14f8ff1e0933e0c!2z0LLRg9C70LjRhtGPINCu0YDRltGPINCG0LvQu9GU0L3QutCwLCA0LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1659396662016!5m2!1suk!2sua"
// 					width="100%"
// 					height="325"
// 					style="border: 0"
// 					allowfullscreen=""
// 					loading="lazy"
// 					referrerpolicy="no-referrer-when-downgrade"
// 				></iframe>
// 			</div>
// 			<div className="row">
// 				<div className="col-4">
// 					<div className="contact-location-image">
// 						<img src="contact0.png" alt="location" />
// 					</div>
// 				</div>
// 				<div className="col-4">
// 					<div className="contact-mail-image">
// 						<img src="message.png" alt="location" />
// 					</div>
// 				</div>
// 				<div className="col-4">
// 					<div className="contact-phone-image">
// 						<img src="phone.png" alt="location" />
// 					</div>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-4">
// 					<div className="contact-location-text">
// 						<p>Yuriy Illenka Street, 4, Kyiv</p>
// 					</div>
// 				</div>
// 				<div className="col-4">
// 					<div className="contact-mail-text">
// 						<p>hello@gmail.com</p>
// 					</div>
// 				</div>
// 				<div className="col-4">
// 					<div className="contact-phone-text">
// 						<p>+38099 111 22 33</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>;
