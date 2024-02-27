import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Typewriter from "../typography/Typewriter";

export default function Hero() {
	return (
		<Box
			p={8}
			className="Hero"
			sx={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "end",
				minHeight: "100vh",
			}}
		>
			<Stack justifyContent="center">
				<Typography
					fontSize={"1em"}
					align="left"
					className="weight-change"
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
