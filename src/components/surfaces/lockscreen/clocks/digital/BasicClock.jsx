import { useEffect, useState } from "react";

export default function BasicClock() {
	const [time, setTime] = useState(new Date());

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
			}}
		>
			<div
				className="clock-typography"
				style={{ letterSpacing: getLetterSpacing(hours) }}
			>
				{hours}
			</div>
			<div
				className="clock-typography"
				style={{
					marginTop: "-64px",
					letterSpacing: getLetterSpacing(minutes),
				}}
			>
				{minutes}
			</div>
		</div>
	);
}
