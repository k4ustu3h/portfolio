import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import bhaktapurDurbarSquare from "../../assets/images/bhaktapur_durbar_square.jpg";
import LockScreenOverlay from "./lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	return (
		<Box
			borderRadius={8}
			color="primary.main"
			height={isSmallScreen ? "60vh" : "80vh"}
			sx={{
				aspectRatio: 9 / 20,
				backgroundImage: `url(${bhaktapurDurbarSquare})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				fontWeight: 700,
				transition: "250ms linear",
				transitionProperty: "font-weight",
				userSelect: "none",
				":hover": {
					fontWeight: 300,
					color: "white",
				},
			}}
		>
			<LockScreenOverlay />
		</Box>
	);
}
