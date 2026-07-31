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

	const isArchived = repo.archived;
	const nameShort = repo.name.length < 16;

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

	const StarIcon = repo.stargazers_count > 0 ? StarFilled : Star;
	const languageOrNot = repo.language ? "" : "none";

	const forksUrl = `${repo.html_url}/forks`;
	const stargazersUrl = `${repo.html_url}/stargazers`;

	return (
		<M3eCard actionable href={repo.html_url} variant="elevated">
			<div slot="header">
				<M3eHeading
					className="rounded-heading"
					variant="headline"
					size="medium"
				>
					{repo.name}
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
				<div
					style={{
						alignItems: "center",
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "8px",
					}}
				></div>

				<Archive
					size={24}
					style={{
						display: archivedNotInBox,
						marginBottom: "8px",
					}}
				/>
				{repo.description}
			</div>
			<M3eButtonGroup end slot="actions">
				<M3eButton href={stargazersUrl} variant="tonal">
					<StarIcon size={24} slot="icon" />
					{repo.stargazers_count}
				</M3eButton>
				<M3eButton href={forksUrl} variant="tonal">
					<ForkRight size={24} slot="icon" />
					{repo.forks_count}
				</M3eButton>
				<M3eButton variant="tonal" style={{ display: languageOrNot }}>
					<Code size={24} slot="icon" />
					{repo.language}
				</M3eButton>
			</M3eButtonGroup>
		</M3eCard>
	);
}
