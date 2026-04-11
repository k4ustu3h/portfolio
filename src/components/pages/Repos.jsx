"use client";

import { useState, useEffect, useMemo } from "react";

import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Masonry from "@mui/lab/Masonry";
import Typography from "@mui/material/Typography";

import Footer from "@/components/sections/Footer.jsx";
import NavBar from "@/components/surfaces/NavBar.jsx";
import RepoCard from "@/components/cards/RepoCard.jsx";
import RepoCardSkeleton from "@/components/feedback/RepoCardSkeleton.jsx";
import SortMenu from "@/components/menus/SortMenu.jsx";

export default function Repos() {
	const [repos, setRepos] = useState({ forkedRepos: [], sourceRepos: [] });
	const [sortBy, setSortBy] = useState("updated");
	const [isLoading, setIsLoading] = useState(true);
	const responsiveColumns = { xs: 1, md: 2, lg: 3 };

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
			setIsLoading(false);
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
					{isLoading ? (
						<Box
							sx={{
								display: "grid",
								gap: 4,
								gridTemplateColumns: {
									xs: "1fr",
									md: "repeat(2, 1fr)",
									lg: "repeat(3, 1fr)",
								},
							}}
						>
							{Array.from(new Array(6)).map((_, index) => (
								<RepoCardSkeleton
									key={`skeleton-source-${index}`}
								/>
							))}
						</Box>
					) : (
						<Masonry
							columns={responsiveColumns}
							spacing={4}
							sx={{ m: 0 }}
						>
							{sortedSourceRepos.map((repo) => (
								<motion.div
									key={repo.id}
									layout
									transition={{
										duration: 0.5,
										ease: [0.38, 1.21, 0.22, 1],
									}}
								>
									<RepoCard repo={repo} />
								</motion.div>
							))}
						</Masonry>
					)}
				</Container>
				<Divider sx={{ py: 4 }} variant="middle" />
				<Container sx={{ py: 4 }}>
					<Typography variant="h4" sx={{ py: 4 }}>
						Forked Repositories
					</Typography>
					{isLoading ? (
						<Box
							sx={{
								display: "grid",
								gap: 4,
								gridTemplateColumns: {
									xs: "1fr",
									md: "repeat(2, 1fr)",
									lg: "repeat(3, 1fr)",
								},
							}}
						>
							{Array.from(new Array(3)).map((_, index) => (
								<RepoCardSkeleton
									key={`skeleton-forked-${index}`}
								/>
							))}
						</Box>
					) : (
						<Masonry
							columns={responsiveColumns}
							spacing={4}
							sx={{ m: 0 }}
						>
							{sortedForkedRepos.map((repo) => (
								<motion.div
									key={repo.id}
									layout
									transition={{
										duration: 0.5,
										ease: [0.38, 1.21, 0.22, 1],
									}}
								>
									<RepoCard repo={repo} />
								</motion.div>
							))}
						</Masonry>
					)}
				</Container>
			</Container>
			<Footer />
		</>
	);
}
