import {
	Archive,
	Code,
	ForkRight,
	Star,
} from "@nine-thirty-five/material-symbols-react/rounded";
import { Star as StarFilled } from "@nine-thirty-five/material-symbols-react/rounded/filled";
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

	const StarIcon = repo.stargazers_count > 0 ? StarFilled : Star;
	const languageOrNot = repo.language ? "" : "none";

	const forksUrl = `${repo.html_url}/forks`;
	const stargazersUrl = `${repo.html_url}/stargazers`;

	return (
		<Card variant="elevated">
			<CardActionArea href={repo.html_url}>
				<CardContent>
					<Box
						sx={{
							alignItems: "center",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography gutterBottom variant="h5">
							{repo.name}
						</Typography>
						<Archive
							style={{
								display: archivedInBox,
								marginBottom: 8,
								fontSize: 24,
							}}
						/>
					</Box>
					<Archive
						style={{ display: archivedNotInBox, fontSize: 24 }}
					/>
					<Typography
						variant="body2"
						sx={{
							color: "text.secondary",
						}}
					>
						{repo.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button href={stargazersUrl}>
					<StarIcon style={{ marginRight: 8, fontSize: 18 }} />
					{repo.stargazers_count}
				</Button>
				<Button href={forksUrl}>
					<ForkRight style={{ marginRight: 8, fontSize: 18 }} />
					{repo.forks_count}
				</Button>
				<Button sx={{ display: languageOrNot }}>
					<Code style={{ marginRight: 8, fontSize: 18 }} />
					{repo.language}
				</Button>
			</CardActions>
		</Card>
	);
}
