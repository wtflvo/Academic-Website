
import React from "react";

const blogs = [
	{
		title: "Education during vacation",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium corrupti",
	},
	{
		title: "How to use music in education",
		text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis",
	},
	{
		title: "Education with technologies",
		text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse",
	},
	{
		title: "Turning goals into reality",
		text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
	},
	{
		title: "The nation into education",
		text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus",
	},
];

function BlogHeader() {
	return (
		<div className="blog-header">
			<h1>Blog</h1>
		</div>
	);
}

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
	return (
		<div className="blog-button mx-auto">
			<button
				className="btn blog-button-inner btn-success"
				onClick={() => showAdditionalBlog()}
			>
				Read more
			</button>
		</div>
	);
}

export function Blog() {
	return (
		<React.Fragment>
			<div id="blog-container" className="blog-container">
				<BlogHeader />
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
