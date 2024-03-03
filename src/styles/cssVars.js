import experimental_extendTheme from "@mui/material/styles/experimental_extendTheme";
import pallette from "./pallette.json";
import { customComponents } from "./customComponents";

export const cssVars = experimental_extendTheme({
	colorSchemes: {
		light: {
			palette: {
				background: {
					default: pallette.schemes.light.surface,
				},
				surface: {
					container: {
						inverse: pallette.schemes.light.inverseSurface,
						low: pallette.schemes.light.surfaceContainerLow,
					},
				},
				on: {
					primary: pallette.schemes.light.onPrimary,
				},
				primary: {
					container: pallette.schemes.light.primaryContainer,
					inverse: pallette.schemes.light.inversePrimary,
					hover: pallette.palettes.primary[50],
					main: pallette.schemes.light.primary,
				},
				secondary: {
					container: pallette.schemes.light.secondaryContainer,
					main: pallette.schemes.light.secondary,
				},
				tertiary: {
					container: pallette.schemes.light.tertiaryContainer,
					main: pallette.schemes.light.tertiary,
				},
				error: {
					main: pallette.schemes.light.error,
				},
			},
		},
		dark: {
			palette: {
				background: {
					default: pallette.schemes.dark.surface,
				},
				surface: {
					container: {
						inverse: pallette.schemes.dark.inverseSurface,
						low: pallette.schemes.dark.surfaceContainerLow,
					},
				},
				on: {
					primary: pallette.schemes.dark.onPrimary,
				},
				primary: {
					container: pallette.schemes.dark.primaryContainer,
					hover: pallette.palettes.primary[70],
					inverse: pallette.schemes.dark.inversePrimary,
					main: pallette.schemes.dark.primary,
				},
				secondary: {
					container: pallette.schemes.dark.secondaryContainer,
					main: pallette.schemes.dark.secondary,
				},
				tertiary: {
					container: pallette.schemes.dark.tertiaryContainer,
					main: pallette.schemes.dark.tertiary,
				},
				error: {
					main: pallette.schemes.dark.error,
				},
			},
		},
	},
	typography: {
		fontFamily: "Outfit",
		logo: {
			fontFamily: "Afacad",
			fontStyle: "italic",
			fontSize: 48,
			fontWeight: 666,
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
