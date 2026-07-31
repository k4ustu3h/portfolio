"use client";

import { useState, useEffect, useMemo } from "react";

import { motion } from "motion/react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { M3eHeading } from "@m3e/react/heading";

import Footer from "@/components/layout/Footer.jsx";
import NavBar from "@/components/surfaces/NavBar.jsx";
import RepoCard from "@/components/cards/RepoCard.jsx";
import RepoCardSkeleton from "@/components/feedback/RepoCardSkeleton.jsx";
import SortMenu from "@/components/menus/SortMenu.jsx";
import SquigglyLine from "@/components/shapes/SquigglyLine";

export default function Repos() {
	const [repos, setRepos] = useState({ forkedRepos: [], sourceRepos: [] });
	const [isLoading, setIsLoading] = useState(true);

	const [sortSourceBy, setSortSourceBy] = useState("updated");
	const [sortForkedBy, setSortForkedBy] = useState("updated");

	const breakpoints = { 350: 1, 900: 2, 1200: 3 };

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
		() => sortRepos(repos.sourceRepos, sortSourceBy),
		[repos.sourceRepos, sortSourceBy],
	);
	const sortedForkedRepos = useMemo(
		() => sortRepos(repos.forkedRepos, sortForkedBy),
		[repos.forkedRepos, sortForkedBy],
	);

	return (
		<>
			<div
				style={{
					backgroundColor: "var(--md-sys-color-background)",
					paddingBottom: "64px",
					position: "relative",
					zIndex: 1,
				}}
			>
				<NavBar />
				<div
					style={{
						color: "var(--md-sys-color-on-surface)",
						margin: "0 auto",
						maxWidth: "1200px",
						padding: "16px 24px",
					}}
				>
					<div>
						<div
							style={{
								alignItems: "center",
								display: "flex",
								justifyContent: "space-between",
								padding: "32px 0",
							}}
						>
							<M3eHeading size="small" variant="display">
								Source Repositories
							</M3eHeading>
							<SortMenu
								id="source"
								sortBy={sortSourceBy}
								onSortChange={setSortSourceBy}
							/>
						</div>
						{isLoading ? (
							<div
								style={{
									display: "grid",
									gap: "32px",
									gridTemplateColumns:
										"repeat(auto-fill, minmax(320px, 1fr))",
								}}
							>
								{Array.from(new Array(6)).map((_, index) => (
									<RepoCardSkeleton
										key={`skeleton-source-${index}`}
									/>
								))}
							</div>
						) : (
							<ResponsiveMasonry
								columnsCountBreakPoints={breakpoints}
							>
								<Masonry gutter="32px">
									{sortedSourceRepos.map((repo) => (
										<motion.div
											key={repo.id}
											style={{ width: "100%" }}
											layoutId={repo.id.toString()}
											transition={{
												duration: 0.5,
												ease: [0.38, 1.21, 0.22, 1],
											}}
										>
											<RepoCard repo={repo} />
										</motion.div>
									))}
								</Masonry>
							</ResponsiveMasonry>
						)}
					</div>

					<hr
						style={{
							border: "none",
							borderTop:
								"1px solid var(--md-sys-color-outline-variant)",
							margin: "64px 32px",
						}}
					/>
					<div style={{ paddingBottom: "32px" }}>
						<div
							style={{
								alignItems: "center",
								display: "flex",
								justifyContent: "space-between",
								padding: "32px 0",
							}}
						>
							<M3eHeading size="small" variant="display">
								Forked Repositories
							</M3eHeading>
							<SortMenu
								id="forked"
								onSortChange={setSortForkedBy}
								sortBy={sortForkedBy}
							/>
						</div>

						{isLoading ? (
							<div
								style={{
									display: "grid",
									gap: "32px",
									gridTemplateColumns:
										"repeat(auto-fill, minmax(320px, 1fr))",
								}}
							>
								{Array.from(new Array(3)).map((_, index) => (
									<RepoCardSkeleton
										key={`skeleton-forked-${index}`}
									/>
								))}
							</div>
						) : (
							<ResponsiveMasonry
								columnsCountBreakPoints={breakpoints}
							>
								<Masonry gutter="32px">
									{sortedForkedRepos.map((repo) => (
										<motion.div
											key={repo.id}
											layoutId={`forked-${repo.id}`}
											style={{ width: "100%" }}
											transition={{
												duration: 0.5,
												ease: [0.38, 1.21, 0.22, 1],
											}}
										>
											<RepoCard repo={repo} />
										</motion.div>
									))}
								</Masonry>
							</ResponsiveMasonry>
						)}
					</div>
				</div>
				<div
					style={{
						position: "absolute",
						bottom: "-14px",
						left: 0,
						width: "100%",
					}}
				>
					<SquigglyLine />
				</div>
			</div>
			<Footer />
		</>
	);
}
