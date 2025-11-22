import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { googleSansFlex } from "./fonts";
import ThemeRegistry from "../components/ThemeRegistry";

export const metadata = {
	title: "Kaustubh Ladiya",
	description: "Just another copy-paster...",
};

export default function RootLayout(props) {
	return (
		<html
			className={googleSansFlex.variable}
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<link rel="me" href="https://mastodon.social/@k4ustu3h" />
			</head>
			<body>
				<div id="root">
					<InitColorSchemeScript attribute="class" />
					<ThemeRegistry>{props.children}</ThemeRegistry>
					<SpeedInsights />
				</div>
			</body>
		</html>
	);
}
