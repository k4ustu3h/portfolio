import { M3eHeading } from "@m3e/react/heading";
import { M3eShape } from "@m3e/react/shape";

import useMediaQuery from "@/hooks/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";

import AboutButton from "@/components/buttons/iconButtons/AboutButton";
import MonochromeIcon from "@/components/icons/MonochromeIcon";
import SkillButton from "@/components/buttons/SkillButton";

export default function About() {
	const md = useMediaQuery(breakpoints.width.md);
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);

	const isMobile = xs || sm;

	const isMediumOrSmaller = md || xs;
	const fontSize = isMediumOrSmaller ? "12vw" : "8vw";
	const iconSize = isMediumOrSmaller ? "24vw" : "16vw";

	return (
		<section
			id="about"
			style={{
				backgroundColor: "var(--md-sys-color-primary-container)",
				boxSizing: "border-box",
				color: "var(--md-sys-color-on-primary-container)",
				display: "flex",
				flexWrap: "wrap",
				minHeight: isMediumOrSmaller ? "auto" : "100vh",
				padding: isMediumOrSmaller ? "32px" : "64px",
				"--m3e-shape-container-color":
					"var(--md-sys-color-on-primary-container)",
			}}
		>
			<div style={{ width: isMobile ? "100%" : "50%" }}>
				<div style={{ height: iconSize, width: iconSize }}>
					<MonochromeIcon size={fontSize}>
						<div className="logo-monochrome">kl.</div>
					</MonochromeIcon>
				</div>
			</div>

			<div
				style={{
					marginTop: "1em",
					width: isMobile ? "100%" : "50%",
				}}
			>
				<M3eHeading className="rounded-heading">About</M3eHeading>
				<p
					style={{
						fontSize: "16px",
						marginBlock: "16px",
					}}
				>
					Hello there, I’m Kaustubh Ladiya. A quick learner and
					dedicated student with proficiency in Web development,
					Android development, Graphic Design, and Linux fundamentals.
				</p>
				<AboutButton />
			</div>

			<div
				style={{
					marginTop: "1em",
					width: isMobile ? "100%" : "66%",
				}}
			>
				<M3eShape name="boom" style={{ "--m3e-shape-size": "4.5em" }} />
				<M3eHeading className="rounded-heading">
					Skills & Tools
				</M3eHeading>
				<SkillButton />
			</div>
		</section>
	);
}
