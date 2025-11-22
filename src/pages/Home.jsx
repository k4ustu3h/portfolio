"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { cssVars } from "../styles/cssVars";
import { wallpaper } from "../utils/monet";
import { WallpaperProvider } from "../contexts/WallpaperContext";
const About = dynamic(() => import("../components/sections/About.jsx"), {
	ssr: false,
});
const Projects = dynamic(() => import("../components/sections/Projects.jsx"), {
	ssr: false,
});
import Footer from "../components/sections/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import NavBar from "../components/surfaces/NavBar.jsx";

export default function Home() {
	const [theme, setTheme] = useState(null);
	const [activeWallpaper, setActiveWallpaper] = useState(null);

	useEffect(() => {
		setActiveWallpaper(wallpaper);
		setTheme(cssVars);
	}, []);

	if (!theme) return null;

	return (
		<WallpaperProvider value={activeWallpaper}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NavBar />
				<Hero />
				<About />
				<Projects />
				<Footer />
			</ThemeProvider>
		</WallpaperProvider>
	);
}
