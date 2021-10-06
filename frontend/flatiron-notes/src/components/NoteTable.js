import React, { useState } from "react";
import { Link } from 'react-router-dom'

function NoteTable(props) {
    const {user_id, title, difficulty, format, id, content} = props

    // Conners code
    const [ posterName, setPosterName ] = useState("")

    function fetchPosterName(userid) {
        fetch(`http://localhost:9292/users/${userid}`)
        .then(resp => resp.json())
        .then(poster => {
            setPosterName(poster.name)
        })   
    }

    fetchPosterName(user_id)

    const starEmoji = <i tabindex="0" aria-checked="false" aria-posinset="1" aria-setsize="3" class="active icon" role="radio"></i>
    const difficultyNum = difficulty
    
    function generateDifficulty(difficultyNum) {
        let difficultyRating = "";
            for (let i = difficultyNum; i > 0; i -= 1) {
                difficultyRating += starEmoji;
            }
        return difficultyRating
    }



    return(
        <tr class="">
						<td class="single line"><h2 class="ui center aligned header">{posterName}</h2></td>
						<td class="single line">
                            <Link to={`/notes/${id}`}>
                                <h2> {title} </h2>
                            </Link>
                        </td>
						<td class="">
                            <div class="ui star rating" role="radiogroup" tabindex="-1">
                                Need to generate difficulty stars
                            </div>
                        </td>
						<td>{format}<br/><a href="#">18 studies</a></td>
		</tr>
    )
}
export default NoteTable;