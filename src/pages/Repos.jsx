import React, { useState, useEffect } from "react";
import axios from "axios";
import { Experimental_CssVarsProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { cssVars } from "../styles/cssVars.js";
import NavBar from "../components/surfaces/NavBar.jsx";
import RepoCard from "../components/cards/RepoCard.jsx";

export default function Repos() {
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
			<NavBar />
			<Container sx={{ alignContent: "center", p: 2, mt: 16 }}>
				<Grid container spacing={4}>
					{repos.map((repo) => (
						<Grid key={repo.id} item xs={12} sm={8} md={6} lg={4}>
							<RepoCard repo={repo} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Experimental_CssVarsProvider>
	);
}
