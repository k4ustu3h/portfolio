import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "@/styles/breakpoints.json";

export default function RepoCard({ repo }) {
	const screenSize = { xs: useMediaQuery(breakpoints.width.xs) };

	const isArchived = repo.archived;
	const nameShort = repo.name.length < 16;

	const archivedInBox = isArchived
		? screenSize.xs
			? nameShort
				? ""
				: "none"
			: ""
		: "none";

	const archivedNotInBox = isArchived
		? screenSize.xs
			? nameShort
				? "none"
				: ""
			: "none"
		: "none";

	const forkedOrNot = repo.forks_count
		? "icon-park-solid:fork"
		: "icon-park-outline:fork";
	const languageOrNot = repo.language ? "" : "none";
	const starredOrNot = repo.stargazers_count
		? "material-symbols:star-rounded"
		: "material-symbols:star-outline-rounded";

	const forksUrl = `${repo.html_url}/forks`;
	const stargazersUrl = `${repo.html_url}/stargazers`;

	return (
		<Card variant="elevated">
			<CardActionArea href={repo.html_url}>
				<CardContent>
					<Box
						alignItems="center"
						display="flex"
						justifyContent="space-between"
					>
						<Typography gutterBottom variant="h5">
							{repo.name}
						</Typography>
						<Icon
							fontSize={24}
							icon={"material-symbols:archive-outline-rounded"}
							style={{ display: archivedInBox, marginBottom: 8 }}
						/>
					</Box>
					<Icon
						fontSize={24}
						icon={"material-symbols:archive-outline-rounded"}
						style={{ display: archivedNotInBox }}
					/>
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
						icon="material-symbols:code-rounded"
						style={{ marginRight: 8 }}
					/>
					{repo.language}
				</Button>
			</CardActions>
		</Card>
	);
}
