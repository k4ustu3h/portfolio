"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { getCSSVars } from "@/styles/cssVars";
import WallpaperProvider from "@/contexts/WallpaperContext";

export default function ThemeWrapper({ children, theme, wallpaper }) {
	return (
		<AppRouterCacheProvider>
			<WallpaperProvider value={wallpaper}>
				<ThemeProvider theme={getCSSVars(theme)}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</WallpaperProvider>
		</AppRouterCacheProvider>
	);
}
