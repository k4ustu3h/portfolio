import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import MonochromeIcon from "../icons/MonochromeIcon";
import SkillButton from "../buttons/SkillButton";

export default function About() {
	const isSmallScreen = useMediaQuery("(max-width: 860px)");
	const fontSize = isSmallScreen ? "12vw" : "8vw";
	const iconSize = isSmallScreen ? "24vw" : "16vw";

	return (
		<Grid
			container
			id="about"
			p={isSmallScreen ? 4 : 8}
			sx={{
				bgcolor: "primary.container",
				height: isSmallScreen ? "inherit" : "100vh",
			}}
		>
			<Grid item md={6}>
				<Box height={iconSize} width={iconSize}>
					<MonochromeIcon
						backgroundColor="background.default"
						color="primary.main"
						size={fontSize}
					>
						<Typography fontSize="inherit" variant="logo">
							kl.
						</Typography>
					</MonochromeIcon>
				</Box>
			</Grid>
			<Grid item md={6} mt={4}>
				<Typography align="left" my={2} variant="h3">
					About
				</Typography>
				<Typography>
					Hello there, I’m Kaustubh Ladiya. I’m a developer from
					Jabalpur, India. I have a passion for creating innovative
					apps and designing intuitive components and layouts.
				</Typography>
			</Grid>
			<Grid item md={8} mt={6}>
				<SvgIcon sx={{ fontSize: "4.5em" }}>
					<svg fill="currentColor">
						<path d="M9.5 0v5.96L5.28 1.75 1.75 5.28 5.96 9.5H0v5h5.96l-4.21 4.22 3.53 3.53 4.22-4.21V24h5v-5.96l4.22 4.21 3.53-3.53-4.21-4.22H24v-5h-5.96l4.21-4.22-3.53-3.53-4.22 4.21V0h-5z" />
					</svg>
				</SvgIcon>
				<Typography variant="h3" align="left" my={2}>
					Skills & Tools
				</Typography>
				<SkillButton />
			</Grid>
		</Grid>
	);
}
