"use client";

import { createTheme } from "@mui/material";
import { afacad, googleSansFlex } from "@/app/fonts";
import { customComponents } from "@/styles/customComponents";

const cc = customComponents;

const logoTypeface = afacad.style.fontFamily;

export const getCSSVars = (palette) => {
	const darkPalette = palette.schemes.dark;
	const lightPalette = palette.schemes.light;
	const primaryTones = palette.palettes.primary;
	const secondaryTones = palette.palettes.secondary;

	return createTheme({
		cssVariables: true,
		colorSchemes: {
			dark: {
				palette: {
					background: {
						default: darkPalette.surface,
						inverse: darkPalette.inverseSurface,
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
							background: primaryTones[50],
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
						inverse: lightPalette.inverseSurface,
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
							background: primaryTones[60],
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
				styleOverrides: {
					root: {
						transition: "border-radius 0.1s ease",
					},
				},
				variants: [
					{
						props: { variant: "filledSmall" },
						style: ({ theme }) => ({
							backgroundColor: theme.vars.palette.primary.main,
							borderRadius: cc.button.small.borderRadius.default,
							color: theme.vars.palette.on.primary,
							height: cc.button.small.height,
							paddingLeft: cc.button.small.padding,
							paddingRight: cc.button.small.padding,
							textTransform: "none",
							":active": {
								borderRadius:
									cc.button.small.borderRadius.active,
							},
							":hover": {
								backgroundColor:
									theme.vars.palette.primary.hover,
							},
						}),
					},
					{
						props: { variant: "filledMedium" },
						style: ({ theme }) => ({
							backgroundColor: theme.vars.palette.primary.main,
							borderRadius: cc.button.medium.borderRadius.default,
							color: theme.vars.palette.on.primary,
							fontSize: 21,
							height: cc.button.medium.height,
							paddingLeft: cc.button.medium.padding,
							paddingRight: cc.button.medium.padding,
							textTransform: "none",
							":active": {
								borderRadius:
									cc.button.medium.borderRadius.active,
							},
							":hover": {
								backgroundColor:
									theme.vars.palette.primary.hover,
							},
						}),
					},
					{
						props: { variant: "filledLarge" },
						style: ({ theme }) => ({
							backgroundColor: theme.vars.palette.primary.main,
							borderRadius: cc.button.large.borderRadius.default,
							color: theme.vars.palette.on.primary,
							fontSize: 28,
							height: cc.button.large.height,
							paddingLeft: cc.button.large.padding,
							paddingRight: cc.button.large.padding,
							textTransform: "none",
							":active": {
								borderRadius:
									cc.button.large.borderRadius.active,
							},
							":hover": {
								backgroundColor:
									theme.vars.palette.primary.hover,
							},
						}),
					},
					{
						props: { variant: "outlined" },
						style: {
							borderRadius: cc.button.small.borderRadius.default,
							height: cc.button.small.height,
							paddingLeft: cc.button.small.padding,
							paddingRight: cc.button.small.padding,
							textTransform: "none",
							":active": {
								borderRadius:
									cc.button.small.borderRadius.active,
							},
						},
					},
					{
						props: { variant: "text" },
						style: {
							borderRadius: cc.button.small.borderRadius.default,
							height: cc.button.small.height,
							paddingLeft: cc.button.small.padding,
							paddingRight: cc.button.small.padding,
							textTransform: "none",
							":active": {
								borderRadius:
									cc.button.small.borderRadius.active,
							},
						},
					},
					{
						props: { variant: "tonal" },
						style: ({ theme }) => ({
							backgroundColor:
								theme.vars.palette.secondary.container,
							borderRadius: cc.button.small.borderRadius.default,
							color: theme.vars.palette.secondary.on.container,
							height: cc.button.small.height,
							paddingLeft: cc.button.small.padding,
							paddingRight: cc.button.small.padding,
							textTransform: "none",
							":active": {
								borderRadius:
									cc.button.small.borderRadius.active,
							},
							":hover": {
								backgroundColor:
									theme.vars.palette.secondary.hover,
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
							backgroundColor:
								theme.vars.palette.surface.container.low,
							color: theme.vars.palette.on.surface.main,
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
						props: { variant: "filledSmall" },
						style: ({ theme }) => ({
							backgroundColor:
								theme.vars.palette.surface.container.high,
							color: theme.vars.palette.on.surfaceVariant,
						}),
					},
				],
			},
			MuiFab: {
				variants: [
					{
						props: { variant: "scroll-to-top" },
						style: ({ theme }) => ({
							backgroundColor:
								theme.vars.palette.secondary.container,
							borderRadius: 16,
							color: theme.vars.palette.secondary.on.container,
							":hover": {
								backgroundColor:
									theme.vars.palette.secondary.hover,
							},
						}),
					},
				],
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						transition: "border-radius 0.1s ease",
						":active": {
							borderRadius: cc.button.small.borderRadius.active,
						},
					},
				},
				variants: [
					{
						props: { variant: "tonal" },
						style: ({ theme }) => ({
							backgroundColor:
								theme.vars.palette.secondary.container,
							color: theme.vars.palette.secondary.on.container,
							":hover": {
								backgroundColor:
									theme.vars.palette.secondary.hover,
							},
						}),
					},
				],
			},
		},
		typography: {
			clock: cc.typography.clock,
			fontFamily: googleSansFlex.style.fontFamily,
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
				animation: "gradient 8s ease-in-out infinite",
				background: "linear-gradient(90deg, #d50000, #a0f, #2962ff)",
				backgroundClip: "text",
				backgroundSize: "200% 200%",
				fontFamily: logoTypeface,
				fontSize: 48,
				fontStyle: "italic",
				fontWeight: "bold",
				transition: "background 0.5s ease",
				userSelect: "none",
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
			},
			logoMonochrome: {
				fontFamily: logoTypeface,
				fontSize: 48,
				fontStyle: "italic",
				fontWeight: "bold",
				userSelect: "none",
			},
		},
	});
};
