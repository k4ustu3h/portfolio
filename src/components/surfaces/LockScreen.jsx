import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useWallpaper } from "@/contexts/WallpaperContext";
import breakpoints from "@/styles/breakpoints.json";
import LockScreenOverlay from "@/components/surfaces/lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const xs = useMediaQuery(breakpoints.width.xs);
	const wallpaper = useWallpaper();

	return (
		<Box
			sx={{
				aspectRatio: 9 / 20,
				backgroundImage: `url(${wallpaper.src})`,
				backgroundPosition: "center",
				backgroundSize: "180%",
				borderRadius: 8,
				color: "primary.main",
				height: xs ? "60vh" : "80vh",
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
