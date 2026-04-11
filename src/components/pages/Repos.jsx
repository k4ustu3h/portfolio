"use client";

import { useState, useEffect, useMemo } from "react";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Masonry from "@mui/lab/Masonry";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";
import Footer from "@/components/sections/Footer.jsx";
import NavBar from "@/components/surfaces/NavBar.jsx";
import RepoCard from "@/components/cards/RepoCard.jsx";
import RepoCardSkeleton from "@/components/feedback/RepoCardSkeleton.jsx";
import SortMenu from "@/components/menus/SortMenu.jsx";

export default function Repos() {
	const [repos, setRepos] = useState({ forkedRepos: [], sourceRepos: [] });
	const [sortBy, setSortBy] = useState("updated");

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
			default:
				return 1;
		}
	})();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.github.com/users/k4ustu3h/repos`,
			);
			const data = await response.json();

			setRepos({
				forkedRepos: data.filter((repo) => repo.fork),
				sourceRepos: data.filter((repo) => !repo.fork),
			});
		};

		fetchData();
	}, []);

	const sortRepos = (reposArray, criteria) => {
		const arr = [...reposArray];
		switch (criteria) {
			case "name":
				return arr.sort((a, b) => a.name.localeCompare(b.name));
			case "stars":
				return arr.sort(
					(a, b) => b.stargazers_count - a.stargazers_count,
				);
			case "updated":
			default:
				return arr.sort(
					(a, b) => new Date(b.updated_at) - new Date(a.updated_at),
				);
		}
	};

	const sortedSourceRepos = useMemo(
		() => sortRepos(repos.sourceRepos, sortBy),
		[repos.sourceRepos, sortBy],
	);
	const sortedForkedRepos = useMemo(
		() => sortRepos(repos.forkedRepos, sortBy),
		[repos.forkedRepos, sortBy],
	);

	return (
		<>
			<NavBar />
			<Container sx={{ color: "on.surface", py: 2 }}>
				<SortMenu sortBy={sortBy} onSortChange={setSortBy} />
				<Container>
					<Typography variant="h4" sx={{ py: 4 }}>
						Source Repositories
					</Typography>
					<Masonry columns={columnSize} spacing={4} sx={{ m: 0 }}>
						{sortedSourceRepos.length === 0 ? (
							<RepoCardSkeleton />
						) : (
							sortedSourceRepos.map((repo) => (
								<RepoCard key={repo.id} repo={repo} />
							))
						)}
					</Masonry>
				</Container>
				<Divider sx={{ py: 4 }} variant="middle" />
				<Container sx={{ py: 4 }}>
					<Typography variant="h4" sx={{ py: 4 }}>
						Forked Repositories
					</Typography>
					<Masonry columns={columnSize} spacing={4} sx={{ m: 0 }}>
						{sortedForkedRepos.length === 0 ? (
							<RepoCardSkeleton />
						) : (
							sortedForkedRepos.map((repo) => (
								<RepoCard key={repo.id} repo={repo} />
							))
						)}
					</Masonry>
				</Container>
			</Container>
			<Footer />
		</>
	);
}
