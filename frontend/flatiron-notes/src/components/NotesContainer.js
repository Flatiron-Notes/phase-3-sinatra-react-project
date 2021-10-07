import React, { useState } from "react";
import { Link } from "react-router-dom";

function NotesContainer(props) {
	const { id, title, format, difficulty, user_id, user, generateDifficulty } =
		props;
	//States

	const starsNum = generateDifficulty(difficulty);

	return (
		<div className="column1">
			<span className="note-link-obj">
				<Link to={`/notes/${id}`}>
					<h2>{title}</h2>
				</Link>
				<h4>Format: {format}</h4>
				<p>Difficulty: {starsNum} </p>
				<h4>Uploaded by: {user.name}</h4>
			</span>
			<br />
		</div>
	);
}

export default NotesContainer;
