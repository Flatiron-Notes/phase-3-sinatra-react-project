import React, {useState} from "react"
function Comments(props) {
    const {id, name, note_id, text, user_id, handleDelete} = props
      
    return (
        <div>
                <div class="comment">
                    {/* <div class="avatar">
                        <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                    </div> */}
                    <div class="content"><a class="author">{name}</a></div>
                    <br/>
                    <button onClick={(e) => handleDelete(id)}> X </button>
                    <div class="text">{text}</div>
                </div>
                <br/>
        </div>
    )
}

export default Comments;