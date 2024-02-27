import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function RepoCard({ repo }) {
	const forksUrl = `${repo.html_url}/forks`;
	const stargazersUrl = `${repo.html_url}/stargazers`;
	return (
		<Card sx={{ maxWidth: 450 }} variant="elevated">
			<CardActionArea href={repo.html_url}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{repo.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{repo.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button href={stargazersUrl}>
					Stars: {repo.stargazers_count}
				</Button>
				<Button href={forksUrl}>Forks: {repo.forks_count}</Button>
				<Button>Language: {repo.language}</Button>
			</CardActions>
		</Card>
	);
}
