import "@/styles/index.css";

import { afacad, googleSansFlex } from "@/app/fonts";

import metadataJSON from "@/data/metadata.json";
import wallpapers from "@/data/wallpapers.json";

import { getSourceColorForWallpaper } from "@/utils/monet";

import ThemeWrapper from "@/components/ThemeWrapper";

export const dynamic = "force-dynamic";

export const metadata = metadataJSON;

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

	const sourceColor = await getSourceColorForWallpaper(wallpaper.src);

	return (
		<html
			className={`${afacad.variable} ${googleSansFlex.variable}`}
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<link rel="me" href="https://mastodon.social/@k4ustu3h" />
			</head>
			<body>
				<ThemeWrapper sourceColor={sourceColor} wallpaper={wallpaper}>
					{props.children}
				</ThemeWrapper>
			</body>
		</html>
	);
}
