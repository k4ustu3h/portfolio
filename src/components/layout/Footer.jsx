import useMediaQuery from "@/hooks/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";

import SocialIconButton from "@/components/buttons/iconButtons/SocialIconButton";

export default function Footer() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<footer
			style={{
				alignItems: "center",
				backgroundColor: "var(--md-sys-color-tertiary-container)",
				bottom: 0,
				color: "var(--md-sys-color-on-tertiary-container)",
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				padding: "64px",
				position: "sticky",
				zIndex: 0,
			}}
		>
			<div
				style={{
					alignItems: "center",
					display: "flex",
					flexDirection: sm || xs ? "column" : "row",
					gap: "8px",
				}}
			>
				<SocialIconButton />
			</div>
		</footer>
	);
}
