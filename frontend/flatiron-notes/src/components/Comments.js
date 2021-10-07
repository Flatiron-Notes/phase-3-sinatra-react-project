import React, { useState } from "react";
import { Divider, Container, Button } from "semantic-ui-react";
function Comments(props) {
	const { id, name, note_id, text, user_id, handleDelete } = props;

	return (
		<div>
			<Container textAlign="left">
				<Divider />
				<div class="comment">
					{/* <div class="avatar">
                        <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                    </div> */}
					<div class="content">
						<a class="author">{name}</a>
					</div>
					<br />

					<div class="text">{text}</div>
				</div>
				<br />
			</Container>

			<Button onClick={(e) => handleDelete(id)} color="grey">
				Delete Comment
			</Button>
		</div>
	);
}

export default Comments;
