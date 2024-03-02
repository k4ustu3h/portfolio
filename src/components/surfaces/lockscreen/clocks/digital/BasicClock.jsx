import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BasicClock() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const formattedMinutes = (minutes) =>
		minutes < 10 ? `0${minutes}` : minutes.toString();

	const hours = currentTime.toLocaleTimeString([], { hour: "2-digit" });
	const minutes = formattedMinutes(currentTime.getMinutes());

	return (
		<Box alignItems="center" display="flex" flexDirection="column">
			<Typography variant="clock">{hours}</Typography>
			<Typography
				variant="clock"
				mt={-8}
				sx={{
					letterSpacing: minutes.includes("1") ? "2px" : "normal",
				}}
			>
				{minutes}
			</Typography>
		</Box>
	);
}
