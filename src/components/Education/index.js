import React from "react";

import { educationData } from "../../constants";

function EducationHeader() {
	return (
		<div className="education-header-container">
			<h1 className="education-header">Education</h1>
		</div>
	);
}

function EducationImage(props) {
	return (
		<React.Fragment>
			<img
				src="education-main.png"
				className="education-image"
				alt="education"
			/>
		</React.Fragment>
	);
}

function EducationImageBox(props) {
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-12 col-lg-6">
				<div className="image-container">
					<EducationImage />
				</div>
			</div>
		</React.Fragment>
	);
}
function EducationDescription() {
	return (
		<div className="eduacation-p">
			<p>{educationData.description}</p>
		</div>
	);
}

function PossibilityIcon(props) {
	return (
		<div className="possibility-icon-container">
			<img
				src={`education${props.number}.png`}
				className="possibility-icon"
				alt="possibility-icon"
			/>
		</div>
	);
}
function PossibilityText(props) {
	return (
		<div className="possibility-text-container">
			<h5 className="possibility-text">
				{educationData.possibilities[props.number]}
			</h5>
		</div>
	);
}

function Possibility(props) {
	return (
		<div className="row">
			<div className="col-1 my-auto">
				<PossibilityIcon number={props.number} />
			</div>

			<div className="col-10 my-auto">
				<PossibilityText number={props.number} />
			</div>
		</div>
	);
}
function Possibilities() {
	return (
		<div className="possibilities-container">
			<Possibility number={0} />
			<Possibility number={1} />
			<Possibility number={2} />
		</div>
	);
}
function EducationInfo() {
	return (
		<div className="col-12 col-sm-12 col-md-12 col-lg-6">
			<div className="education-info-container">
				<EducationHeader />
				<EducationDescription />
				<Possibilities />
			</div>
		</div>
	);
}

export function Education() {
	return (
		<div id="education" className="education-container">
			<div className="row my-auto">
				<EducationImageBox />
				<EducationInfo />
			</div>
		</div>
	);
}
