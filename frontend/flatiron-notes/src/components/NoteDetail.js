import React, {useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import Comments from './Comments';
//import styled from 'styled-components';


function NoteDetail(props) {
    const {allNotes} = props;
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ loadedNote, setLoadedNote ] = useState({})
    const [ posterName, setPosterName ] = useState("")
    const [ noteComments, setNoteComments ] = useState([])
    const [newComment, setNewComment] =useState("")
    const [commentUser, setCommentUser] =useState("TESTUSER")
    const [formData, setFormData] = useState("")
    const [toggle, setToggle] = useState(false)

    const {  title, format, difficulty, user, comments, content, user_id } = loadedNote;


    const id = parseInt(useParams().id);
    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/notes/${id}`)
        .then((resp) => resp.json())
        .then(note => {
            //fetchComments(parseInt(id));
            setLoadedNote(note);
            setIsLoaded(true);
            setPosterName(note.user.name)
            setNoteComments(note.comments)
        })
    }, [toggle]);

    const singleComment = noteComments.map((comment) => (
            <Comments 
            id={comment.id}
            note_id={comment.note_id}
            name={comment.name}
            text={comment.text}
            user_id={comment.user_id}
            />
        ))

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9292/comments', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({     
            note_id: id,
            user_id: 1,
            name: "Peter",
            text: formData}),
            })
        .then(resp => resp.json())
        .then( setToggle(!toggle) )
        setFormData("")
    }


    console.log(formData)
return (
    <div className="detailed-note-obj">
        <h1>{title}</h1>
        <h3>Uploaded by: {posterName}</h3>
        <h4>Format: {format}</h4>
        <h4>Difficulty Rating: {difficulty} /10</h4>
        <br/>
        <p>{content}</p>
        <div class="ui comments">
            <br/>
            <h3 class="ui dividing header">Comments</h3>
            {singleComment}
        </div>
        <br/>
        <div class="comment form">
            <form onSubmit={handleSubmit} class="ui reply form">
                <div class="form">
                    <textarea onChange={(e) => setFormData(e.target.value)} value={formData} type="input" rows="3"></textarea>
                </div>
                <br/>
                <button class="ui icon primary left labeled button">
                    <i aria-hidden="true" class="edit icon"></i>
                    Add Comment
                </button>
            </form>
        </div>
        <br/>
    </div>
    )
}

export default NoteDetail