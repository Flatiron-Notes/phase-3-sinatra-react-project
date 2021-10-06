import React, { useState } from "react";
import { Link } from 'react-router-dom'

function NotesContainer(props) {
    const { id, title, format, difficulty, user_id, generateDifficulty } = props;
    //States
    const [ posterName, setPosterName ] = useState("")

    function fetchPosterName(userid) {
        fetch(`http://localhost:9292/users/${userid}`)
        .then(resp => resp.json())
        .then(poster => {
            setPosterName(poster.name)
        })   
    }

    fetchPosterName(user_id)
    
    const starsNum = generateDifficulty(difficulty)

    return (
        <div className="column">
            <span className="note-link-obj">
                <Link to={`/notes/${id}`}>
                    <h2>{title}</h2>
                </Link>
                    <h4>Format: {format}</h4>
                    <p>Difficulty: {starsNum} </p>
                    <h4>Uploaded by: {posterName ? `${posterName}` : "User Not Found"}</h4>
            </span>
            <br/>
        </div>
    )

}

export default NotesContainer;
