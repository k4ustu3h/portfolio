import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialIconButton from "../icons/SocialIconButton";

export default function Footer() {
	return (
		<Box
			color="section.footer.text"
			p={8}
			sx={{
				alignItems: "center",
				bgcolor: "section.footer.background",
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
