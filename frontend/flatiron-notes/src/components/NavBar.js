import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";

function NavBar() {
	// const [activeItem, setActiveItem] = useState("");
	// function handleItemClick(e) {
	// 	setActiveItem(e.target.name);
	// }
  const [loggedInStatus, setLoggedInStatus] = useState(localStorage.getItem("isLoggedIn"))
  console.log(loggedInStatus)
  function retrieveLoggedInStatus(lis) {
	  setLoggedInStatus(lis)
  }

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

				{loggedInStatus?
					<Link to="/new_note">
						<Menu.Item
							name="new_note"
							// active={activeItem === "new_note"}
							// onClick={handleItemClick}
						>
							Add new note
						</Menu.Item>
					</Link> : null
				}
					<Menu.Item style={{float: "right"}}>
						<Login retrieveLoggedInStatus={retrieveLoggedInStatus}/>
					</Menu.Item>
			</Menu>			
		</div>
	);
}

export default NavBar;
