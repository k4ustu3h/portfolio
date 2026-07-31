import useMediaQuery from "@/hooks/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";

import AnimatedShapes from "@/components/shapes/AnimatedShapes";
import LockScreen from "@/components/surfaces/LockScreen";
import Typewriter from "@/components/typography/Typewriter";

export default function Hero() {
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<div
			style={{
				alignItems: xs ? "normal" : "flex-end",
				backgroundColor: "var(--md-sys-color-background)",
				color: "var(--md-sys-color-on-surface)",
				display: "flex",
				flexDirection: xs ? "column" : "row-reverse",
				gap: xs ? "48px" : "0px",
				height: "89vh",
				paddingBottom: xs ? "80px" : "48px",
				paddingLeft: xs ? "32px" : "64px",
				paddingRight: xs ? "32px" : "64px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					paddingBottom: xs ? "0px" : "16px",
					width: xs ? "100%" : "50%",
				}}
			>
				<LockScreen />
			</div>

			<div
				className="Hero"
				style={{
					fontSize: xs ? "8vw" : "4vw",
					width: xs ? "100%" : "50%",
				}}
			>
				<AnimatedShapes xs={xs} />

				<span className="hero-primary-heading">Just another</span>
				<br />
				<Typewriter />
			</div>
		</div>
	);
}
