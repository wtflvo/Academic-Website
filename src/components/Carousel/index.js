import React from "react";

function CarouselImage(props) {
	return (
		<React.Fragment>
			<img src={`cat${props.number}.png`} className="d-block w-100" alt="cat" />
		</React.Fragment>
	);
}
function CarouselItem(props) {
	if (props.number === 2) {
		return (
			<div className="carousel-item active">
				<CarouselImage number={2} />
				<div className="carousel-caption d-md-block">
					<h1>Start your education with our cat-team!</h1>
				</div>
			</div>
		);
	}
	return (
		<div className="carousel-item" data-bs-interval="5000">
			<CarouselImage number={props.number} />
		</div>
	);
}
export function Carousel() {
	return (
		<div
			id="carouselExampleSlidesOnly"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<CarouselItem number={2} />
				<CarouselItem number={1} />
				<CarouselItem number={3} />
			</div>
		</div>
	);
}
