import React, { useState, useRef, useEffect } from "react";
function Login() {
	const [login, setLogin] = useState({
		login: false,
		name: "",
		password: "",
		user_id: "",
	});
	const logininfo = {
		login: false,
		name: "Wilfred Kessler",
		password: 123,
		user_id: 3,
	};

	// function handleLogin() {}

	useEffect(() => {
		fetch("http://localhost:9292/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const correctLogin = data.find((e) => {
					console.log(logininfo);
					if (e.name == "Wilfred Kessler" && e.password == 123) {
						return e;
					}
				});
				console.log("return", correctLogin);
				setLogin({
					login: true,
					name: correctLogin.name,
					password: correctLogin.password,
					user_id: correctLogin.id,
				});
			});
	}, []);
	console.log(login);
	return <p>{login.name}</p>;
}

export default Login;
