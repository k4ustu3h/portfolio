"use client";

import Box from "@mui/material/Box";
import { Loading } from "react-material";

export default function LoadingScreen() {
	return (
		<Box
			sx={{
				alignItems: "center",
				bgcolor: "#111318",
				display: "flex",
				height: "100vh",
				inset: 0,
				justifyContent: "center",
				position: "fixed",
				width: "100vw",
				zIndex: 9999,
			}}
		>
			<Box
				sx={{
					alignItems: "center",
					bgcolor: "#204876",
					borderRadius: 24,
					display: "flex",
					height: 121,
					justifyContent: "center",
					textAlign: "center",
					width: 121,
				}}
			>
				<Loading color="#D4E3FF" size={96} />
			</Box>
		</Box>
	);
}
