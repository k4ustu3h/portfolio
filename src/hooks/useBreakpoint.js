import { useEffect, useState } from "react";

import breakpoints from "@/styles/breakpoints.json";

export default function useBreakpoint(height = false) {
	const [breakpoint, setBreakpoint] = useState("xl");

	useEffect(() => {
		const activeBreakpoints = height
			? breakpoints.height
			: breakpoints.width;

		const queries = {
			xs: window.matchMedia(activeBreakpoints.xs),
			sm: window.matchMedia(activeBreakpoints.sm),
			md: window.matchMedia(activeBreakpoints.md),
			lg: window.matchMedia(activeBreakpoints.lg),
			xl: window.matchMedia(activeBreakpoints.xl),
		};

		const updateBreakpoint = () => {
			if (queries.xs.matches) setBreakpoint("xs");
			else if (queries.sm.matches) setBreakpoint("sm");
			else if (queries.md.matches) setBreakpoint("md");
			else if (queries.lg.matches) setBreakpoint("lg");
			else if (queries.xl.matches) setBreakpoint("xl");
		};

		updateBreakpoint();

		Object.values(queries).forEach((q) =>
			q.addEventListener("change", updateBreakpoint),
		);

		return () => {
			Object.values(queries).forEach((q) =>
				q.removeEventListener("change", updateBreakpoint),
			);
		};
	}, [height]);

	return breakpoint;
}
