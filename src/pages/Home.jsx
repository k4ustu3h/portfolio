import React from "react";
import { Experimental_CssVarsProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { cssVars } from "../styles/cssVars.js";
import About from "../components/sections/About.jsx";
import Footer from "../components/sections/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import NavBar from "../components/surfaces/NavBar.jsx";
import Projects from "../components/sections/Projects.jsx";

export default function Home() {
	return (
		<Experimental_CssVarsProvider theme={cssVars} defaultMode="dark">
			<CssBaseline />
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Footer />
		</Experimental_CssVarsProvider>
	);
}
