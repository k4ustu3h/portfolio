import {
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor,
	sourceColorFromImage,
} from "@ktibow/material-color-utilities-nightly";
import { monetStore } from "../store/monetStore";

const wallpapersArray = Object.values(monetStore);

function schemeToHex(scheme) {
	const json = {};
	for (const [key, value] of Object.entries(scheme.toJSON())) {
		json[key] = hexFromArgb(value);
	}
	return json;
}

function paletteToHex(tonalPalette) {
	const tones = [
		0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100,
	];
	const json = {};
	for (const tone of tones) {
		json[tone] = hexFromArgb(tonalPalette.tone(tone));
	}
	return json;
}

export async function generateThemeFromImage(imageSource) {
	let sourceColor;
	try {
		if (typeof imageSource === "string") {
			const img = new Image();
			img.src = imageSource;
			await new Promise((resolve, reject) => {
				img.onload = resolve;
				img.onerror = reject;
			});
			sourceColor = await sourceColorFromImage(img);
		} else {
			sourceColor = await sourceColorFromImage(imageSource);
		}
	} catch (error) {
		console.error(
			"Failed to extract color from image, using fallback.",
			error
		);
		sourceColor = argbFromHex("#7A96BF");
	}

	const theme = themeFromSourceColor(sourceColor);

	return {
		schemes: {
			light: schemeToHex(theme.schemes.light),
			dark: schemeToHex(theme.schemes.dark),
		},
		palettes: {
			primary: paletteToHex(theme.palettes.primary),
			secondary: paletteToHex(theme.palettes.secondary),
			tertiary: paletteToHex(theme.palettes.tertiary),
			neutral: paletteToHex(theme.palettes.neutral),
			neutralVariant: paletteToHex(theme.palettes.neutralVariant),
		},
	};
}

function getRandomWallpaperAndPalette(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomWallpaper = arr[randomIndex];

	return {
		wallpaper: randomWallpaper.wallpaper,
	};
}

const { wallpaper } = getRandomWallpaperAndPalette(wallpapersArray);

export { wallpaper, wallpapersArray as wallpapers };
