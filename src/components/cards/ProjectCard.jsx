import { FileCopyOff } from "@nine-thirty-five/material-symbols-react/outlined";
import { Icon } from "@iconify/react";
import { Interests } from "@nine-thirty-five/material-symbols-react/outlined/filled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";
import IntelliHire from "@/assets/svgs/IntelliHire";
import MonochromeIcon from "@/components/icons/MonochromeIcon";
import projects from "@/data/projects.json";

const iconMap = {
	dedupe: FileCopyOff,
	forkicons: Interests,
};

export default function ProjectCard() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);
	const isSmall = sm || xs;

	return (
		<>
			{projects.map((project, index) => {
				let icon;

				if (index === 3) {
					icon = <IntelliHire />;
				} else if (project.icon && iconMap[project.icon]) {
					const MaterialSymbolIcon = iconMap[project.icon];
					icon = <MaterialSymbolIcon height="1em" width="1em" />;
				} else {
					icon = <Icon icon={project.icon} />;
				}

				const mt = isSmall
					? 5
					: index === 1 || index === 4
						? 4
						: index === 0 || index === 3
							? 6.5
							: "";

				return (
					<Stack
						direction="row"
						key={project.heading}
						sx={{ justifyContent: "space-around" }}
					>
						<Card sx={{ width: 512 }} variant="elevated">
							<CardContent>
								<Box sx={{ display: "flex" }}>
									<Box>
										<Typography variant="h5">
											{project.heading}
										</Typography>
										<Typography
											sx={{ mt: 2 }}
											variant="body2"
										>
											{project.description}
										</Typography>
									</Box>
									<Box
										sx={{
											display: isSmall
												? "inherit"
												: "none",
											fontSize: 48,
											p: 1,
										}}
									>
										{icon}
									</Box>
								</Box>
							</CardContent>
							<CardActions sx={{ m: 2 }}>
								<Button
									href={project.secondaryAction.link}
									sx={{ mt: mt }}
									variant="outlined"
									target="_blank"
								>
									Source Code
								</Button>
								<Button
									href={project.primaryAction.link}
									sx={{ mt: mt }}
									variant="filledSmall"
									target="_blank"
								>
									{project.primaryAction.label}
								</Button>
							</CardActions>
						</Card>
						<Box
							sx={{
								display: isSmall ? "none" : "inherit",
								height: 256,
								width: 256,
							}}
						>
							<MonochromeIcon
								backgroundColor="background.default"
								color="primary.main"
								size={128}
							>
								{icon}
							</MonochromeIcon>
						</Box>
					</Stack>
				);
			})}
		</>
	);
}
