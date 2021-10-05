import React from "react";
import Notes from "./Notes";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Body() {
	return (
		<>
			<Switch>
				<Route path="/home">
					<Homepage />
				</Route>
				<Route path="/notes">
					<Notes />
				</Route>
				<Route path="/new_note">
					<h1>Add New Note</h1>
					{/* <AddNote /> */}
				</Route>
			</Switch>
		</>
	);
}

export default Body;
