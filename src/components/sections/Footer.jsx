import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../styles/breakpoints.json";
import DarkMode from "../buttons/iconButtons/DarkMode";
import SocialIconButton from "../buttons/iconButtons/SocialIconButton";

export default function Footer() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<Box
			alignItems="center"
			bgcolor="section.footer.background"
			borderColor="background.default"
			borderTop={4}
			color="section.footer.text"
			display="flex"
			flexDirection="column"
			gap={2}
			p={8}
		>
			<Box
				alignItems="center"
				display="flex"
				flexDirection={sm || xs ? "column" : ""}
				gap={1}
			>
				<SocialIconButton />
				<Divider
					flexItem
					orientation={sm || xs ? "horizontal" : "vertical"}
					variant="middle"
				/>
				<DarkMode />
			</Box>
			<Typography>© 2024 Kaustubh Ladiya</Typography>
		</Box>
	);
}
