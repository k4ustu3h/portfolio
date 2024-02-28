import { Box } from "@mui/material";
import React from "react";

export default function MonochromeIcon({ children, props }) {
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
				backgroundColor: "background.default",
			}}
			fontSize={props}
			color="primary.main"
		>
			{children}
		</Box>
	);
}
