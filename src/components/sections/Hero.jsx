import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typewriter from "../typography/Typewriter";

export default function Hero() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	return (
		<Box
			className="Hero"
			fontSize={isSmallScreen ? "8vw" : "4.5vw"}
			p={isSmallScreen ? 4 : 8}
			pb={isSmallScreen ? 10 : 6}
			sx={{
				alignItems: "end",
				display: "flex",
				height: "100vh",
				justifyContent: "flex-start",
			}}
		>
			<Stack justifyContent="center">
				<Typography
					align="left"
					className="weight-change"
					fontSize="1em"
				>
					Just another
				</Typography>
				<Box align="left">
					<Typewriter />
				</Box>
			</Stack>
		</Box>
	);
}
