"use client";

import dynamic from "next/dynamic";
import CssBaseline from "@mui/material/CssBaseline";
const About = dynamic(() => import("@/components/sections/About.jsx"), {
	ssr: false,
});
const Projects = dynamic(() => import("@/components/sections/Projects.jsx"), {
	ssr: false,
});
import Footer from "@/components/sections/Footer.jsx";
import Hero from "@/components/sections/Hero.jsx";
import NavBar from "@/components/surfaces/NavBar.jsx";

export default function Home() {
	return (
		<>
			<CssBaseline />
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Footer />
		</>
	);
}
