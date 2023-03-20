import React, { useContext } from "react";
import UnifiedHeader from "../Unified Header";
import { coursesData } from "../../constants";


const CourseContext = React.createContext(0);
function CoursesImage() {
	const value = useContext(CourseContext);
	return (
		<React.Fragment>
			<img
				src={`courses${value}.png`}
				className="course-card-image"
				alt="course"
			/>
		</React.Fragment>
	);
}
function CoursesInfo() {
	const value = useContext(CourseContext);
	return (
		<div className="courses-info">
			<h4 className="courses-title">{coursesData[value].title}</h4>
			<p className="courses-discription">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium
				corrupti
			</p>
		</div>
	);
}
function CoursesSchedule() {
	const value = useContext(CourseContext);
	return (
		<div className="courses-schedule">
			<div className="courses-time">
				<h5 className="courses-time-title">{coursesData[value].time}</h5>
			</div>
			<div className="courses-teacher">
				<h5 className="courses-teacher-name">{coursesData[value].teacher}</h5>
			</div>
		</div>
	);
}
function JoinButton() {
	return (
		<div className="courses-button">
			<a
				href="https://github.com/wtflvo"
				className="btn button-inner btn-success mx-auto"
				target="_blank"
				rel="noreferrer"
			>
				Join Now
			</a>
		</div>
	);
}
function CoursesData() {
	return (
		<React.Fragment>
			<CoursesInfo />
			<CoursesSchedule />
			<JoinButton />
		</React.Fragment>
	);
}
function Course() {
	return (
		<div className="col-12 col-sm-12 col-md-12 col-lg-4">
			<div className="courses-col">
				<CoursesImage />
				<CoursesData />
			</div>
		</div>
	);
}

function CoursesRow() {
	return (
		<div className="row">
			<CourseContext.Provider value="0">
				<Course />
			</CourseContext.Provider>
			<CourseContext.Provider value="1">
				<Course />
			</CourseContext.Provider>
			<CourseContext.Provider value="2">
				<Course />
			</CourseContext.Provider>
		</div>
	);
}
function MoreCoursesButton() {
	return (
		<div className="more-courses">
			<a href="https://t.me/Wtflvo">
				<h5 className="more-courses-header">View all</h5>
			</a>
		</div>
	);
}

export function Courses() {
	return (
		<div id="courses" className="courses-container">
			<UnifiedHeader header="Courses" />
			<CoursesRow />
			<MoreCoursesButton />
		</div>
	);
}
