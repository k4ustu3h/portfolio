import breakpoints from "@/styles/breakpoints.json";

const md = `@media ${breakpoints.height.md}`;
const sm = `@media ${breakpoints.height.sm}`;
const xs = `@media ${breakpoints.height.xs}`;

export const customComponents = {
	button: {
		large: {
			borderRadius: {
				active: 28,
				default: 50,
			},
			height: 96,
			padding: 48,
		},
		medium: {
			borderRadius: {
				active: 16,
				default: 30,
			},
			height: 56,
			padding: 24,
		},
		small: {
			borderRadius: {
				active: 12,
				default: 20,
			},
			height: 40,
			padding: 16,
		},
	},
	typography: {
		clock: {
			fontSize: 128,
			[md]: {
				fontSize: 80,
				lineHeight: 1.8,
			},
			[sm]: {
				fontSize: 60,
				lineHeight: 2,
			},
			[xs]: {
				fontSize: 40,
				lineHeight: 2.5,
			},
		},
	},
};
