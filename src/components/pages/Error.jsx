"use client";

import Hero from "@/components/layout/error/Hero";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/surfaces/NavBar";

export default function Error() {
	return (
		<>
			<div style={{ position: "relative", zIndex: 1 }}>
				<NavBar />
				<Hero />
			</div>
			<Footer />
		</>
	);
}
