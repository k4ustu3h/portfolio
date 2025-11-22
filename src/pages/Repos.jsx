"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Masonry from "@mui/lab/Masonry";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { cssVars } from "../styles/cssVars";
import breakpoints from "../styles/breakpoints.json";
import Footer from "../components/sections/Footer.jsx";
import NavBar from "../components/surfaces/NavBar.jsx";
import RepoCard from "../components/cards/RepoCard.jsx";
import RepoCardSkeleton from "../components/feedback/RepoCardSkeleton.jsx";

export default function Repos() {
	const [repos, setRepos] = useState({ forkedRepos: [], sourceRepos: [] });

	const screenSize = {
		xs: useMediaQuery(breakpoints.width.xs),
		sm: useMediaQuery(breakpoints.width.sm),
		md: useMediaQuery(breakpoints.width.md),
		lg: useMediaQuery(breakpoints.width.lg),
		xl: useMediaQuery(breakpoints.width.xl),
	};

	const columnSize = (() => {
		switch (true) {
			case screenSize.xs || screenSize.sm:
				return 1;
			case screenSize.md:
				return 2;
			case screenSize.lg || screenSize.xl:
				return 3;
		}
	})();

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

	const [theme, setTheme] = useState(null);

	useEffect(() => {
		setTheme(cssVars);
	}, []);

	if (!theme) return null;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar />
			<Container sx={{ color: "on.surface", py: 2 }}>
				<Container>
					<Typography py={4} variant="h4">
						Source Repositories
					</Typography>
					<Masonry columns={columnSize} spacing={4} sx={{ m: 0 }}>
						{repos.sourceRepos.length === 0 ? (
							<RepoCardSkeleton />
						) : (
							repos.sourceRepos.map((repo) => (
								<RepoCard key={repo.id} repo={repo} />
							))
						)}
					</Masonry>
				</Container>
				<Divider sx={{ py: 4 }} variant="middle" />
				<Container sx={{ py: 4 }}>
					<Typography py={4} variant="h4">
						Forked Repositories
					</Typography>
					<Masonry columns={columnSize} spacing={4} sx={{ m: 0 }}>
						{repos.forkedRepos.length === 0 ? (
							<RepoCardSkeleton />
						) : (
							repos.forkedRepos.map((repo) => (
								<RepoCard key={repo.id} repo={repo} />
							))
						)}
					</Masonry>
				</Container>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
