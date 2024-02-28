import { Box } from "@mui/material";
import React from "react";

export default function MonochromeIcon({
	backgroundColor,
	children,
	color,
	size,
}) {
	return (
		<Box
			alignSelf="center"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
				borderRadius: "50%",
				backgroundColor: backgroundColor,
			}}
			fontSize={size}
			color={color}
		>
			{children}
		</Box>
	);
}
