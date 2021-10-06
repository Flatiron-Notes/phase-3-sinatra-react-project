import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavBar() {
	// const [activeItem, setActiveItem] = useState("");
	// function handleItemClick(e) {
	// 	setActiveItem(e.target.name);
	// }
	return (
		<div>
			<Menu>
				<Link to="/">
					<Menu.Item
						name="home"
						// active={activeItem === "home"}
						// onClick={handleItemClick}
					>
						Home
					</Menu.Item>
				</Link>

				<Link to="/notes">
					<Menu.Item
						name="notes"
						// active={activeItem === "notes"}
						// onClick={handleItemClick}
					>
						Notes
					</Menu.Item>
				</Link>

				<Link to="/new_note">
					<Menu.Item
						name="new_note"
						// active={activeItem === "new_note"}
						// onClick={handleItemClick}
					>
						Add new note
					</Menu.Item>
				</Link>
			</Menu>
		</div>
	);
}

export default NavBar;
