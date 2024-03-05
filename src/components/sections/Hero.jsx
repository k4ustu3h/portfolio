import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import LockScreen from "../surfaces/LockScreen";
import Typewriter from "../typography/Typewriter";

export default function Hero() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	return (
		<Stack
			alignItems={isSmallScreen ? "" : "end"}
			direction={isSmallScreen ? "column" : "row-reverse"}
			height="89vh"
			px={isSmallScreen ? 4 : 8}
			pb={isSmallScreen ? 10 : 6}
			spacing={isSmallScreen ? 6 : 0}
		>
			<Box
				display="flex"
				justifyContent="center"
				pb={isSmallScreen ? 0 : 2}
				width={isSmallScreen ? "100%" : "50%"}
			>
				<LockScreen />
			</Box>
			<Box
				className="Hero"
				fontSize={isSmallScreen ? "8vw" : "4.5vw"}
				width={isSmallScreen ? "100%" : "50%"}
			>
				<Typography className="weight-change" fontSize="1em">
					Just another
				</Typography>
				<Typewriter />
			</Box>
		</Stack>
	);
}
