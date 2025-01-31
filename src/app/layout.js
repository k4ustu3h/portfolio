import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { outfit } from "./fonts";

export const metadata = {
	title: "Kaustubh Ladiya",
	description: "Just another copy-paster...",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={outfit.variable}>
			<head>
				<link rel="me" href="https://mastodon.social/@k4ustu3h" />
			</head>
			<body>
				<div id="root">
					<InitColorSchemeScript />
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
					<SpeedInsights />
				</div>
			</body>
		</html>
	);
}
