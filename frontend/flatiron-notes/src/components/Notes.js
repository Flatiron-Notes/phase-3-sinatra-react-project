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
			<h1>Notes Page</h1>
			<table class="ui celled padded table">
				<thead class="">
					<tr class="">
						<th class="single line">Created By</th>
						<th class="">Note Title</th>
						<th class="">Difficulty</th>
						<th class="">Format</th>
					</tr>
				</thead>
				<tbody class="">
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
