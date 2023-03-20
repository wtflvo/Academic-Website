import React from "react";
import UnifiedHeader from "../Unified Header";
import { programsText } from "../../constants";




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
