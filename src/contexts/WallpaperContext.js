"use client";

import { createContext, useContext } from "react";

const WallpaperContext = createContext(undefined);

const WallpaperProvider = WallpaperContext.Provider;

export const useWallpaper = () => {
	const context = useContext(WallpaperContext);
	return context;
};

export default WallpaperProvider;
