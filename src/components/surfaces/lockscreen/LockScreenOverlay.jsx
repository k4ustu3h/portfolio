import React from "react";
import Box from "@mui/material/Box";
import BasicClock from "./clocks/digital/BasicClock";

export default function LockScreenOverlay() {
	return (
		<Box
			alignItems="center"
			borderRadius={8}
			display="flex"
			height="100%"
			justifyContent="center"
			sx={{
				aspectRatio: 9 / 20,
				transition: "background-color 250ms linear",
				"&:hover": {
					backgroundColor: "rgba(0, 0, 0, 1)",
				},
			}}
		>
			<BasicClock />
		</Box>
	);
}
