import React from "react";

function SubscribeText() {
	return (
		<div className="end-text">
			<h1>Subscribe to our newsletter</h1>
		</div>
	);
}
function SignUpBtn() {
	return (
		<div className="end-button">
			<button type="submit" className="btn btn-success">
				Sign Up
			</button>
		</div>
	);
}

function SignUpInput() {
	return (
		<div className="end-connect">
			<input
				type="email"
				className="form-control end-form-control"
				id="colFormLabel"
				placeholder="Email"
			/>
		</div>
	);
}

export function SendEmail() {
	return (
		<div className="end-container" id="contact">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-7">
					<SubscribeText />
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-3">
					<SignUpInput />
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-2">
					<SignUpBtn />
				</div>
			</div>
		</div>
	);
}
