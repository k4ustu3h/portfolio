import React from "react";
import Box from "@mui/material/Box";

export default function MonochromeIcon({
	backgroundColor,
	children,
	color,
	size,
}) {
	return (
		<Box
			sx={{
				alignItems: "center",
				alignSelf: "center",
				backgroundColor: backgroundColor,
				borderRadius: "50%",
				color: color,
				display: "flex",
				fontSize: size,
				height: "100%",
				justifyContent: "center",
				width: "100%",
			}}
		>
			{children}
		</Box>
	);
}
