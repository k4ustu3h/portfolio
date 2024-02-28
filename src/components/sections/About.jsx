import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import MonochromeIcon from "../surfaces/MonochromeIcon";
import SkillButton from "../buttons/SkillButton";

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
						<Box height={256} width={256}>
							<MonochromeIcon
								backgroundColor="background.default"
								color="primary.main"
								size={128}
							>
								<Typography fontSize="inherit" variant="logo">
									kl.
								</Typography>
							</MonochromeIcon>
						</Box>
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
