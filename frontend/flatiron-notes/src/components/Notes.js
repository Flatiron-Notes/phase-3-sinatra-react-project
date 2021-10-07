import NoteTable from "./NoteTable";
import React, {useState} from 'react'

function Notes(props) {
	const [search, setSearch] = useState("")
	const {allNotes, setAllNotes, generateDifficulty} = props

	const results = (allNotes.filter ((note) => search === "" ||
	note.title.toLowerCase().includes(search.toLowerCase()) || 
	note.user.name.toLowerCase().includes(search.toLowerCase())
	))

		const singleNote = results.map((note) => (
			<NoteTable
				key={note.id}
				id={note.id} 	
				title={note.title}
				format={note.format}
				difficulty={note.difficulty}
				content={note.content}
				user_id={note.user_id}
				generateDifficulty={generateDifficulty}
				user={note.user}
				/>
		))
	return (
		<div>
			<br/>
			<div width="fit-content" class="ui icon input">
				<input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Notes..."/>
				<i aria-hidden="true" class="search circular inverted link icon"></i>
			</div>
			<br/>
			<table class="ui celled padded table">
				<thead background="red">
					<tr>
						<th>User</th>
						<th>Note</th>
						<th>Difficulty</th>
						<th>Format</th>
					</tr>
				</thead>
				<tbody>
					{singleNote}
				</tbody>
			</table>
		</div>
	)
}

export default Notes;
