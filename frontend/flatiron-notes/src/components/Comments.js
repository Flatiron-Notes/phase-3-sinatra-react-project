import React, {useState} from "react"
function Comments(props) {
    const {id, name, note_id, text, user_id} = props
    const [toggle, setToggle] = useState(false)

    function handleDelete(id) {
        // delete backend
        fetch(`http://localhost:9292/comments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }})
        .then(
        setToggle(!toggle),
        console.log("deleting...")
        )
    }
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