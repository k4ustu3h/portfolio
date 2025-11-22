"use client";

import { createContext, useContext } from "react";

const WallpaperContext = createContext(undefined);

export const WallpaperProvider = WallpaperContext.Provider;

export const useWallpaper = () => {
	const context = useContext(WallpaperContext);
	if (context === undefined) {
		throw new Error("useWallpaper must be used within a WallpaperProvider");
	}
	return context;
};
