import { Afacad } from "next/font/google";
import localFont from "next/font/local";

export const afacad = Afacad({
	adjustFontFallback: false,
	display: "swap",
	style: "italic",
	subsets: ["latin"],
});

export const googleSansFlex = localFont({
	src: "fonts/google_sans_flex.ttf",
	display: "swap",
	variable: "--font-google-sans-flex",
});
