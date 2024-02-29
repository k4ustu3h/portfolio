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
					<svg fill="currentColor" viewBox="0 0 256 256">
						<path d="M153 0h-50v68L54.98 19.98 19.63 55.34 67.29 103H0v50h68l-48.02 48.02 35.36 35.35L103 188.72V256h50v-67.29l47.65 47.65L236 201l-48-48h68v-50h-67.29l47.65-47.65L201 20l-48 48V0Z" />
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
