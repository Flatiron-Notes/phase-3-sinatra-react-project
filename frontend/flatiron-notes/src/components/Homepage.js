import NotesContainer from "./NotesContainer";

function Homepage(props) {
	const { allNotes, fetching, generateDifficulty } = props;

	const recentNotes = allNotes.slice(-10);
	console.log(allNotes);
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
		);
	});

	return (
		<div>
			<h1>Home Page</h1>
			<h4> Welcome to the Flatiron School Noteshare! If you have a notes file you would like to share, simply log in to the application and click on the 'Add A Note' tab. </h4>
			<h4> If you would like to see a full list of student notes uploaded, click on the 'Notes' tab above</h4>
			<br />
			<h4> Most Recent Note Uploads!</h4>
			<div className="row1">{formattedRecentNotes}</div>
		</div>
	);
}
export default Homepage;
