import NotesContainer from "./NotesContainer";

function Homepage(props) {
	const { allNotes, generateDifficulty } = props;
	
	const recentNotes = allNotes.slice(-10)

	const formattedRecentNotes = recentNotes.map((recentNote) => {
		return (
			//NoteCard - with css stylings @: NotesContainer.js
			<NotesContainer
				key={recentNote.id}
				id={recentNote.id}
				title={recentNote.title}
				format={recentNote.format}
				difficulty={recentNote.difficulty}
				user_id={recentNote.user_id}
				user={recentNote.user}
				generateDifficulty={generateDifficulty}
			/>
		)
	})



	

	return (
		<div>
			<h1>Home Page</h1>
			<h3> THIS WILL HAVE INSTRUCTIONS </h3>
			<br/>
			<h4> Most Recent Note Uploads!</h4>
			<div className="row">
				{formattedRecentNotes}
			</div>
			




		</div>
	);

}
export default Homepage;
