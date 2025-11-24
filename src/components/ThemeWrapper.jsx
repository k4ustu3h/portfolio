"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { getCSSVars } from "@/styles/cssVars";
import { wallpaper, generateThemeFromImage } from "@/utils/monet";
import LoadingScreen from "@/components/feedback/LoadingScreen";
import WallpaperProvider from "@/contexts/WallpaperContext";

export default function ThemeWrapper({ children }) {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		const initTheme = async () => {
			try {
				const palette = await generateThemeFromImage(wallpaper.src);
				setTheme(getCSSVars(palette));
			} catch (error) {
				console.error("Failed to generate theme:", error);
			}
		};

		initTheme();
	}, []);

	if (!theme) {
		return <LoadingScreen />;
	}

	return (
		<WallpaperProvider value={wallpaper}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</WallpaperProvider>
	);
}
