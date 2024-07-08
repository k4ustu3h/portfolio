import { monetStore } from "../store/monetStore";

const wallpapersArray = Object.values(monetStore);

function getRandomWallpaperAndpallette(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomWallpaper = arr[randomIndex];

	return {
		wallpaper: randomWallpaper.wallpaper,
		pallette: randomWallpaper.pallette,
	};
}

const { wallpaper, pallette } = getRandomWallpaperAndpallette(wallpapersArray);

export { wallpaper, pallette };
