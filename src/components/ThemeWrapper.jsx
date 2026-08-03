"use client";

import { useEffect, useState } from "react";

import { M3eTheme } from "@m3e/react/theme";

import WallpaperProvider from "@/contexts/WallpaperContext";

export default function ThemeWrapper({ children, sourceColor, wallpaper }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<M3eTheme color={sourceColor} variant="expressive">
			<WallpaperProvider value={wallpaper}>
				<div
					style={{
						opacity: mounted ? 1 : 0,
						transition: "opacity 0.4s ease-in-out",
					}}
				>
					{children}
				</div>
			</WallpaperProvider>
		</M3eTheme>
	);
}
