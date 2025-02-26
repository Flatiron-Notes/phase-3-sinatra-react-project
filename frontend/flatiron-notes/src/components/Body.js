import React from "react";
import { Route, Switch } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import Notes from "./Notes";
import Homepage from "./Homepage";
import NoteDetail from "./NoteDetail";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

function Body() {
	const [allNotes, setAllNotes] = useState([]);
	const [toggle, setToggle] = useState(true);
	console.log(allNotes);
	//let history = useHistory();

	function fetching() {
		fetch("http://localhost:9292/notes")
			.then((r) => r.json())
			.then((data) => {
				setAllNotes(data)
				// setToggle(!toggle)
			})
	}

	useEffect(() => {
		console.log("Re-Running...");
		fetching();
	}, [!toggle]);

	function generateDifficulty(difficultyNum) {
		const starEmoji = "⭐";
		let difficultyRating = "";
		for (let i = difficultyNum; i > 0; i -= 1) {
			difficultyRating += starEmoji;
		}
		return difficultyRating;
	}

	function triggerBodyToggle(){
		setToggle(!toggle)
	}

	return (
		<div className="body-div">
			<Switch>
				<Route exact path="/">
					<Homepage
						allNotes={allNotes}
						generateDifficulty={generateDifficulty}
					/>
				</Route>
				<Route exact path="/notes">
					<Notes
						allNotes={allNotes}
						setAllNotes={setAllNotes}
						generateDifficulty={generateDifficulty}
					/>
				</Route>
				<Route exact path="/notes/:id/edit">
					<EditNote toggle={toggle} setToggle={setToggle} />
				</Route>
				<Route exact path="/notes/:id">
					<NoteDetail allNotes={allNotes} toggle={toggle} setToggle={setToggle} triggerBodyToggle={triggerBodyToggle} />
				</Route>

				<Route exact path="/new_note">
					<br/>
					<h1>Create Note</h1>
					<AddNote setToggle={setToggle} toggle={toggle} />
				</Route>
			</Switch>
		</div>
	);
}

export default Body;
