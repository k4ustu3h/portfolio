import { Box } from "@mui/material";
import React from "react";

export default function MonochromeIcon({ children }) {
	return (
		<Box
			alignSelf="center"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: 256,
				height: 256,
				borderRadius: "50%",
				backgroundColor: "background.default",
			}}
			fontSize={128}
			color="primary.main"
		>
			{children}
		</Box>
	);
}
