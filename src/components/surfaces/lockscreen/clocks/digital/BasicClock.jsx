import { useEffect, useState } from "react";

import useBreakpoint from "@/hooks/useBreakpoint";

import { clockDimensions } from "@/styles/dimensions";

export default function BasicClock() {
	const [time, setTime] = useState(new Date());

	const breakpoint = useBreakpoint(true);
	const { fontSize, lineHeight, marginTop } = clockDimensions[breakpoint];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const formattedTime = (value) => String(value).padStart(2, "0");

	const hours = formattedTime(time.getHours());
	const minutes = formattedTime(time.getMinutes());

	const getLetterSpacing = (value) =>
		String(value).includes("1") ? "2px" : "normal";

	return (
		<div
			style={{
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
			}}
		>
			<div
				style={{
					fontSize,
					lineHeight,
					letterSpacing: getLetterSpacing(hours),
				}}
			>
				{hours}
			</div>
			<div
				style={{
					fontSize,
					lineHeight,
					marginTop,
					letterSpacing: getLetterSpacing(minutes),
				}}
			>
				{minutes}
			</div>
		</div>
	);
}
