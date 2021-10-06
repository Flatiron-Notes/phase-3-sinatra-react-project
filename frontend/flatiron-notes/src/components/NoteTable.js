import React, { useState } from "react";
import { Link } from 'react-router-dom'


function NoteTable(props) {
    const {user_id, title, difficulty, format, id, user, generateDifficulty} = props
    
    const starsNum = generateDifficulty(difficulty)


    return(
        <tr class="">
						<td class="single line"><h2 class="ui center aligned header">{user.name}</h2></td>
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