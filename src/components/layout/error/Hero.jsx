import { useEffect, useState } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

import { M3eButton } from "@m3e/react/button";
import { M3eHeading } from "@m3e/react/heading";

import breakpoints from "@/styles/breakpoints.json";

import TARDIS from "@/assets/svgs/TARDIS";

import SquigglyLine from "@/components/shapes/SquigglyLine";

import tardisQuotes from "@/data/tardisQuotes.json";

export default function Hero() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);

	const alignment = xs ? "center" : "flex-end";

	const [randomQuotes, setRandomQuotes] = useState([]);

	useEffect(() => {
		const randomiseQuotes =
			tardisQuotes[Math.floor(Math.random() * tardisQuotes.length)];
		setRandomQuotes(randomiseQuotes);
	}, []);

	return (
		<section
			style={{
				backgroundColor: "var(--md-sys-color-background)",
				position: "relative",
			}}
		>
			<div
				style={{
					alignItems: xs ? "normal" : "flex-end",
					color: "var(--md-sys-color-on-surface)",
					display: "flex",
					flexDirection: xs ? "column" : "row-reverse",
					height: "85vh",
					paddingBottom: xs ? "0px" : "32px",
					paddingLeft: xs ? "32px" : "64px",
					paddingRight: xs ? "32px" : "64px",
				}}
			>
				<div
					style={{
						alignItems: alignment,
						color: "var(--md-sys-color-primary)",
						display: "flex",
						fontSize: xs ? "100vw" : "40vw",
						height: xs ? "60%" : "100%",
						justifyContent: alignment,
						width: xs ? "100%" : "50%",
					}}
				>
					<TARDIS />
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: xs ? "16px" : "40px",
						height: xs ? "40%" : "100%",
						justifyContent: alignment,
						width: xs ? "100%" : "50%",
					}}
				>
					<M3eHeading
						variant="display"
						size={xs ? "small" : sm ? "medium" : "large"}
					>
						{randomQuotes}
					</M3eHeading>

					<div>
						<M3eButton
							href="/"
							size={xs ? "small" : sm ? "medium" : "large"}
							variant="filled"
						>
							Use the TARDIS
						</M3eButton>
					</div>
				</div>
			</div>
			<div
				style={{
					bottom: "-14px",
					left: 0,
					position: "relative",
					width: "100%",
				}}
			>
				<SquigglyLine />
			</div>
		</section>
	);
}
