import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";
import SocialIconButton from "@/components/buttons/iconButtons/SocialIconButton";

export default function Footer() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<Box
			component="footer"
			sx={{
				alignItems: "center",
				bgcolor: "section.footer.background",
				bottom: 0,
				color: "section.footer.text",
				display: "flex",
				flexDirection: "column",
				gap: 2,
				p: 8,
				position: "sticky",
				zIndex: -1,
			}}
		>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: sm || xs ? "column" : "row",
					gap: 1,
				}}
			>
				<SocialIconButton />
			</Box>
		</Box>
	);
}
