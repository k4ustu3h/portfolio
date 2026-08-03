"use client";

import { M3eTheme } from "@m3e/react/theme";

import WallpaperProvider from "@/contexts/WallpaperContext";

export default function ThemeWrapper({ children, sourceColor, wallpaper }) {
	return (
		<M3eTheme color={sourceColor} variant="expressive">
			<WallpaperProvider value={wallpaper}>{children}</WallpaperProvider>
		</M3eTheme>
	);
}
