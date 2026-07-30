import { useEffect, useState } from "react";

import { M3eFab } from "@m3e/react/fab";

import { KeyboardArrowUp } from "@nine-thirty-five/material-symbols-react/rounded";

export default function ScrollToTop() {
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setTrigger(window.scrollY > 100);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = () => {
		const anchor = document.querySelector("#back-to-top-anchor");
		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div
			style={{
				bottom: 16,
				opacity: trigger ? 1 : 0,
				pointerEvents: trigger ? "auto" : "none",
				position: "fixed",
				right: 16,
				transform: trigger ? "translateY(0)" : "translateY(40px)",
				transition: "all var(--md-sys-motion-spring-slow-spatial)",
				zIndex: 20,
			}}
		>
			<M3eFab onClick={handleClick} size="small">
				<KeyboardArrowUp size={24} />
			</M3eFab>
		</div>
	);
}
