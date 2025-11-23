"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { cssVars } from "@/styles/cssVars";
import { wallpaper } from "@/utils/monet";
import LoadingScreen from "@/components/feedback/LoadingScreen";
import WallpaperProvider from "@/contexts/WallpaperContext";

export default function ThemeWrapper({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <LoadingScreen />;
	}

	return (
		<WallpaperProvider value={wallpaper}>
			<ThemeProvider theme={cssVars}>{children}</ThemeProvider>
		</WallpaperProvider>
	);
}
