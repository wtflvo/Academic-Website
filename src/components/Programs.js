

import React from "react";
import UnifiedHeader from "./UnifiedHeader";
const programsText = [
	{
		header: "Pre-college education",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
	},
	{
		header: "Middle School",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
	},
	{
		header: "High School",
		description:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
	},
	{
		header: "International exchange",
		description:
			"Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	},
	{
		header: "Graduate programs",
		description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit",
	},
	{
		header: "Home education",
		description:
			"Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam",
	},
];

function ProgramsHeader() {
	return (
		<div className="programs-header">
			<h1>Programs</h1>
		</div>
	);
}

function ProgramsImage(props) {
	return (
		<React.Fragment>
			<img
				src={`Programs${props.number}.png`}
				className="program-image"
				alt="test"
			/>
		</React.Fragment>
	);
}

function ProgramsDescription(props) {
	return (
		<React.Fragment>
			<div className="programs-discription">
				<h4 className="programs-discription-header">
					{programsText[props.number].header}
				</h4>
				<p className="programs-discription-text">
					{programsText[props.number].description}
				</p>
			</div>
		</React.Fragment>
	);
}
function SingleProgramContainer(props) {
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-12 col-lg-4">
				<div className="program-name-container">
					<ProgramsImage number={props.number} />
					<ProgramsDescription number={props.number} />
				</div>
			</div>
		</React.Fragment>
	);
}

export function Programs() {
	return (
		<React.Fragment>
			<div id="programs" className="programs-container">
				<UnifiedHeader header={"Programs"} />
				<div className="row">
					<SingleProgramContainer number={0} />
					<SingleProgramContainer number={1} />
					<SingleProgramContainer number={2} />
				</div>
				<div className="row">
					<SingleProgramContainer number={3} />
					<SingleProgramContainer number={4} />
					<SingleProgramContainer number={5} />
				</div>
			</div>
		</React.Fragment>
	);
}
