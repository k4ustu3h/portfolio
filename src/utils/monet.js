import sharp from "sharp";
import path from "path";
import {
	QuantizerCelebi,
	Score,
	argbFromRgb,
	hexFromArgb,
} from "@evowizz/material-color-utilities-canary";

export async function getSourceColorForWallpaper(wallpaperSrc) {
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

			if (a < 255) continue;

			pixels.push(argbFromRgb(r, g, b));
		}

		const result = QuantizerCelebi.quantize(pixels, 128);
		const ranked = Score.score(result);
		const sourceColor = ranked[0];

		return hexFromArgb(sourceColor);
	} catch (error) {
		console.error("Error generating theme on server:", error);
		return "#2962ff";
	}
}
