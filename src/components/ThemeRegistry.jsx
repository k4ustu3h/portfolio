"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { wallpapers, generateThemeFromImage } from "../utils/monet";
import { getTheme } from "../styles/cssVars";
import { WallpaperProvider } from "../contexts/WallpaperContext";

export default function ThemeRegistry({ children }) {
	const [theme, setTheme] = useState(null);
	const [wallpaper, setWallpaper] = useState(null);

	useEffect(() => {
		const initTheme = async () => {
			try {
				const randomWallpaper =
					wallpapers[Math.floor(Math.random() * wallpapers.length)];
				setWallpaper(randomWallpaper);

				const imageSrc =
					randomWallpaper.wallpaper?.src || randomWallpaper.wallpaper;

				if (imageSrc) {
					const generatedPalette = await generateThemeFromImage(
						imageSrc
					);
					setTheme(getTheme(generatedPalette));
				}
			} catch (e) {
				console.error("Theme generation failed:", e);
			}
		};

		initTheme();
	}, []);

	if (!theme) return null;

	return (
		<AppRouterCacheProvider>
			<WallpaperProvider value={wallpaper}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</WallpaperProvider>
		</AppRouterCacheProvider>
	);
}
