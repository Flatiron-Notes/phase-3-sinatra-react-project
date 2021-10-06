import React from "react";
import Notes from "./Notes";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useEffect, useState} from "react";


function Body() {
	const [ allNotes, setAllNotes ] = useState([])

	function fetching() {
	fetch('http://localhost:9292/notes')
	.then((r) => r.json())
	.then(data => setAllNotes(data))
	}

	useEffect(() => {
		console.log("Re-Running...")
		fetching();
	  },[]);

	return (
		<>
			<Switch>
				<Route path="/">
					<Homepage allNotes={allNotes} />
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
