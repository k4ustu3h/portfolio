import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SocialIconButton from "../buttons/SocialIconButton";

export default function Footer() {
	return (
		<Box
			p={8}
			sx={{
				alignItems: "center",
				bgcolor: "tertiary.container",
				borderTop: 4,
				borderColor: "background.default",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<SocialIconButton />
			<Typography mt={2}>© 2024 Kaustubh Ladiya</Typography>
		</Box>
	);
}
