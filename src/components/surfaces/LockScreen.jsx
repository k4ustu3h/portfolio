import Image from "next/image";

import useMediaQuery from "@/hooks/useMediaQuery";

import { useWallpaper } from "@/contexts/WallpaperContext";

import breakpoints from "@/styles/breakpoints.json";

import LockScreenOverlay from "@/components/surfaces/lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const xs = useMediaQuery(breakpoints.width.xs);
	const wallpaper = useWallpaper();

	return (
		<div
			style={{
				aspectRatio: "9 / 20",
				borderRadius: "32px",
				color: "var(--md-sys-color-primary)",
				height: xs ? "60vh" : "80vh",
				overflow: "hidden",
				position: "relative",
			}}
		>
			<Image
				alt="Lock screen wallpaper"
				className="lock-screen-image"
				fill
				priority
				src={wallpaper.src}
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
			/>
			<div style={{ height: "100%", position: "relative" }}>
				<LockScreenOverlay />
			</div>
		</div>
	);
}
