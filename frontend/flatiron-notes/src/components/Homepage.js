import NotesContainer from "./NotesContainer";

function Homepage(props) {
	const { allNotes, generateDifficulty } = props;

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
			<br />
			<h1 class="homepage-title">Welcome to Flatiron Noteshare</h1>
			<p class="homepage-text"> If you have a notes file you would like to share, simply log in to the application and click on the 'Add A Note' tab.
			<br/> If you would like to see a full list of student notes uploaded, click on the 'Notes' tab above </p>
			<br />
			<h2>Recent Notes</h2>
			<br />
			<div className="row1">{formattedRecentNotes}</div>
		</div>
	);
}
export default Homepage;
