import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";

import Body from "./Body";

function App() {
	const [reRender, setReRender] = useState(false);

	function renderPage() {
		setReRender(!reRender);
		console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
	}

	console.log("You made it past initalization");

	return (
		<div className="App">
			<Header />
			<NavBar renderPage={renderPage} />
			<Body />
		</div>
	);
}

export default App;
