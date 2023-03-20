import { useState, useRef } from "react";
import React from "react";
import UnifiedHeader from "../Unified Header";
import { comments } from "../../constants";


function CommentsBodyContainer() {
	let [chosenComment, makeChoise] = useState(2);
	const refNumber = useRef(2);

	function changeText(number) {
		const prevPhoto = document.getElementById(`client${refNumber.current}`);
		prevPhoto.classList.remove("comments-photo-active");
		refNumber.current = number;
		makeChoise(() => refNumber.current);
		const currentPhoto = document.getElementById(`client${number}`);
		currentPhoto.classList.add("comments-photo-active");
	}

	return (
		<div className="comments-body-container">
			<div className="row justify-content-md-center">
				<CommentsImage number={0} func={changeText} />
				<CommentsImage number={1} func={changeText} />
				<CommentsImage number={2} func={changeText} />
				<CommentsImage number={3} func={changeText} />
				<CommentsImage number={4} func={changeText} />
			</div>
			<div className="comments-info">
				<div className="comments-text">
					<p>{comments[chosenComment].text}</p>
				</div>
				<div className="comments-person">
					<h2 className="comments-name">{comments[chosenComment].name}</h2>
					<h4 className="comments-post">{comments[chosenComment].post}</h4>
				</div>
			</div>
		</div>
	);
}
function CommentsImage(props) {
	if (props.number === 2) {
		return (
			<div className="col-12 col-sm-12 col-md-12 col-lg-2">
				<div className="comments-photo-container">
					<img
						className="comments-photo comments-photo-active"
						id={`client${props.number}`}
						src={`client${props.number}.png`}
						onClick={() => props.func(props.number)}
						alt=""
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="col-6 col-sm-6 col-md-6 col-lg-2">
			<div className="comments-photo-container">
				<img
					className="comments-photo"
					id={`client${props.number}`}
					src={`client${props.number}.png`}
					onClick={() => props.func(props.number)}
					alt=""
				/>
			</div>
		</div>
	);
}

function Comments() {
	return (
		<div id="comments" className="comments-container">
			<UnifiedHeader header={"What client say"} />
			<CommentsBodyContainer />
		</div>
	);
}

export { Comments };
