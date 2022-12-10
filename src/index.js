import React from "react";
import ReactDOM from "react-dom/client";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Teachers} from "./components/Teachers";
import { Comments } from "./components/Comments";
import { Programs } from "./components/Programs";
import { Blog } from "./components/Blog";
import reportWebVitals from "./reportWebVitals";

const programs = ReactDOM.createRoot(document.getElementById("programs-react"));
programs.render(
	<React.StrictMode>
		<Teachers />
		<Programs />
		<Comments />
		<Blog />
	</React.StrictMode>
);

reportWebVitals();
