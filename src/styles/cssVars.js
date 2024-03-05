import experimental_extendTheme from "@mui/material/styles/experimental_extendTheme";
import pallette from "./pallette.json";
import { customComponents } from "./customComponents";

const lightPalette = pallette.schemes.light;
const darkPalette = pallette.schemes.dark;
const primaryTones = pallette.palettes.primary;

export const cssVars = experimental_extendTheme({
	colorSchemes: {
		light: {
			palette: {
				background: {
					default: lightPalette.surface,
				},
				surface: {
					container: {
						inverse: lightPalette.inverseSurface,
						low: lightPalette.surfaceContainerLow,
					},
				},
				on: {
					primary: lightPalette.onPrimary,
				},
				primary: {
					container: lightPalette.primaryContainer,
					inverse: lightPalette.inversePrimary,
					hover: primaryTones[50],
					main: lightPalette.primary,
				},
				secondary: {
					container: lightPalette.secondaryContainer,
					main: lightPalette.secondary,
				},
				tertiary: {
					container: lightPalette.tertiaryContainer,
					main: lightPalette.tertiary,
				},
				error: {
					main: lightPalette.error,
				},
			},
		},
		dark: {
			palette: {
				background: {
					default: darkPalette.surface,
				},
				surface: {
					container: {
						inverse: darkPalette.inverseSurface,
						low: darkPalette.surfaceContainerLow,
					},
				},
				on: {
					primary: darkPalette.onPrimary,
				},
				primary: {
					container: darkPalette.primaryContainer,
					hover: primaryTones[70],
					inverse: darkPalette.inversePrimary,
					main: darkPalette.primary,
				},
				secondary: {
					container: darkPalette.secondaryContainer,
					main: darkPalette.secondary,
				},
				tertiary: {
					container: darkPalette.tertiaryContainer,
					main: darkPalette.tertiary,
				},
				error: {
					main: darkPalette.error,
				},
			},
		},
	},
	typography: {
		fontFamily: "Outfit",
		logo: {
			fontFamily: "Afacad",
			fontSize: 48,
			fontStyle: "italic",
			fontWeight: "bold",
			userSelect: "none",
		},
		h3: {
			fontWeight: "bold",
		},
		clock: customComponents.typography.clock,
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "filled" },
					style: ({ theme }) => ({
						height: 40,
						color: theme.palette.on.primary,
						paddingLeft: 24,
						paddingRight: 24,
						borderRadius: 20,
						backgroundColor: theme.palette.primary.main,
						":hover": {
							backgroundColor: theme.palette.primary.hover,
						},
						textTransform: "none",
					}),
				},
				{
					props: { variant: "text" },
					style: {
						height: 40,
						paddingLeft: 12,
						paddingRight: 12,
						borderRadius: 20,
						textTransform: "none",
					},
				},
				{
					props: { variant: "outlined" },
					style: {
						height: 40,
						paddingLeft: 24,
						paddingRight: 24,
						borderRadius: 20,
						textTransform: "none",
					},
				},
			],
		},
		MuiCard: {
			variants: [
				{
					props: { variant: "elevated" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.surface.container.low,
						borderRadius: 24,
					}),
				},
			],
		},
	},
});
