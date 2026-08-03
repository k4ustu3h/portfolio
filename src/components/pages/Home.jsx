"use client";

import About from "@/components/layout/About.jsx";
import Projects from "@/components/layout/Projects.jsx";
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
