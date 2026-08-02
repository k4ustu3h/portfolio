"use client";

import dynamic from "next/dynamic";

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
			<div
				style={{
					position: "relative",
					zIndex: 1,
				}}
			>
				<NavBar />
				<Hero />
				<About />
				<Projects />
			</div>
			<Footer />
		</>
	);
}
