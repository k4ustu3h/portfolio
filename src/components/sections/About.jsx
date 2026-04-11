import { M3eShape } from "@m3e/react/shape";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import AboutButton from "@/components/buttons/iconButtons/AboutButton";
import breakpoints from "@/styles/breakpoints.json";
import MonochromeIcon from "@/components/icons/MonochromeIcon";
import SkillButton from "@/components/buttons/SkillButton";

export default function About() {
	const md = useMediaQuery(breakpoints.width.md);
	const xs = useMediaQuery(breakpoints.width.xs);
	const fontSize = md || xs ? "12vw" : "8vw";
	const iconSize = md || xs ? "24vw" : "16vw";

	return (
		<Grid
			container
			id="about"
			sx={{
				bgcolor: "section.about.background",
				color: "section.about.text",
				height: md || xs ? "inherit" : "100vh",
				p: md || xs ? 4 : 8,
				"--m3e-shape-container-color": (theme) =>
					theme.vars.palette.section.about.text,
			}}
		>
			<Grid size={{ md: 6 }}>
				<Box sx={{ height: iconSize, width: iconSize }}>
					<MonochromeIcon
						backgroundColor="background.default"
						color="primary.main"
						size={fontSize}
					>
						<Typography
							variant="logoMonochrome"
							sx={{ fontSize: "inherit" }}
						>
							kl.
						</Typography>
					</MonochromeIcon>
				</Box>
			</Grid>
			<Grid size={{ md: 6 }} sx={{ mt: 4 }}>
				<Typography variant="h3">About</Typography>
				<Typography sx={{ my: 2 }}>
					Hello there, I’m Kaustubh Ladiya. A quick learner and
					dedicated student with proficiency in Web development,
					Android development, Graphic Design, and Linux fundamentals.
				</Typography>
				<AboutButton />
			</Grid>
			<Grid size={{ md: 8 }} sx={{ mt: 6 }}>
				<M3eShape name="boom" style={{ "--m3e-shape-size": "4.5em" }} />
				<Typography align="left" sx={{ my: 2 }} variant="h3">
					Skills & Tools
				</Typography>
				<SkillButton />
			</Grid>
		</Grid>
	);
}
