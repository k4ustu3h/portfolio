import { monetStore } from "@/store/monetStore";

const wallpapersArray = Object.values(monetStore);

function getRandomWallpaperAndPalette(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomWallpaper = arr[randomIndex];

	return {
		wallpaper: randomWallpaper.wallpaper,
		palette: randomWallpaper.palette,
	};
}

const { wallpaper, palette } = getRandomWallpaperAndPalette(wallpapersArray);

export { wallpaper, palette };
