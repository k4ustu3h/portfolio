"use client";

import dynamic from "next/dynamic";

import Box from "@mui/material/Box";

const About = dynamic(() => import("@/components/layout/About.jsx"), {
	ssr: false,
});
const Projects = dynamic(() => import("@/components/layout/Projects.jsx"), {
	ssr: false,
});

import Footer from "@/components/layout/Footer.jsx";
import Hero from "@/components/layout/Hero.jsx";
import NavBar from "@/components/surfaces/NavBar.jsx";

export default function Home() {
	return (
		<>
			<Box
				sx={{
					position: "relative",
					zIndex: 1,
				}}
			>
				<NavBar />
				<Hero />
				<About />
				<Projects />
			</Box>
			<Footer />
		</>
	);
}
