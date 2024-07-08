import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { wallpaper } from "../../utils/monet";
import breakpoints from "../../styles/breakpoints.json";
import LockScreenOverlay from "./lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<Box
			borderRadius={8}
			color="primary.main"
			height={xs ? "60vh" : "80vh"}
			sx={{
				aspectRatio: 9 / 20,
				backgroundImage: `url(${wallpaper.src})`,
				backgroundPosition: "center",
				backgroundSize: "180%",
				transition: "150ms linear",
				transitionProperty: "background-size",
				":hover": {
					backgroundSize: "167%",
				},
			}}
		>
			<LockScreenOverlay />
		</Box>
	);
}
