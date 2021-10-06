import React, { useState } from "react";
import { Link } from 'react-router-dom'

function NoteTable(props) {
    const {user_id, title, difficulty, format, id, content} = props

    const starLevel = difficulty
    const staricon = <i tabindex="0" aria-checked="false" aria-posinset="1" aria-setsize="3" class="active icon" role="radio"></i>
    const stars = starLevel * staricon

    return(
        <tr class="">
						<td class="single line"><h2 class="ui center aligned header">{user_id}</h2></td>
						<td class="single line">
                            <Link to={`/notes/${id}`}>
                                <h2> {title} </h2>
                            </Link>
                        </td>
						<td class="">
                            <div class="ui star rating" role="radiogroup" tabindex="-1">
                                Need to generate difficulty stars
                                {stars} x 
                                {staricon}
                                {staricon} {staricon} {staricon} {staricon}
                            </div>
                        </td>
						<td class="right aligned">{format}<br/><a href="#">18 studies</a></td>
		</tr>
    )
}
export default NoteTable;