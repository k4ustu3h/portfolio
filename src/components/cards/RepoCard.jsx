import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function RepoCard({ repo }) {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");
	const buttonSize = isSmallScreen ? "small" : "";

	const archiveStatus = repo.archived ? "" : "none";
	const languageOrNot = repo.language === null ? "none" : "";

	const forksUrl = `${repo.html_url}/forks`;
	const stargazersUrl = `${repo.html_url}/stargazers`;

	return (
		<Card variant="elevated">
			<CardActionArea href={repo.html_url}>
				<CardContent>
					<Box display="flex" justifyContent="space-between">
						<Typography gutterBottom variant="h5" component="div">
							{repo.name}
						</Typography>
						<Chip
							label="Archived"
							sx={{ display: archiveStatus }}
						/>
					</Box>
					<Typography variant="body2" color="text.secondary">
						{repo.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button href={stargazersUrl} size={buttonSize}>
					Stars: {repo.stargazers_count}
				</Button>
				<Button href={forksUrl} size={buttonSize}>
					Forks: {repo.forks_count}
				</Button>
				<Button size={buttonSize} sx={{ display: languageOrNot }}>
					Language: {repo.language}
				</Button>
			</CardActions>
		</Card>
	);
}
