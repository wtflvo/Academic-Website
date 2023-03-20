import React from "react";
import ReactDOM from "react-dom/client";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { Teachers } from "./components/Teachers";
import { Comments } from "./components/Comments";
import { Programs } from "./components/Programs";
import { Blog } from "./components/Blog";
import reportWebVitals from "./reportWebVitals";
import { Education } from "./components/Education";
import { Carousel } from "./components/Carousel";
import { NavMenu } from "./components/NavMenu";
import { SendEmail } from "./components/SendEmail";
import { Contacts } from "./components/Contacts";
import { NavMenuBottom } from "./components/NavMenuBottom";

const programs = ReactDOM.createRoot(document.getElementById("programs-react"));
programs.render(
	<React.StrictMode>
		<NavMenu />
		<Carousel />
		<Education />
		<Features />
		<Courses />
		<Teachers />
		<Programs />
		<Comments />
		<Blog />
		<SendEmail />
		<Contacts/>
		<NavMenuBottom/>
	</React.StrictMode>
);

reportWebVitals();
