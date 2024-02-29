import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import MonochromeIcon from "../icons/MonochromeIcon";

function ForkIcons() {
	return (
		<SvgIcon fontSize="1em">
			<svg fill="currentColor">
				<path d="M11.17 5.31q-.32 0-.56.24L7.26 8.9a2.96 2.96 0 0 0-.88 1.85q-.1 1.07.4 1.97l-4.54 4.55q-.24.24-.24.56c0 .32.08.4.24.56q.24.24.56.24c.32 0 .4-.08.55-.24l4.55-4.55a3.25 3.25 0 0 0 1.98.41 2.96 2.96 0 0 0 1.85-.89l3.35-3.35a.76.76 0 0 0 .23-.55q0-.32-.23-.56a.76.76 0 0 0-.56-.24q-.32 0-.56.24l-3.35 3.35-.56-.56 3.35-3.35a.76.76 0 0 0 .24-.56q0-.32-.24-.56a.76.76 0 0 0-.56-.23q-.32 0-.55.23l-3.35 3.35-.56-.56 3.35-3.34a.76.76 0 0 0 .24-.56q0-.32-.24-.56a.76.76 0 0 0-.56-.24m-2.03 9.5-.1.77h.77l.1-.77zm2.47.96a1.58 1.58 0 0 0-1.11.44q-.22.21-.34.5a1.5 1.5 0 0 0-.12.6q0 .4.18.7.18.32.5.5t.73.18q.3 0 .58-.11.27-.1.47-.3.2-.2.3-.44l-.66-.31a.77.77 0 0 1-.26.34.7.7 0 0 1-.42.13.57.57 0 0 1-.45-.2.72.72 0 0 1-.17-.5q0-.22.09-.41a.8.8 0 0 1 .26-.32.7.7 0 0 1 .41-.11.58.58 0 0 1 .6.44l.68-.26a1.04 1.04 0 0 0-.25-.46 1.2 1.2 0 0 0-.44-.3 1.45 1.45 0 0 0-.58-.12m3.2 0a1.6 1.6 0 0 0-1.12.45 1.5 1.5 0 0 0-.46 1.1 1.35 1.35 0 0 0 .7 1.2q.32.18.72.18a1.62 1.62 0 0 0 1.12-.45 1.5 1.5 0 0 0 .47-1.1q0-.4-.2-.7a1.3 1.3 0 0 0-.5-.5 1.46 1.46 0 0 0-.72-.18m3.54 0q-.25 0-.45.1a.8.8 0 0 0-.35.27l.04-.3h-.71l-.4 2.8h.78l.22-1.64a.6.6 0 0 1 .2-.38.56.56 0 0 1 .4-.15q.22 0 .34.15.12.14.09.38l-.23 1.64h.77l.24-1.73q.05-.32-.06-.58a.85.85 0 0 0-.33-.4.95.95 0 0 0-.55-.16m2.53 0q-.32 0-.58.13a1 1 0 0 0-.4.32.83.83 0 0 0-.15.49q0 .28.17.48a.94.94 0 0 0 .47.3l.47.12a.6.6 0 0 1 .15.08q.09.04.09.16a.23.23 0 0 1-.1.18q-.1.08-.28.08a.65.65 0 0 1-.4-.13.77.77 0 0 1-.25-.34l-.58.24a.94.94 0 0 0 .23.43q.17.18.42.28.25.1.56.1.34 0 .6-.12a1 1 0 0 0 .4-.33q.15-.2.15-.47a.7.7 0 0 0-.17-.47 1 1 0 0 0-.49-.29l-.43-.13a.8.8 0 0 1-.18-.08q-.08-.05-.08-.16a.2.2 0 0 1 .1-.18.47.47 0 0 1 .26-.07.63.63 0 0 1 .34.1q.16.1.2.27l.59-.24a.95.95 0 0 0-.4-.55 1.23 1.23 0 0 0-.7-.2M9 15.83l-.39 2.8h.77l.4-2.8zm5.8.63q.3 0 .46.19a.7.7 0 0 1 .18.48.96.96 0 0 1-.1.44.8.8 0 0 1-.27.31.73.73 0 0 1-.4.12.6.6 0 0 1-.47-.2.7.7 0 0 1-.17-.48q0-.24.1-.44a.77.77 0 0 1 .27-.3.73.73 0 0 1 .4-.12" />
			</svg>
		</SvgIcon>
	);
}

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
										{index === 0 || index === 2 ? (
											<Icon icon={project.icon} />
										) : (
											<ForkIcons />
										)}
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
								{index === 0 || index === 2 ? (
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
