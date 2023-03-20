import React from "react";
import UnifiedHeader from "../Unified Header";
import { useState } from "react";
import { blogs } from "../../constants";


function BlogImage(props) {
	return (
		<img
			src={`blog${props.number}.png`}
			className="blog-card-image"
			alt="blogimg"
		/>
	);
}
function BlogDescription(props) {
	return (
		<React.Fragment>
			<div className="blog-text">
				<div className="blog-info">
					<h4 className="blog-title">{blogs[props.number].title}</h4>
					<p className="blog-discription">{blogs[props.number].text}</p>
				</div>
			</div>
		</React.Fragment>
	);
}

function SingleBlog(props) {
	return (
		<div
			id={`blog${props.number}`}
			className="col-12 col-sm-12 col-md-6 col-lg-3"
		>
			<div className="blog-col">
				<BlogImage number={props.number} />
				<BlogDescription number={props.number} />
			</div>
		</div>
	);
}

function showAdditionalBlog() {
	const hiddenBlogRow = document.getElementById("hiddenBlogRow");
	hiddenBlogRow.classList.toggle("blog-hidden-row");
}

function ButtonMoreBlogs() {
	const [btnValue, setValue] = useState("Read more");
	return (
		<div className="blog-button mx-auto">
			<button
				className="btn blog-button-inner btn-success"
				onClick={() => {
					showAdditionalBlog();
					setValue(() =>
						btnValue === "Read more" ? "Read less" : "Read more"
					);
				}}
			>
				{btnValue}
			</button>
		</div>
	);
}

export function Blog() {
	return (
		<React.Fragment>
			<div id="blog-container" className="blog-container">
				<UnifiedHeader header={"Blog"} />
				<div className="row">
					<SingleBlog number={0} />
					<SingleBlog number={1} />
					<SingleBlog number={2} />
					<SingleBlog number={3} />
				</div>
				<div id="hiddenBlogRow" className="row blog-hidden-row">
					<SingleBlog number={4} />
				</div>
				<ButtonMoreBlogs />
			</div>
		</React.Fragment>
	);
}
