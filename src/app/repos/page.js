import "@/styles/index.css";
import React from "react";
import dynamic from "next/dynamic";

const Repos = dynamic(() => import("@/pages/Repos"));

export default function Page() {
	return <Repos />;
}
