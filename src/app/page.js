import "@/styles/index.css";
import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/pages/Home"));

export default function Page() {
	return <Home />;
}
