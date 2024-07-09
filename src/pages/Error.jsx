"use client";

import React from "react";
import { Experimental_CssVarsProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { cssVars } from "../styles/cssVars";
import Hero from "../components/sections/error/Hero";
import Footer from "../components/sections/Footer";
import NavBar from "../components/surfaces/NavBar";

export default function Error() {
	return (
		<Experimental_CssVarsProvider defaultMode="system" theme={cssVars}>
			<CssBaseline />
			<NavBar />
			<Hero />
			<Footer />
		</Experimental_CssVarsProvider>
	);
}
