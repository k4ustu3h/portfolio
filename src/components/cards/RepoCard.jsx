import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../styles/breakpoints.json";

export default function RepoCard({ repo }) {
	const screenSize = { xs: useMediaQuery(breakpoints.width.xs) };

	const archiveStatus = repo.archived ? "" : "none";
	const archivedInBox = repo.archived
		? screenSize.xs
			? repo.name < 10
				? ""
				: "none"
			: ""
		: "none";

	const archivedNotInBox = repo.archived
		? screenSize.xs
			? repo.name > 10
				? "none"
				: ""
			: "none"
		: "";

	const forkedOrNot = repo.forks_count
		? "icon-park-solid:fork"
		: "icon-park-outline:fork";
	const languageOrNot = repo.language ? "" : "none";
	const starredOrNot = repo.stargazers_count
		? "ic:round-star"
		: "ic:round-star-border";

	const forksUrl = `${repo.html_url}/forks`;
	const stargazersUrl = `${repo.html_url}/stargazers`;

	return (
		<Card variant="elevated">
			<CardActionArea href={repo.html_url}>
				<CardContent>
					<Box display="flex" justifyContent="space-between">
						<Typography gutterBottom variant="h5">
							{repo.name}
						</Typography>
						<Chip
							label="Archived"
							sx={{ display: archivedInBox }}
						/>
					</Box>
					<Chip label="Archived" sx={{ display: archivedNotInBox }} />
					<Typography variant="body2" color="text.secondary">
						{repo.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button href={stargazersUrl}>
					<Icon
						fontSize={18}
						icon={starredOrNot}
						style={{ marginRight: 8 }}
					/>
					{repo.stargazers_count}
				</Button>
				<Button href={forksUrl}>
					<Icon
						fontSize={18}
						icon={forkedOrNot}
						style={{ marginRight: 8 }}
					/>
					{repo.forks_count}
				</Button>
				<Button sx={{ display: languageOrNot }}>
					<Icon
						fontSize={18}
						icon="ic:round-code"
						style={{ marginRight: 8 }}
					/>
					{repo.language}
				</Button>
			</CardActions>
		</Card>
	);
}
