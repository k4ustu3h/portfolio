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
import MonochromeIcon from "../surfaces/MonochromeIcon";

function ForkIcons() {
	return (
		<SvgIcon fontSize="1em">
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
				<path d="M11.17 5.312q-.321 0-.558.238l-3.35 3.349a2.96 2.96 0 0 0-.885 1.85q-.105 1.066.411 1.974l-4.55 4.55q-.237.237-.238.558c-.001.321.08.4.238.558q.237.238.558.238c.321 0 .4-.08.558-.238l4.55-4.55a3.25 3.25 0 0 0 1.975.411 2.96 2.96 0 0 0 1.85-.885l3.348-3.35a.76.76 0 0 0 .238-.558q0-.321-.238-.558a.76.76 0 0 0-.558-.238q-.321 0-.558.238l-3.35 3.35-.558-.559 3.35-3.35a.76.76 0 0 0 .237-.558q0-.321-.237-.558a.76.76 0 0 0-.558-.238q-.32 0-.559.238l-3.35 3.35-.557-.559 3.35-3.35a.76.76 0 0 0 .237-.557q0-.321-.238-.558a.76.76 0 0 0-.558-.238m-2.027 9.494-.108.77h.775l.107-.77zm2.467.959a1.58 1.58 0 0 0-1.113.446q-.216.21-.339.492a1.5 1.5 0 0 0-.123.606q0 .395.18.707.184.313.502.493.323.18.729.18.312 0 .584-.109.272-.107.467-.297.2-.195.297-.441l-.65-.313a.77.77 0 0 1-.268.339.7.7 0 0 1-.42.128.57.57 0 0 1-.451-.19.72.72 0 0 1-.17-.497q0-.226.092-.42a.8.8 0 0 1 .267-.314.7.7 0 0 1 .406-.118.58.58 0 0 1 .595.446l.681-.266a1.04 1.04 0 0 0-.246-.457 1.2 1.2 0 0 0-.44-.302 1.45 1.45 0 0 0-.58-.113m3.205 0a1.6 1.6 0 0 0-1.123.446 1.5 1.5 0 0 0-.467 1.098 1.35 1.35 0 0 0 .703 1.205q.322.174.723.174a1.62 1.62 0 0 0 1.118-.446 1.5 1.5 0 0 0 .467-1.098q0-.405-.19-.712a1.3 1.3 0 0 0-.508-.488 1.46 1.46 0 0 0-.723-.18m3.55 0q-.252 0-.457.087a.8.8 0 0 0-.344.282l.041-.308h-.718l-.39 2.8h.77l.225-1.635a.6.6 0 0 1 .2-.385.56.56 0 0 1 .39-.149q.226 0 .349.15.122.143.087.384l-.226 1.636h.77l.24-1.729q.046-.318-.06-.574a.85.85 0 0 0-.33-.405.95.95 0 0 0-.548-.154m2.528 0q-.324 0-.58.123a1 1 0 0 0-.405.328.83.83 0 0 0-.143.482q0 .282.164.487a.94.94 0 0 0 .476.288l.467.133a.6.6 0 0 1 .154.072q.082.046.082.159a.23.23 0 0 1-.097.185q-.093.076-.283.077a.65.65 0 0 1-.394-.124.77.77 0 0 1-.252-.343l-.58.236a.94.94 0 0 0 .226.43q.17.186.421.288.256.102.559.102.339 0 .595-.123a1 1 0 0 0 .405-.333q.15-.21.149-.472a.7.7 0 0 0-.17-.467 1 1 0 0 0-.482-.292l-.43-.133a.8.8 0 0 1-.18-.077q-.087-.052-.087-.164a.2.2 0 0 1 .097-.18.47.47 0 0 1 .262-.067.63.63 0 0 1 .349.103q.158.097.195.267l.59-.236a.95.95 0 0 0-.395-.55 1.23 1.23 0 0 0-.713-.199M9 15.826l-.39 2.8h.774l.39-2.8zm5.805.631q.288 0 .457.19a.7.7 0 0 1 .174.487.96.96 0 0 1-.097.436.8.8 0 0 1-.272.313.73.73 0 0 1-.405.113.6.6 0 0 1-.467-.19.7.7 0 0 1-.17-.487q0-.24.098-.436a.77.77 0 0 1 .272-.308.73.73 0 0 1 .41-.118" />
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
