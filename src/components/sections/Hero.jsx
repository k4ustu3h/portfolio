import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../styles/breakpoints.json";
import LockScreen from "../surfaces/LockScreen";
import Typewriter from "../typography/Typewriter";

export default function Hero() {
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<Stack
			alignItems={xs ? "" : "end"}
			color="on.surface"
			direction={xs ? "column" : "row-reverse"}
			height="89vh"
			px={xs ? 4 : 8}
			pb={xs ? 10 : 6}
			spacing={xs ? 6 : 0}
		>
			<Box
				display="flex"
				justifyContent="center"
				pb={xs ? 0 : 2}
				width={xs ? "100%" : "50%"}
			>
				<LockScreen />
			</Box>
			<Box
				className="Hero"
				fontSize={xs ? "8vw" : "4.5vw"}
				width={xs ? "100%" : "50%"}
			>
				<Typography variant="heroPrimaryHeading">
					Just another
				</Typography>
				<br />
				<Typewriter />
			</Box>
		</Stack>
	);
}
