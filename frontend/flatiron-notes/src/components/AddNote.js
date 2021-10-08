import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Input, Select, Container } from "semantic-ui-react";
//////////////////////////
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from 'react-router-dom';

function AddNote({ setToggle, toggle, fetching }) {
	let history = useHistory();
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		format: "",
		difficulty: "",
		user_id: 1,
	});

	const optionsDifficulty = [
		{ key: "1", text: "1", value: 1 },
		{ key: "2", text: "2", value: 2 },
		{ key: "3", text: "3", value: 3 },
		{ key: "4", text: "4", value: 4 },
		{ key: "5", text: "5", value: 5 },
	];

	const optionsFormat = [
		{ key: "l", text: "Lecture", value: "Lecture" },
		{ key: "t", text: "Test", value: "Test" },
		{ key: "r", text: "Reading", value: "Reading" },
		{ key: "o", text: "Online Resource", value: "Online Resource" },
		{ key: "s", text: "Study Group", value: "Study Group" },
	];

	function handleChange(e, { name, value }) {
		if (name === "title" || name === "format" || name === "difficulty") {
			const key = name;
			const value1 = value;
			setFormData({
				...formData,
				[key]: value1,
			});
			console.log(key, value1);
		} else {
			setFormData({
				...formData,
				content: e,
			});
		}
	}
	console.log(formData);

	const editorRef = useRef(null);
	const handleSubmit = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		};
		fetch("http://localhost:9292/notes", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setFormData({
					title: "",
					content: "",
					format: "",
					difficulty: "",
					user_id: 0,
				})
			}, 
			fetching(), history.push(`/notes/`)
	);
	};

	return (
		<div class="add_note">
			<Container>
				<Form>
					<Form.Group widths="equal">
						<Form.Field
							control={Input}
							label="Title"
							placeholder="Title"
							onChange={handleChange}
							name="title"
							value={formData.title}
						/>
						<Form.Field
							control={Select}
							label="Difficulty"
							options={optionsDifficulty}
							placeholder="Difficulty"
							onChange={handleChange}
							name="difficulty"
							value={formData.difficulty}
						/>

						<Form.Field
							control={Select}
							label="Format"
							options={optionsFormat}
							placeholder="Format"
							onChange={handleChange}
							name="format"
							value={formData.format}
						/>
					</Form.Group>

					<Form.Field>
						<CKEditor
							editor={ClassicEditor}
							data=""
							onReady={(editor) => {
								// You can store the "editor" and use when it is needed.
								console.log("Editor is ready to use!", editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log({ event, editor, data });
								handleChange(data, { data, data });
							}}
							onBlur={(event, editor) => {
								console.log("Blur.", editor);
							}}
							onFocus={(event, editor) => {
								console.log("Focus.", editor);
							}}
						/>
					</Form.Field>
					<Form.Field control={Button} onClick={handleSubmit}>
						Submit
					</Form.Field>
				</Form>
			</Container>
		</div>
	);
}

export default AddNote;
