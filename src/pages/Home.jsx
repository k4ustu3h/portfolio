"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { cssVars } from "../styles/cssVars.js";
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
	return (
		<ThemeProvider defaultMode="system" theme={cssVars}>
			<CssBaseline />
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Footer />
		</ThemeProvider>
	);
}
