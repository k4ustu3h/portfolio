import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
		String(value).includes("1") ? 2 : "normal";

	return (
		<Box alignItems="center" display="flex" flexDirection="column">
			<Typography
				variant="clock"
				sx={{ letterSpacing: getLetterSpacing(hours) }}
			>
				{hours}
			</Typography>
			<Typography
				mt={-8}
				variant="clock"
				sx={{ letterSpacing: getLetterSpacing(minutes) }}
			>
				{minutes}
			</Typography>
		</Box>
	);
}
