const xs = "@media (max-width: 600px)";
const sm = "@media (min-width: 600px) and (max-width: 900px)";
const md = "@media (min-width: 900px) and (max-width: 1200px)";
const lg = "@media (min-width: 1200px) and (max-width: 1536px)";
const xl = "@media (min-width: 1536px)";

export const customComponents = {
	typography: {
		clock: {
			fontSize: 128,
			[xs]: {
				fontSize: 100,
			},
		},
	},
};
