"use client";

import Box from "@mui/material/Box";
import dynamic from "next/dynamic";

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
