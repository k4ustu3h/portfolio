import sharp from "sharp";
import path from "path";
import {
	QuantizerCelebi,
	Score,
	argbFromRgb,
} from "@evowizz/material-color-utilities-canary";
import { generateThemeFromSourceColor } from "@/utils/monet";

export async function getThemeForWallpaper(wallpaperSrc) {
	try {
		const publicDir = path.join(process.cwd(), "public");
		const imagePath = path.join(publicDir, wallpaperSrc);

		const imageBuffer = await sharp(imagePath)
			.resize(128, 128, { fit: "cover" })
			.ensureAlpha()
			.raw()
			.toBuffer();

		const pixels = [];
		for (let i = 0; i < imageBuffer.length; i += 4) {
			const r = imageBuffer[i];
			const g = imageBuffer[i + 1];
			const b = imageBuffer[i + 2];
			const a = imageBuffer[i + 3];

			if (a < 255) {
				continue;
			}

			const argb = argbFromRgb(r, g, b);
			pixels.push(argb);
		}

		const result = QuantizerCelebi.quantize(pixels, 128);
		const ranked = Score.score(result);
		const sourceColor = ranked[0];

		return generateThemeFromSourceColor(sourceColor);
	} catch (error) {
		console.error("Error generating theme on server:", error);
		return generateThemeFromSourceColor(0xff2962ff);
	}
}
