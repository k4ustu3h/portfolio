import React, { useState, useEffect } from "react";
import axios from "axios";
import { CssBaseline, Experimental_CssVarsProvider } from "@mui/material";
import MenuBar from "../components/surfaces/MenuBar.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Footer from "../components/sections/Footer.jsx";
import { cssVars } from "../styles/cssVars.js";

export default function Home() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchRepos = async () => {
			const response = await axios.get(
				"https://api.github.com/users/k4ustu3h/repos?per_page=100&sort=stars&include_all_commits=true",
				{
					params: {
						per_page: 100,
						sort: "stars",
						include_all_commits: true,
					},
				}
			);
			setRepos(response.data);
		};
		fetchRepos();
	}, []);
	return (
		<Experimental_CssVarsProvider theme={cssVars} defaultMode="dark">
			<CssBaseline />
			<MenuBar />
			<Hero />
			<About />
			<Projects />
			<Footer />
		</Experimental_CssVarsProvider>
	);
}
