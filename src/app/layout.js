import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { getThemeForWallpaper } from "@/utils/theme-server";
import { googleSansFlex } from "@/app/fonts";
import ThemeWrapper from "@/components/ThemeWrapper";
import wallpapers from "@/data/wallpapers.json";
export const dynamic = "force-dynamic";

const wallpapersArray = Object.values(wallpapers).map((src) => ({ src }));

function getRandomWallpaper(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomWallpaper = arr[randomIndex];

	return {
		wallpaper: randomWallpaper,
	};
}

export default async function RootLayout(props) {
	const { wallpaper } = getRandomWallpaper(wallpapersArray);
	const theme = await getThemeForWallpaper(wallpaper.src);

	return (
		<html className={googleSansFlex.variable} lang="en">
			<body>
				<InitColorSchemeScript attribute="class" />
				<ThemeWrapper theme={theme} wallpaper={wallpaper}>
					{props.children}
				</ThemeWrapper>
			</body>
		</html>
	);
}
