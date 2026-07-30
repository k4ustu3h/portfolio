"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { M3eTheme } from "@m3e/react/theme";

import WallpaperProvider from "@/contexts/WallpaperContext";

import { getCSSVars } from "@/styles/cssVars";

export default function ThemeWrapper({ children, theme, wallpaper }) {
	return (
		<AppRouterCacheProvider>
			<M3eTheme color={theme.schemes.light.primary} variant="expressive">
				<WallpaperProvider value={wallpaper}>
					<ThemeProvider theme={getCSSVars(theme)}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</WallpaperProvider>
			</M3eTheme>
		</AppRouterCacheProvider>
	);
}
