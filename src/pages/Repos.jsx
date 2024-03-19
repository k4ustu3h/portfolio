import React, { useState, useEffect } from "react";
import { Experimental_CssVarsProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { cssVars } from "../styles/cssVars.js";
import Footer from "../components/sections/Footer.jsx";
import NavBar from "../components/surfaces/NavBar.jsx";
import RepoCard from "../components/cards/RepoCard";
import RepoCardSkeleton from "../components/feedback/RepoCardSkeleton.jsx";

export default function Repos() {
	const [repos, setRepos] = useState({ forkedRepos: [], sourceRepos: [] });

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.github.com/users/k4ustu3h/repos`
			);
			const data = await response.json();

			setRepos({
				forkedRepos: data.filter((repo) => repo.fork),
				sourceRepos: data.filter((repo) => !repo.fork),
			});
		};

		fetchData();
	}, []);

	return (
		<Experimental_CssVarsProvider theme={cssVars} defaultMode="dark">
			<CssBaseline />
			<NavBar />
			<Container
				sx={{ alignContent: "center", color: "on.surface", p: 2 }}
			>
				<Container>
					<Typography py={4} variant="h4">
						Source Repositories
					</Typography>
					<Grid container spacing={4}>
						{repos.sourceRepos.length === 0 ? (
							<RepoCardSkeleton />
						) : (
							repos.sourceRepos.map((repo) => (
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
							))
						)}
					</Grid>
				</Container>
				<Divider sx={{ py: 4 }} variant="middle" />
				<Container sx={{ py: 4 }}>
					<Typography py={4} variant="h4">
						Forked Repositories
					</Typography>
					<Grid container spacing={4}>
						{repos.forkedRepos.length === 0 ? (
							<RepoCardSkeleton />
						) : (
							repos.forkedRepos.map((repo) => (
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
							))
						)}
					</Grid>
				</Container>
			</Container>
			<Footer />
		</Experimental_CssVarsProvider>
	);
}
