import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AboutButton from "@/components/buttons/iconButtons/AboutButton";
import breakpoints from "@/styles/breakpoints.json";
import MonochromeIcon from "@/components/icons/MonochromeIcon";
import SkillButton from "@/components/buttons/SkillButton";

function SkillIcon() {
	return (
		<SvgIcon sx={{ fontSize: "4.5em" }}>
			<svg fill="currentColor">
				<path d="M9.5 0v5.96L5.28 1.75 1.75 5.28 5.96 9.5H0v5h5.96l-4.21 4.22 3.53 3.53 4.22-4.21V24h5v-5.96l4.22 4.21 3.53-3.53-4.21-4.22H24v-5h-5.96l4.21-4.22-3.53-3.53-4.22 4.21V0h-5z" />
			</svg>
		</SvgIcon>
	);
}

export default function About() {
	const md = useMediaQuery(breakpoints.width.md);
	const xs = useMediaQuery(breakpoints.width.xs);
	const fontSize = md || xs ? "12vw" : "8vw";
	const iconSize = md || xs ? "24vw" : "16vw";

	return (
		<Grid
			color="section.about.text"
			container
			id="about"
			p={md || xs ? 4 : 8}
			sx={{
				bgcolor: "section.about.background",
				height: md || xs ? "inherit" : "100vh",
			}}
		>
			<Grid size={{ md: 6 }}>
				<Box height={iconSize} width={iconSize}>
					<MonochromeIcon
						backgroundColor="background.default"
						color="primary.main"
						size={fontSize}
					>
						<Typography fontSize="inherit" variant="logoMonochrome">
							kl.
						</Typography>
					</MonochromeIcon>
				</Box>
			</Grid>
			<Grid size={{ md: 6 }} mt={4}>
				<Typography variant="h3">About</Typography>
				<Typography my={2}>
					Hello there, I’m Kaustubh Ladiya. A quick learner and
					dedicated student with proficiency in Web development,
					Android development, Graphic Design, and Linux fundamentals.
				</Typography>
				<AboutButton />
			</Grid>
			<Grid size={{ md: 8 }} mt={6}>
				<SkillIcon />
				<Typography variant="h3" align="left" my={2}>
					Skills & Tools
				</Typography>
				<SkillButton />
			</Grid>
		</Grid>
	);
}
