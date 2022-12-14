import React, { useContext } from "react";

const teachersData = [
	{ name: "Nancee Bluford", post: "SEO Head" },
	{ name: "Velvet Vachon", post: "Design Head" },
	{ name: "Floyd Fukuda", post: "Marketing HOD" },
	{ name: "Ressie Rottman", post: "Design Head" },
	{ name: "Arlene Anello", post: "Seo Head" },
	{ name: "Elena Cully", post: "Design Head" },
	{ name: "Reed Recio", post: "Photography Head" },
	{ name: "Benton Colley", post: "Photography Head" },
	{ name: "Burton Brooke", post: "Web Technologist" },
];

function TeachersHeader() {
	return (
		<div class="teachers-header">
			<h1>Our Teachers</h1>
		</div>
	);
}

function TeachersImage() {
	const number = useContext(NumbersContext);
	return (
		<React.Fragment>
			<img
				src={`teacher-photo${number}.png`}
				className="teacher-photo"
				alt="teacher"
			/>
		</React.Fragment>
	);
}
function TeacherImageContainer() {
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6 col-lg-4">
				<div className="teacher-photo-container">
					<TeachersImage />
				</div>
			</div>
		</React.Fragment>
	);
}

function TeacherInfo() {
	const number = useContext(NumbersContext);
	return (
		<React.Fragment>
			<div className="col-12 col-sm-12 col-md-6 col-lg-8">
				<div className="teacher-name-container">
					<h4 className="teacher-name">{teachersData[number].name}</h4>
					<h5 className="teacher-post">{teachersData[number].post}</h5>
				</div>
			</div>
		</React.Fragment>
	);
}

function TeacherContainer() {
	return (
		<React.Fragment>
			<div className="row single-teacher">
				<TeacherImageContainer />
				<TeacherInfo />
			</div>
		</React.Fragment>
	);
}
const NumbersContext = React.createContext(0);

function TeachersData() {
	return (
		<div className="row">
			<div className="col-12 col-sm-12 col-md-12 col-lg-4">
				<div className="teacher-container">
					<div className=" teacher-info">
						<NumbersContext.Provider value="0">
							<TeacherContainer />
						</NumbersContext.Provider>
						<NumbersContext.Provider value="1">
							<TeacherContainer />
						</NumbersContext.Provider>
						<NumbersContext.Provider value="2">
							<TeacherContainer />
						</NumbersContext.Provider>
					</div>
				</div>
			</div>
			<div className="col-12 col-sm-12 col-md-12 col-lg-4">
				<div className="teacher-container">
					<div className=" teacher-info">
						<NumbersContext.Provider value="3">
							<TeacherContainer />
						</NumbersContext.Provider>
						<NumbersContext.Provider value="4">
							<TeacherContainer />
						</NumbersContext.Provider>
						<NumbersContext.Provider value="5">
							<TeacherContainer />
						</NumbersContext.Provider>
					</div>
				</div>
			</div>
			<div className="col-12 col-sm-12 col-md-12 col-lg-4">
				<div className="teacher-container">
					<div className=" teacher-info">
						<NumbersContext.Provider value="6">
							<TeacherContainer />
						</NumbersContext.Provider>
						<NumbersContext.Provider value="7">
							<TeacherContainer />
						</NumbersContext.Provider>
						<NumbersContext.Provider value="8">
							<TeacherContainer />
						</NumbersContext.Provider>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Teachers() {
	return (
		<div id="teachers" className="teachers-container">
			<TeachersHeader />
			<TeachersData />
		</div>
	);
}
