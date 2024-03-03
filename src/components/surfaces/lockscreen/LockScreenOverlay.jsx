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
				fontWeight: 700,
				transition: "250ms linear",
				transitionProperty: "background-color, font-weight",
				userSelect: "none",
				":hover": {
					backgroundColor: "rgba(0, 0, 0, 1)",
					color: "white",
					fontWeight: 300,
				},
			}}
		>
			<BasicClock />
		</Box>
	);
}
