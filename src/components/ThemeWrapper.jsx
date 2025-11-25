"use client";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { getCSSVars } from "@/styles/cssVars";
import WallpaperProvider from "@/contexts/WallpaperContext";

export default function ThemeWrapper({ children, theme, wallpaper }) {
	return (
		<AppRouterCacheProvider>
			<WallpaperProvider value={wallpaper}>
				<ThemeProvider theme={getCSSVars(theme)}>
					{children}
				</ThemeProvider>
			</WallpaperProvider>
		</AppRouterCacheProvider>
	);
}
