import { experimental_extendTheme } from "@mui/material";
import pallette from "./pallette.json";
import { customComponents } from "./customComponents";

const darkPalette = pallette.schemes.dark;
const lightPalette = pallette.schemes.light;
const primaryTones = pallette.palettes.primary;
const secondaryTones = pallette.palettes.secondary;

export const cssVars = experimental_extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				background: {
					default: darkPalette.surface,
				},
				error: {
					main: darkPalette.error,
				},
				on: {
					primary: darkPalette.onPrimary,
					surface: {
						main: darkPalette.onSurface,
						variant: darkPalette.onSurfaceVariant,
					},
				},
				primary: {
					container: darkPalette.primaryContainer,
					hover: primaryTones[70],
					inverse: darkPalette.inversePrimary,
					main: darkPalette.primary,
				},
				secondary: {
					container: darkPalette.secondaryContainer,
					hover: secondaryTones[25],
					main: darkPalette.secondary,
					on: {
						container: darkPalette.onSecondaryContainer,
					},
				},
				section: {
					about: {
						background: pallette.coreColors.primary,
						text: darkPalette.onPrimaryFixed,
					},
					projects: darkPalette.secondaryFixed,
					footer: {
						background: darkPalette.tertiaryContainer,
						text: darkPalette.onTertiaryContainer,
					},
				},
				surface: {
					container: {
						high: darkPalette.surfaceContainerHigh,
						inverse: darkPalette.inverseSurface,
						low: darkPalette.surfaceContainerLow,
					},
				},
				tertiary: {
					container: darkPalette.tertiaryContainer,
					main: darkPalette.tertiary,
				},
			},
		},
		light: {
			palette: {
				background: {
					default: lightPalette.surface,
				},
				error: {
					main: lightPalette.error,
				},
				on: {
					primary: lightPalette.onPrimary,
					surface: {
						main: lightPalette.onSurface,
						variant: lightPalette.onSurfaceVariant,
					},
				},
				primary: {
					container: lightPalette.primaryContainer,
					hover: primaryTones[50],
					inverse: lightPalette.inversePrimary,
					main: lightPalette.primary,
				},
				secondary: {
					container: lightPalette.secondaryContainer,
					hover: secondaryTones[95],
					main: lightPalette.secondary,
					on: {
						container: lightPalette.onSecondaryContainer,
					},
				},
				section: {
					about: {
						background: pallette.coreColors.primary,
						text: lightPalette.onPrimaryFixed,
					},
					projects: lightPalette.secondaryFixed,
					footer: {
						background: lightPalette.tertiaryContainer,
						text: lightPalette.onTertiaryContainer,
					},
				},
				surface: {
					container: {
						high: lightPalette.surfaceContainerHigh,
						inverse: lightPalette.inverseSurface,
						low: lightPalette.surfaceContainerLow,
					},
				},
				tertiary: {
					container: lightPalette.tertiaryContainer,
					main: lightPalette.tertiary,
				},
			},
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "filled" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.primary.main,
						borderRadius: 20,
						color: theme.palette.on.primary,
						height: 40,
						paddingLeft: 24,
						paddingRight: 24,
						textTransform: "none",
						":hover": {
							backgroundColor: theme.palette.primary.hover,
						},
					}),
				},
				{
					props: { variant: "outlined" },
					style: {
						borderRadius: 20,
						height: 40,
						paddingLeft: 24,
						paddingRight: 24,
						textTransform: "none",
					},
				},
				{
					props: { variant: "text" },
					style: {
						borderRadius: 20,
						height: 40,
						paddingLeft: 12,
						paddingRight: 12,
						textTransform: "none",
					},
				},
				{
					props: { variant: "tonal" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.secondary.container,
						borderRadius: 20,
						color: theme.palette.secondary.on.container,
						height: 40,
						paddingLeft: 24,
						paddingRight: 24,
						textTransform: "none",
						":hover": {
							backgroundColor: theme.palette.secondary.hover,
						},
					}),
				},
			],
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 24,
				},
			},
			variants: [
				{
					props: { variant: "elevated" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.surface.container.low,
						color: theme.palette.on.surface.main,
					}),
				},
			],
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					justifyContent: "end",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					paddingLeft: 32,
					paddingRight: 32,
					paddingTop: 32,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
				label: {
					paddingLeft: 16,
					paddingRight: 16,
				},
			},
			variants: [
				{
					props: { variant: "filled" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.surface.container.high,
						color: theme.palette.on.surfaceVariant,
					}),
				},
			],
		},
		MuiFab: {
			variants: [
				{
					props: { variant: "scroll-to-top" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.secondary.container,
						borderRadius: 16,
						color: theme.palette.secondary.on.container,
						":hover": {
							backgroundColor: theme.palette.secondary.hover,
						},
					}),
				},
			],
		},
		MuiIconButton: {
			variants: [
				{
					props: { variant: "tonal" },
					style: ({ theme }) => ({
						backgroundColor: theme.palette.secondary.container,
						color: theme.palette.secondary.on.container,
						":hover": {
							backgroundColor: theme.palette.secondary.hover,
						},
					}),
				},
			],
		},
	},
	typography: {
		clock: customComponents.typography.clock,
		fontFamily: "Outfit",
		h3: {
			fontWeight: "bold",
		},
		heroPrimaryHeading: {
			fontWeight: 700,
			textDecoration: "underline",
			transitionProperty: "font-weight, letter-spacing",
			transition: "150ms linear",
			":hover": {
				fontWeight: 900,
				letterSpacing: 1,
			},
		},
		logo: {
			fontFamily: "Afacad",
			fontSize: 48,
			fontStyle: "italic",
			fontWeight: "bold",
			userSelect: "none",
		},
	},
});
