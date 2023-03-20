import React, { useContext, useEffect, useState } from "react";
import UnifiedHeader from "../Unified Header";
// import { featuresData } from "../../constants";

function FeaturesImage(props) {
	return (
		<React.Fragment>
			<img
				src={`features${props.index}.png`}
				className="feature-image"
				alt="feature"
			/>
		</React.Fragment>
	);
}
const FeaturesDataContext = React.createContext([]);

function FeaturesDescription({ index }) {
	const featuresData = useContext(FeaturesDataContext);
	if (!featuresData) {
		return (
			<React.Fragment>
				<h3>Loading...</h3>
				<p>Loading...</p>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<h3>{featuresData[index]?.title}</h3>
			<p>{featuresData[index]?.text}</p>
		</React.Fragment>
	);
}
function SingleFeatureContainer(props) {
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-12 col-lg-4">
				<div className="feature-name">
					<FeaturesImage index={props.index} />
					<FeaturesDescription index={props.index} />
				</div>
			</div>
		</React.Fragment>
	);
}

export function Features() {
	const [featuresData, setFeatures] = useState([]);

	useEffect(() => {
		async function getData() {
			await fetch("http://localhost:5000/features")
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setFeatures(data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
		getData();
	}, []);

	return (
		<React.Fragment>
			<FeaturesDataContext.Provider value={featuresData}>
				<div className="features-container">
					<UnifiedHeader header={"Features"} />
					<div className="row">
						<SingleFeatureContainer index={0} />
						<SingleFeatureContainer index={1} />
						<SingleFeatureContainer index={2} />
					</div>
					<div className="row">
						<SingleFeatureContainer index={3} />
						<SingleFeatureContainer index={4} />
						<SingleFeatureContainer index={5} />
					</div>
				</div>
			</FeaturesDataContext.Provider>
		</React.Fragment>
	);
}
