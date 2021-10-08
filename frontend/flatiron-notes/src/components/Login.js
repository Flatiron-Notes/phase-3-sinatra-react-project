import React, { useState } from "react";
import { Button, Form, Image, Modal } from "semantic-ui-react";

function Login(props) {
	const { retrieveLoggedInStatus, setToggle, toggle, renderPage } = props;

	const [open, setOpen] = React.useState(false);
	const [usernameInput, setUserNameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const userName = localStorage.getItem("username");
	const [isLoggedIn, setIsLoggedIn] = useState(!!userName);

	function handleLogInAttempt() {
		fetch("http://localhost:9292/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const correctLogin = data.find((user) => {
					if (
						user.name === usernameInput &&
						user.password === passwordInput
					) {
						return user;
					}
				});
				console.log("return", correctLogin);

				if (correctLogin) {
					localStorage.setItem("username", correctLogin.name);
					localStorage.setItem("user_id", correctLogin.id);
					localStorage.setItem("isLoggedIn", true);
					retrieveLoggedInStatus(true);
					setIsLoggedIn(true);
				}
			});
	}

	function handleLogOut() {
		localStorage.removeItem("username");
		localStorage.removeItem("user_id");
		localStorage.removeItem("isLoggedIn");
		retrieveLoggedInStatus(false);
		setIsLoggedIn(false);
	}
	const newUser = {
		name: usernameInput,
		password: passwordInput,
	};

	function handlePost() {
		fetch("http://localhost:9292/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((resp) => resp.json())
			.then(console.log("Added this fuckin user"));
		renderPage();
	}
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button> {isLoggedIn ? "Log Out" : "Log In"} </Button>}
		>
			<Modal.Header>Log In to Flatiron Notes:</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png"
					wrapped
				/>
				<Modal.Description>
					{!isLoggedIn ? (
						<Form onSubmit={handleLogInAttempt}>
							<Form.Field>
								<label>First Name</label>
								<input
									onChange={(e) =>
										setUserNameInput(e.target.value)
									}
									placeholder="First Name"
								/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									onChange={(e) =>
										setPasswordInput(e.target.value)
									}
									placeholder="Password"
								/>
							</Form.Field>
							<Button type="submit">Log In</Button>
							<Button onClick={handlePost} type="submit">
								Sign Up
							</Button>
						</Form>
					) : null}
					<h4>
						{isLoggedIn
							? `You are now logged in as: ${userName}`
							: "You are not logged in!"}
					</h4>
					{isLoggedIn ? (
						<Button onClick={handleLogOut}> Log Out </Button>
					) : null}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button
					content="Close"
					labelPosition="right"
					onClick={() => setOpen(false)}
					positive
				/>
			</Modal.Actions>
		</Modal>
	);
}

export default Login;
