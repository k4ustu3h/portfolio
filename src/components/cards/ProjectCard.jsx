import { Icon } from "@iconify/react";
import {
	Typography,
	Stack,
	Card,
	CardContent,
	CardActions,
	Button,
	Box,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import MonochromeIcon from "../surfaces/MonochromeIcon";

export default function ProjectCard() {
	const isSmallScreen = useMediaQuery("(max-width: 860px)");

	const projects = [
		{
			heading: "Food To Go",
			description:
				"A food delivery website created with ReactJS, with backend created with MongoDB, Express and NodeJS.",
			link: "https://foodtogo.tech",
			icon: "ic:twotone-delivery-dining",
		},
		{
			heading: "Forkicons",
			description:
				"Forkicons is a fork of Lawnicons, an icon pack developed by the Lawnchair team. Forkicons restores the original themed icons of apps and adds icons for apps that doesn't have one, instead of the outlined icons in the original Lawnicons.",
			link: "https://github.com/k4ustu3h/forkicons",
			icon: "mdi:silverware-fork",
		},
		{
			heading: "Just Another Material Theme",
			description:
				"A dark(er) theme inspired by Dracula but with Material colors for Visual Studio Code.",
			link: "https://marketplace.visualstudio.com/items?itemName=k4ustu3h.theme-jamt",
			icon: "mdi:microsoft-visual-studio-code",
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
							<CardContent sx={{ m: 2 }}>
								<Typography fontWeight="bold" variant="h5">
									{project.heading}
								</Typography>
								<Typography mt={2} variant="body2">
									{project.description}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									justifyContent: "space-between",
									m: 2,
								}}
							>
								<Button
									href={project.link}
									sx={{
										mt: isSmallScreen
											? 5
											: index === 0 || index === 2
											? 4
											: "",
									}}
									variant="filled"
								>
									Learn More
								</Button>
								<Box
									display={isSmallScreen ? "inherit" : "none"}
									height={84}
									width={84}
								>
									<MonochromeIcon
										backgroundColor={
											"surface.container.inverse"
										}
										color="primary.inverse"
										size={42}
									>
										<Icon icon={project.icon} />
									</MonochromeIcon>
								</Box>
							</CardActions>
						</Card>
						<Box
							display={isSmallScreen ? "none" : "inherit"}
							height={256}
							width={256}
						>
							<MonochromeIcon
								backgroundColor="background.default"
								color="primary.main"
								size={128}
							>
								<Icon icon={project.icon} />
							</MonochromeIcon>
						</Box>
					</Stack>
				);
			})}
		</>
	);
}
