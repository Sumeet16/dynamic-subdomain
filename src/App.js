import { useEffect, useState } from "react";
import "./App.css";

const users = [
	{
		username: "bot_person",
		age: 15,
		hobbies: ["Football", "Cricket"],
	},
	{
		username: "demo_person",
		age: 23,
		hobbies: ["Reading", "Writing"],
	},
	{
		username: "sumeet",
		age: 23,
		hobbies: ["Reading", "Swimming" , "Writing"],
	},
	{
		username: "harsh",
		age: 23,
		hobbies: ["Reading", "Swimming" , "Swimming" , "Writing"],
	},
];

function App() {
	const [subdomain, setSubDomain] = useState(null);
	useEffect(() => {
		const host = window.location.host; // gets the full domain of the app

		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
      // localhost:3000, google.com
		if (arr.length > 0) setSubDomain(arr[0]);
    // sumeet.google.com, http, https
	}, []);
	const requestedUser = users.find((user) => user.username === subdomain);
	console.log(requestedUser);
	console.log(subdomain);
	return (
		<div className="app">
			{subdomain ? (
				requestedUser ? (
					<div>
						<h1>Username</h1>
						<h3>{requestedUser.username}</h3>
						<h1>Age</h1>
						<h3>{requestedUser.age}</h3>
						<h1>Hobbies</h1>
						<ul>
							{requestedUser.hobbies.map((hobby) => (
								<li key={hobby}>{hobby}</li>
							))}
						</ul>
					</div>
				) : (
					<h1>Not Found</h1>
				)
			) : (
				<div>
					{users.map((user) => (
						<div>
							<a
								key={user.username}
								href={
									window.location.protocol +
									"//" +
									user.username +
									"." +
									window.location.host
								}
							>
								{user.username}
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
