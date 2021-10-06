import React from "react";
import { Route, Switch } from 'react-router-dom'
//import { useHistory } from 'react-router-dom';
import {useEffect, useState} from "react";
import Notes from "./Notes";
import Homepage from "./Homepage";
import NoteDetail from "./NoteDetail";



function Body() {
	const [ allNotes, setAllNotes ] = useState([])

	//let history = useHistory();

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
		<div className="body-div">
			<Switch>
				<Route exact path="/">
					<Homepage allNotes={allNotes} />
				</Route>
				<Route exact path="/notes">
					<Notes allNotes={allNotes}/>
				</Route>
				<Route path="/notes/:id">
             		<NoteDetail allNotes={allNotes}/>
        		</Route>
				<Route path="/new_note">
					<h1>Add New Note</h1>
					{/* <AddNote /> */}
				</Route>
			</Switch>
		</div>
	);
}

export default Body;
