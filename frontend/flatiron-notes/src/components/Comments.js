import React, { useState } from "react";
import { Divider, Container, Button } from "semantic-ui-react";
function Comments(props) {
	const { id, name, note_id, text, user_id, handleDelete } = props;

	const isLoggedInUsername = localStorage.getItem("username")

	return (
		<div>
			<Container textAlign="left">
				<Divider />
				<div class="comment">
					{/* <div class="avatar">
                        <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                    </div> */}
					<div class="content">
						<h4 class="author">{name}</h4>
					</div>
					<br />

					<div class="text">{text}</div>
				</div>
				<br />
			</Container>
			{isLoggedInUsername === name?
				<Button onClick={(e) => handleDelete(id)} color="grey">
					Delete Comment
				</Button> : null
			}
		</div>
	);
}

export default Comments;
