import Comments from "./Comments";
import NoteTable from "./NoteTable";
// returns all notes

function Notes(props) {
	const {allNotes} = props
	console.log(allNotes)
	const singleNote = allNotes.map((note) => (

		<NoteTable
			key={note.id}
			id={note.id} 	
			title={note.title}
			format={note.format}
			difficulty={note.difficulty}
			content={note.content}
			user_id={note.user_id}
			/>
	))
	// const singleComment = allComments.map((comment) => (


	// ))

	//map through allNotes and get specific values

	return (
		<div>
			<h2 class="notes title">Notes Page</h2>
			<table class="ui celled padded table">
				<thead>
					<tr>
						<th>Created By</th>
						<th>Note Title</th>
						<th>Difficulty</th>
						<th>Format</th>
					</tr>
				</thead>
				<tbody>
					{singleNote}
				</tbody>
			</table>

			<Comments />
			{/* <AddNote />
			<AddComment /> */}
		</div>
	);
}

export default Notes;
