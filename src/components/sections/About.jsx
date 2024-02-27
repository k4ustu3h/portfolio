import { Box, Typography, Stack, SvgIcon, Container } from "@mui/material";
import React from "react";
import SkillButton from "../buttons/SkillButton";
import MonochromeIcon from "../surfaces/MonochromeIcon";

export default function About() {
	return (
		<Box
			id="about"
			p={8}
			sx={{
				bgcolor: "primary.container",
				minHeight: "100vh",
			}}
		>
			<Stack>
				<Stack height={"29vh"} direction="row">
					<Container
						sx={{
							width: "50vw",
						}}
					>
						<MonochromeIcon>
							<Typography fontSize="inherit" variant="logo">
								kl.
							</Typography>
						</MonochromeIcon>
					</Container>
					<Stack maxWidth={"45vw"}>
						<Typography variant="h3" align="left" my={2}>
							About
						</Typography>
						<Typography>
							Hello there, I’m Kaustubh Ladiya. I’m a developer
							from Jabalpur, India. I have a passion for creating
							innovative apps and designing intuitive components
							and layouts.
						</Typography>
					</Stack>
				</Stack>
				<Stack justifyContent={"end"} height={"50vh"} maxWidth={"60vw"}>
					<SvgIcon sx={{ fontSize: "4.5em" }}>
						<svg fill="currentColor" viewBox="0 0 256 256">
							<path d="M153 0h-50v68L54.98 19.98 19.63 55.34 67.29 103H0v50h68l-48.02 48.02 35.36 35.35L103 188.72V256h50v-67.29l47.65 47.65L236 201l-48-48h68v-50h-67.29l47.65-47.65L201 20l-48 48V0Z" />
						</svg>
					</SvgIcon>
					<Typography variant="h3" align="left" my={2}>
						Skills & Tools
					</Typography>
					<SkillButton />
				</Stack>
			</Stack>
		</Box>
	);
}
