import { monetStore } from "../store/monetStore";

const wallpapersArray = Object.values(monetStore);

function getRandomWallpaperAndpalette(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomWallpaper = arr[randomIndex];

	return {
		wallpaper: randomWallpaper.wallpaper,
		palette: randomWallpaper.palette,
	};
}

const { wallpaper, palette } = getRandomWallpaperAndpalette(wallpapersArray);

export { wallpaper, palette };
