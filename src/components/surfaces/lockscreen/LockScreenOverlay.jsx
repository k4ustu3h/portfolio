import React from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
const BasicClock = dynamic(
	() => import("@/components/surfaces/lockscreen/clocks/digital/BasicClock"),
	{ ssr: false },
);

export default function LockScreenOverlay() {
	return (
		<Box
			sx={{
				alignItems: "center",
				aspectRatio: 9 / 20,
				borderRadius: 8,
				display: "flex",
				fontVariationSettings: `"ROND" 100, "wdth" 100`,
				fontWeight: 550,
				height: "100%",
				justifyContent: "center",
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
