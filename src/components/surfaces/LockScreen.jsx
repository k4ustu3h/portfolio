import useMediaQuery from "@/hooks/useMediaQuery";

import { useWallpaper } from "@/contexts/WallpaperContext";

import breakpoints from "@/styles/breakpoints.json";

import LockScreenOverlay from "@/components/surfaces/lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const xs = useMediaQuery(breakpoints.width.xs);
	const wallpaper = useWallpaper();

	return (
		<div
			className="lock-screen"
			style={{
				aspectRatio: "9 / 20",
				backgroundImage: `url(${wallpaper.src})`,
				backgroundPosition: "center",
				borderRadius: "32px",
				color: "var(--md-sys-color-primary)",
				height: xs ? "60vh" : "80vh",
			}}
		>
			<LockScreenOverlay />
		</div>
	);
}
