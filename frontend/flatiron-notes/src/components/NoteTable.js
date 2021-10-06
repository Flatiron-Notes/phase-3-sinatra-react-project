import React, { useState } from "react";
import { Link } from 'react-router-dom'


function NoteTable(props) {
    const {user_id, title, difficulty, format, id, generateDifficulty} = props

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
    
    const starsNum = generateDifficulty(difficulty)


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
                                {starsNum}
                            </div>
                        </td>
						<td>{format}<br/><a href="#">18 studies</a></td>
		</tr>
    )
}
export default NoteTable;