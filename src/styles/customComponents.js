import breakpoints from "./breakpoints.json";

const md = `@media ${breakpoints.height.md}`;
const sm = `@media ${breakpoints.height.sm}`;
const xs = `@media ${breakpoints.height.xs}`;

export const customComponents = {
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
