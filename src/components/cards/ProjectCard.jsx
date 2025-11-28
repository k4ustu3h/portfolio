import { Icon } from "@iconify/react";
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

export default function ProjectCard() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);
	const isSmall = sm || xs;

	return (
		<>
			{projects.map((project, index) => {
				const icon =
					index === 3 ? (
						<IntelliHire />
					) : (
						<Icon icon={project.icon} />
					);
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
						justifyContent="space-around"
						key={project.heading}
					>
						<Card sx={{ width: 512 }} variant="elevated">
							<CardContent>
								<Box display="flex">
									<Box>
										<Typography variant="h5">
											{project.heading}
										</Typography>
										<Typography mt={2} variant="body2">
											{project.description}
										</Typography>
									</Box>
									<Box
										display={isSmall ? "inherit" : "none"}
										fontSize={48}
										p={1}
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
							display={isSmall ? "none" : "inherit"}
							height={256}
							width={256}
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
