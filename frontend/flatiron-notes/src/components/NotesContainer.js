import React, { useState } from "react";
import { Link } from "react-router-dom";

function NotesContainer(props) {
	const { id, title, format, difficulty, user_id, user, generateDifficulty } =
		props;
	//States

	const starsNum = generateDifficulty(difficulty);

	return (
		<div className="column1">
			<Link to={`/notes/${id}`}>
			<span className="note-link-obj">
					<h2>{title}</h2>
				<h4>Format: {format}</h4>
				<p>Difficulty: {starsNum} </p>
				<h4>Uploaded by: {user.name}</h4>
			</span>
			</Link>
			<br />
		</div>
	);
}

export default NotesContainer;
