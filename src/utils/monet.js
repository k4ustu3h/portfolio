import {
	argbFromHex,
	Hct,
	hexFromArgb,
	MaterialDynamicColors,
	SchemeExpressive,
	sourceColorFromImage,
} from "@ktibow/material-color-utilities-nightly";
import wallpapers from "@/data/wallpapers.json";

const wallpapersArray = Object.values(wallpapers).map((src) => ({ src }));

const mdc = new MaterialDynamicColors();

function schemeToHex(scheme) {
	const colors = {
		primary: mdc.primary(),
		onPrimary: mdc.onPrimary(),
		primaryContainer: mdc.primaryContainer(),
		onPrimaryContainer: mdc.onPrimaryContainer(),
		secondary: mdc.secondary(),
		onSecondary: mdc.onSecondary(),
		secondaryContainer: mdc.secondaryContainer(),
		onSecondaryContainer: mdc.onSecondaryContainer(),
		tertiary: mdc.tertiary(),
		onTertiary: mdc.onTertiary(),
		tertiaryContainer: mdc.tertiaryContainer(),
		onTertiaryContainer: mdc.onTertiaryContainer(),
		error: mdc.error(),
		onError: mdc.onError(),
		errorContainer: mdc.errorContainer(),
		onErrorContainer: mdc.onErrorContainer(),
		background: mdc.background(),
		onBackground: mdc.onBackground(),
		surface: mdc.surface(),
		onSurface: mdc.onSurface(),
		surfaceVariant: mdc.surfaceVariant(),
		onSurfaceVariant: mdc.onSurfaceVariant(),
		outline: mdc.outline(),
		outlineVariant: mdc.outlineVariant(),
		shadow: mdc.shadow(),
		scrim: mdc.scrim(),
		inverseSurface: mdc.inverseSurface(),
		inverseOnSurface: mdc.inverseOnSurface(),
		inversePrimary: mdc.inversePrimary(),
		surfaceDim: mdc.surfaceDim(),
		surfaceBright: mdc.surfaceBright(),
		surfaceContainerLowest: mdc.surfaceContainerLowest(),
		surfaceContainerLow: mdc.surfaceContainerLow(),
		surfaceContainer: mdc.surfaceContainer(),
		surfaceContainerHigh: mdc.surfaceContainerHigh(),
		surfaceContainerHighest: mdc.surfaceContainerHighest(),
	};

	const json = {};
	for (const [key, value] of Object.entries(colors)) {
		json[key] = hexFromArgb(value.getArgb(scheme));
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
			img.crossOrigin = "Anonymous";
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
		sourceColor = argbFromHex("#2962ff");
	}

	const hct = Hct.fromInt(sourceColor);
	const lightScheme = new SchemeExpressive(hct, false, 0.0);
	lightScheme.specVersion = 2025;

	const darkScheme = new SchemeExpressive(hct, true, 0.0);
	darkScheme.specVersion = 2025;

	return {
		schemes: {
			light: schemeToHex(lightScheme),
			dark: schemeToHex(darkScheme),
		},
		palettes: {
			primary: paletteToHex(lightScheme.primaryPalette),
			secondary: paletteToHex(lightScheme.secondaryPalette),
			tertiary: paletteToHex(lightScheme.tertiaryPalette),
		},
	};
}

function getRandomWallpaper(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomWallpaper = arr[randomIndex];

	return {
		wallpaper: randomWallpaper,
	};
}

const { wallpaper } = getRandomWallpaper(wallpapersArray);

export { wallpaper };
