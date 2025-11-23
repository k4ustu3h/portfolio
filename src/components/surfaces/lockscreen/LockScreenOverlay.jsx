import React from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
const BasicClock = dynamic(
	() => import("@/components/surfaces/lockscreen/clocks/digital/BasicClock"),
	{
		ssr: false,
	}
);

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
