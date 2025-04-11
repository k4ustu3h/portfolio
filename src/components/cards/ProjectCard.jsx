import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../styles/breakpoints.json";
import ForkIcons from "../../assets/svgs/ForkIcons";
import MonochromeIcon from "../icons/MonochromeIcon";

export default function ProjectCard() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);

	const projects = [
		{
			heading: "DeDupe",
			description: "File deduplication Android app.",
			icon: "material-symbols:file-copy-off-outline",

			primaryAction: {
				label: "Download",
				link: "https://github.com/k4ustu3h/DeDupe/releases/latest",
			},
			secondaryAction: {
				link: "https://github.com/k4ustu3h/DeDupe",
			},
		},
		{
			heading: "Food To Go",
			description:
				"A food delivery website created with ReactJS, with backend created with MongoDB, Express and NodeJS.",
			icon: "ic:twotone-delivery-dining",
			primaryAction: {
				label: "Visit website",
				link: "https://foodtogo.vercel.app/",
			},
			secondaryAction: {
				link: "https://github.com/k4ustu3h/foodtogo",
			},
		},
		{
			heading: "Forkicons",
			description:
				"Forkicons is a fork of Lawnicons, an icon pack developed by the Lawnchair team. Forkicons restores the original themed icons of apps and adds icons for apps that doesn't have one, instead of the outlined icons in the original Lawnicons.",
			primaryAction: {
				label: "Download",
				link: "https://github.com/k4ustu3h/forkicons/releases/latest",
			},
			secondaryAction: {
				link: "https://github.com/k4ustu3h/forkicons",
			},
		},
		{
			heading: "Just Another Material Theme",
			description:
				"A dark(er) theme inspired by Dracula but with Material colors for Visual Studio Code.",
			icon: "mdi:microsoft-visual-studio-code",

			primaryAction: {
				label: "Install",
				link: "https://marketplace.visualstudio.com/items?itemName=k4ustu3h.theme-jamt",
			},
			secondaryAction: {
				link: "https://github.com/k4ustu3h/jamt-vscode",
			},
		},
	];
	return (
		<>
			{projects.map((project, index) => {
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
										<Typography
											fontWeight="bold"
											variant="h5"
										>
											{project.heading}
										</Typography>
										<Typography mt={2} variant="body2">
											{project.description}
										</Typography>
									</Box>
									<Box
										display={sm || xs ? "inherit" : "none"}
										fontSize={48}
										p={1}
									>
										{index === 0 ||
										index === 1 ||
										index === 3 ? (
											<Icon icon={project.icon} />
										) : (
											<ForkIcons />
										)}
									</Box>
								</Box>
							</CardContent>
							<CardActions
								sx={{
									m: 2,
								}}
							>
								<Button
									href={project.secondaryAction.link}
									sx={{
										mt:
											sm || xs
												? 5
												: index === 0 ||
													  index === 1 ||
													  index === 3
													? 4
													: "",
									}}
									variant="outlined"
									target="_blank"
								>
									Source Code
								</Button>
								<Button
									href={project.primaryAction.link}
									sx={{
										mt:
											sm || xs
												? 5
												: index === 0 ||
													  index === 1 ||
													  index === 3
													? 4
													: "",
									}}
									variant="filled"
									target="_blank"
								>
									{project.primaryAction.label}
								</Button>
							</CardActions>
						</Card>
						<Box
							display={sm || xs ? "none" : "inherit"}
							height={256}
							width={256}
						>
							<MonochromeIcon
								backgroundColor="background.default"
								color="primary.main"
								size={128}
							>
								{index === 0 || index === 1 || index === 3 ? (
									<Icon icon={project.icon} />
								) : (
									<ForkIcons />
								)}
							</MonochromeIcon>
						</Box>
					</Stack>
				);
			})}
		</>
	);
}
