import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useWallpaper } from "../../contexts/WallpaperContext";
import breakpoints from "../../styles/breakpoints.json";
import LockScreenOverlay from "./lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const xs = useMediaQuery(breakpoints.width.xs);
	const wallpaper = useWallpaper();

	if (!wallpaper) return null;

	return (
		<Box
			borderRadius={8}
			color="primary.main"
			height={xs ? "60vh" : "80vh"}
			sx={{
				aspectRatio: 9 / 20,
				backgroundImage: `url(${wallpaper.wallpaper.src || wallpaper.wallpaper})`,
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
