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
				fontVariationSettings: `"ROND" 100, "wdth" 100`,
				fontWeight: 550,
				transition: "250ms linear",
				transitionProperty:
					"background-color, font-variation-settings, font-weight",
				userSelect: "none",
				":hover": {
					backgroundColor: "rgba(0, 0, 0, 1)",
					color: "white",
					fontVariationSettings: `"ROND" 100, "wdth" 85`,
					fontWeight: 200,
				},
				":active": {
					fontWeight: 700,
				},
			}}
		>
			<BasicClock />
		</Box>
	);
}
