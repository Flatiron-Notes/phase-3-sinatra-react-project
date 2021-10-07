import React from "react";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import { useState } from "react";

import Body from "./Body";

function App() {
	console.log("You made it past initalization");

	return (
		<div className="App">
			<Header />
			<NavBar/>
			<Body />
		</div>
	);
}

export default App;
