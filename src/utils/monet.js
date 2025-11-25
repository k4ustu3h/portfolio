import {
	argbFromHex,
	Hct,
	hexFromArgb,
	MaterialDynamicColors,
	SchemeExpressive,
	sourceColorFromImage,
} from "@ktibow/material-color-utilities-nightly";

const mdc = new MaterialDynamicColors();

export function schemeToHex(scheme) {
	const colors = {
		primary: mdc.primary(),
		onPrimary: mdc.onPrimary(),
		primaryContainer: mdc.primaryContainer(),
		secondary: mdc.secondary(),
		secondaryContainer: mdc.secondaryContainer(),
		onSecondaryContainer: mdc.onSecondaryContainer(),
		tertiary: mdc.tertiary(),
		tertiaryContainer: mdc.tertiaryContainer(),
		onTertiaryContainer: mdc.onTertiaryContainer(),
		error: mdc.error(),
		surface: mdc.surface(),
		onSurface: mdc.onSurface(),
		onSurfaceVariant: mdc.onSurfaceVariant(),
		inverseSurface: mdc.inverseSurface(),
		inversePrimary: mdc.inversePrimary(),
		surfaceContainerLow: mdc.surfaceContainerLow(),
		surfaceContainerHigh: mdc.surfaceContainerHigh(),
		onPrimaryFixed: mdc.onPrimaryFixed(),
		secondaryFixed: mdc.secondaryFixed(),
	};

	const json = {};
	for (const [key, value] of Object.entries(colors)) {
		json[key] = hexFromArgb(value.getArgb(scheme));
	}
	return json;
}

export function paletteToHex(tonalPalette) {
	const tones = [
		0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100,
	];
	const json = {};
	for (const tone of tones) {
		json[tone] = hexFromArgb(tonalPalette.tone(tone));
	}
	return json;
}

export function generateThemeFromSourceColor(sourceColor) {
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
			light: {
				primary: paletteToHex(lightScheme.primaryPalette),
				secondary: paletteToHex(lightScheme.secondaryPalette),
				tertiary: paletteToHex(lightScheme.tertiaryPalette),
				neutral: paletteToHex(lightScheme.neutralPalette),
				neutralVariant: paletteToHex(lightScheme.neutralVariantPalette),
				error: paletteToHex(lightScheme.errorPalette),
			},
			dark: {
				primary: paletteToHex(darkScheme.primaryPalette),
				secondary: paletteToHex(darkScheme.secondaryPalette),
				tertiary: paletteToHex(darkScheme.tertiaryPalette),
				neutral: paletteToHex(darkScheme.neutralPalette),
				neutralVariant: paletteToHex(darkScheme.neutralVariantPalette),
				error: paletteToHex(darkScheme.errorPalette),
			},
		},
	};
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

	return generateThemeFromSourceColor(sourceColor);
}
