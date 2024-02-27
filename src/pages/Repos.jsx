import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "../components/cards/RepoCard.jsx";
import {
	Box,
	Container,
	CssBaseline,
	Experimental_CssVarsProvider,
	Grid,
	Typography,
} from "@mui/material";
import MenuBar from "../components/surfaces/MenuBar.jsx";
import { cssVars } from "../styles/cssVars.js";

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
			<MenuBar />
			<Box sx={{ mt: 8 }}>
				<Typography align="center" py={2} variant="h2">
					Repos
				</Typography>
				<Container sx={{ alignContent: "center", p: 2 }}>
					<Grid container spacing={4}>
						{repos.map((repo) => (
							<Grid
								key={repo.id}
								item
								xs={12}
								sm={8}
								md={6}
								lg={4}
							>
								<RepoCard repo={repo} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</Experimental_CssVarsProvider>
	);
}
