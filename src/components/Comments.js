
import { useState, useRef } from "react";
import React from "react";

const comments = [
	{
		name: "Michael Source",
		post: "School Teacher",
		text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	},
	{
		name: "Quentine Torres",
		post: "Manager",
		text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
	},
	{
		name: "Jhon Doe",
		post: "SEO Head",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, itaque doloribus repellat sequi praesentium nulla ad dolores adipisci in. Non cum atque quis aspernatur eius error aperiam quaerat, optio quisquam!",
	},
	{
		name: "Paul Mendel",
		post: "SMM",
		text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
	},
	{
		name: "Alex Merser",
		post: "Art-director",
		text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
	},
];

function CommentsHeader() {
	return (
		<div className="comments-header">
			<h1>What client say</h1>
		</div>
	);
}

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
			<CommentsHeader />
			<CommentsBodyContainer />
		</div>
	);
}

export { Comments };
