"use client";

import { useState } from "react";

import { motion } from "motion/react";

import Masonry from "react-masonry-css";

import { M3eDivider } from "@m3e/react/divider";
import { M3eHeading } from "@m3e/react/heading";
import { M3eSkeleton } from "@m3e/react/skeleton";

import useGithubRepos from "@/hooks/useGithubRepos";

import Footer from "@/components/layout/Footer.jsx";
import NavBar from "@/components/surfaces/NavBar.jsx";
import RepoCard from "@/components/cards/RepoCard.jsx";
import SortMenu from "@/components/menus/SortMenu.jsx";
import SquigglyLine from "@/components/shapes/SquigglyLine";

export default function Repos() {
	const { repos, isLoading } = useGithubRepos("k4ustu3h");

	const [sortSourceBy, setSortSourceBy] = useState("updated");
	const [sortForkedBy, setSortForkedBy] = useState("updated");

	const breakpointColumnsObj = {
		default: 3,
		1200: 3,
		900: 2,
		600: 1,
	};

	const sortRepos = (reposArray, criteria) => {
		if (!reposArray) return [];

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

	const sortedSourceRepos = sortRepos(repos.sourceRepos, sortSourceBy);
	const sortedForkedRepos = sortRepos(repos.forkedRepos, sortForkedBy);

	const displaySourceRepos = isLoading
		? Array.from(new Array(6)).map((_, index) => ({
				id: `skeleton-source-${index}`,
			}))
		: sortedSourceRepos;

	const displayForkedRepos = isLoading
		? Array.from(new Array(6)).map((_, index) => ({
				id: `skeleton-forked-${index}`,
			}))
		: sortedForkedRepos;

	return (
		<>
			<div
				style={{
					backgroundColor: "var(--md-sys-color-background)",
					paddingBottom: "32px",
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
						<Masonry
							breakpointCols={breakpointColumnsObj}
							className="masonry-grid"
							columnClassName="masonry-grid-column"
						>
							{displaySourceRepos.map((repo) => (
								<motion.div
									key={repo.id}
									layoutId={repo.id.toString()}
									transition={{
										duration: 0.5,
										ease: [0.38, 1.21, 0.22, 1],
									}}
								>
									<M3eSkeleton loaded={!isLoading}>
										<RepoCard repo={repo} />
									</M3eSkeleton>
								</motion.div>
							))}
						</Masonry>
					</div>
					<M3eDivider style={{ marginBlock: "64px" }} />
					<div>
						<div
							style={{
								alignItems: "center",
								display: "flex",
								justifyContent: "space-between",
								paddingBlock: "32px",
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
						<Masonry
							breakpointCols={breakpointColumnsObj}
							className="masonry-grid"
							columnClassName="masonry-grid-column"
						>
							{displayForkedRepos.map((repo) => (
								<motion.div
									key={repo.id}
									layoutId={repo.id.toString()}
									transition={{
										duration: 0.5,
										ease: [0.38, 1.21, 0.22, 1],
									}}
								>
									<M3eSkeleton loaded={!isLoading}>
										<RepoCard repo={repo} />
									</M3eSkeleton>
								</motion.div>
							))}
						</Masonry>
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
