import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { outfit } from "./fonts";

export const metadata = {
	title: "Kaustubh Ladiya",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={outfit.variable}>
			<body>
				<div id="root">
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
					<SpeedInsights />
				</div>
			</body>
		</html>
	);
}
