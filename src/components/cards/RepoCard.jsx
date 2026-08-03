import useMediaQuery from "@/hooks/useMediaQuery";

import { M3eButton } from "@m3e/react/button";
import { M3eButtonGroup } from "@m3e/react/button-group";
import { M3eCard } from "@m3e/react/card";
import { M3eHeading } from "@m3e/react/heading";

import {
	Archive,
	Code,
	ForkRight,
	Star,
} from "@nine-thirty-five/material-symbols-react/rounded";
import { Star as StarFilled } from "@nine-thirty-five/material-symbols-react/rounded/filled";

import breakpoints from "@/styles/breakpoints.json";

export default function RepoCard({ repo }) {
	const xs = useMediaQuery(breakpoints.width.xs);

	const description = repo?.description || " ";
	const forksCount = repo?.forks_count || 0;
	const htmlUrl = repo?.html_url || "#";
	const isArchived = repo?.archived || false;
	const language = repo?.language || "Lang";
	const name = repo?.name || "Repository Name";
	const stargazersCount = repo?.stargazers_count || 0;

	const nameShort = name.length < 16;

	const archivedInBox = isArchived
		? xs
			? nameShort
				? ""
				: "none"
			: ""
		: "none";

	const archivedNotInBox = isArchived
		? xs
			? nameShort
				? "none"
				: ""
			: "none"
		: "none";

	const StarIcon = stargazersCount > 0 ? StarFilled : Star;

	const languageOrNot = language !== "Lang" && language !== "" ? "" : "none";

	const forksUrl = `${htmlUrl}/forks`;
	const stargazersUrl = `${htmlUrl}/stargazers`;

	return (
		<M3eCard actionable href={htmlUrl} variant="elevated">
			<div slot="header">
				<M3eHeading
					className="rounded-heading"
					variant="headline"
					size="medium"
				>
					{name}
				</M3eHeading>
				<div style={{ flexGrow: 1 }} />
				<Archive
					size={24}
					style={{
						display: archivedInBox,
					}}
				/>
			</div>
			<div slot="content">
				<Archive
					size={24}
					style={{
						display: archivedNotInBox,
						marginBottom: "8px",
					}}
				/>
				{description}
			</div>
			<M3eButtonGroup end slot="actions">
				<M3eButton href={stargazersUrl} variant="tonal">
					<StarIcon size={24} slot="icon" />
					{stargazersCount}
				</M3eButton>
				<M3eButton href={forksUrl} variant="tonal">
					<ForkRight size={24} slot="icon" />
					{forksCount}
				</M3eButton>
				<M3eButton variant="tonal" style={{ display: languageOrNot }}>
					<Code size={24} slot="icon" />
					{language}
				</M3eButton>
			</M3eButtonGroup>
		</M3eCard>
	);
}
