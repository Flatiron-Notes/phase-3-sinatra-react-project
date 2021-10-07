import React, { useState } from "react";
import { Link } from 'react-router-dom'



function NoteTable(props) {
    const {user_id, title, difficulty, format, id, user, generateDifficulty} = props
    
    const starsNum = generateDifficulty(difficulty)

    return(
        <tr class="">
						<td class="single line"><h4 class="ui center aligned header">{user.name}</h4></td>
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
                        <td>{format}<br/>
                        <Link to={`/notes/${id}`}>
                           <a href="#">View Note</a>
                        </Link>
                        </td>
						
		</tr>
    )
}
export default NoteTable;