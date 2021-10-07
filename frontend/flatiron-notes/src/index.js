import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
