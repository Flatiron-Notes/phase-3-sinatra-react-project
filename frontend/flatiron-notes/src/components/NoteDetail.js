import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Comments from "./Comments";


//import styled from 'styled-components';
import {
	Icon,
	Label,
	Container,
	Header,
	Grid,
	Divider,
	Button,
} from "semantic-ui-react";

function NoteDetail(props) {
	const { allNotes, setToggle, toggle, triggerBodyToggle } = props;
	const [isLoaded, setIsLoaded] = useState(false);
	const [loadedNote, setLoadedNote] = useState({});
	const [posterName, setPosterName] = useState("");
	const [noteComments, setNoteComments] = useState([]);
	const [formData, setFormData] = useState("");

	const { title, format, difficulty, user, comments, content, user_id } =
		loadedNote;

	const isLoggedInId = parseInt(localStorage.getItem("user_id"))
	const isLoggedInUsername = (localStorage.getItem("username"))
	const isLoggedIn = (localStorage.getItem("isLoggedIn"))

	const id = parseInt(useParams().id);
	let history = useHistory();

	useEffect(() => {
		fetch(`http://localhost:9292/notes/${id}`)
			.then((resp) => resp.json())
			.then((note) => {
				setLoadedNote(note);
				setIsLoaded(true);
				setPosterName(note.user.name);
				setNoteComments(note.comments);
			});
	}, [id, toggle]);

	const singleComment = noteComments.map((comment) => (
		<Comments
			key={comment.id}
			id={comment.id}
			note_id={comment.note_id}
			name={comment.name}
			text={comment.text}
			user_id={comment.user_id}
			handleDelete={handleDelete}
		/>
	));

	function handleSubmit(e) {
		e.preventDefault();
		fetch("http://localhost:9292/comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				note_id: id,
				user_id: isLoggedInId,
				name: isLoggedInUsername,
				text: formData,
			}),
		})
			.then((resp) => resp.json())
			.then(setToggle(!toggle));
		setFormData("");
	}
	function handleDeleteNote(id) {
		fetch(`http://localhost:9292/notes/${id}`, {
			method: "DELETE",
		})
		.then((resp) => resp.json())
		.then(setToggle(!toggle), history.push("/notes/"));
	}
	function deleteComment(commentId) {
		fetch(`http://localhost:9292/comments/${commentId}`, {
			method: "DELETE",
		});
		console.log("Delete");
	}

	function handleDelete(commentId) {
		deleteComment(commentId);
		setToggle(!toggle);
	}

	console.log(formData);

	return (
		<div className="detailed-note-obj">
			<div className="noteDetail">
				<Container>
					<Grid columns={2} relaxed="very">
						<Grid.Column>
							<Container textAlign="left">
								<Header as="h2">{title}</Header>
							</Container>
						</Grid.Column>

						<Grid.Column>
							<Container textAlign="right">
								<Label.Group>
									<Label color="yellow">
										Format: {format}
									</Label>
									<Label color="green">
										Difficulty: {difficulty}
									</Label>
									{(isLoggedInId) === user_id?
										<>
										<Label color="red" onClick={(e) => handleDeleteNote(id)} > Delete Note </Label>
										<Link to={`/notes/${id}/edit`}>
											<Label color="blue">Edit Note </Label>
										</Link>
										</> : null }
								</Label.Group>
							</Container>
						</Grid.Column>
					</Grid>
					<Divider />
					<Container textAlign="left">
						<div
							dangerouslySetInnerHTML={{
								__html: `${content}`,
							}}
						/>
					</Container>

					<div className="commentsCSS">
						<div className="ui comments commentsCSS">
							<h3 className="ui header">Comments</h3>
							{singleComment}
						</div>
					</div>
					{isLoggedIn?
					<div className="comment form">
						<form onSubmit={handleSubmit} className="ui reply form">
							<div className="form">
								<textarea
									onChange={(e) =>
										setFormData(e.target.value)
									}
									value={formData}
									type="input"
									rows="3"
								></textarea>
							</div>
							<br />
							<button class="ui icon primary left labeled button">
								<i aria-hidden="true" className="edit icon"></i>
								Add Comment
							</button>
						</form>
					</div> 
					: null}
				</Container>
			</div>
		</div>
	);
}

export default NoteDetail;
