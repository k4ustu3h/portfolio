import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typewriter from "../typography/Typewriter";

export default function Hero() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	return (
		<Stack
			alignItems="end"
			direction="row"
			height="89vh"
			p={isSmallScreen ? 4 : 8}
			pb={isSmallScreen ? 10 : 6}
		>
			<Box className="Hero" fontSize={isSmallScreen ? "8vw" : "4.5vw"}>
				<Typography className="weight-change" fontSize="1em">
					Just another
				</Typography>
				<Typewriter />
			</Box>
		</Stack>
	);
}
