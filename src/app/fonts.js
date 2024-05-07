import { Afacad, Outfit } from "next/font/google";

export const outfit = Outfit({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-outfit",
});

export const afacad = Afacad({
	adjustFontFallback: false,
	display: "swap",
	style: "italic",
	subsets: ["latin"],
});
