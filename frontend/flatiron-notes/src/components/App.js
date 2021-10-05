import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Login from "./Login";
import Body from "./Body";
import { Button, Icon } from "semantic-ui-react";

function App() {
	console.log("You made it past initalization");
	return (
		<div className="App">
			<Header />
			<NavBar />
			<Login />
			<Body />
		</div>
	);
}

export default App;
