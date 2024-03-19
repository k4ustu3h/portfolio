import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import bhaktapurDurbarSquare from "../../assets/images/bhaktapur_durbar_square.jpg";
import breakpoints from "../../styles/breakpoints.json";
import LockScreenOverlay from "./lockscreen/LockScreenOverlay";

export default function LockScreen() {
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<Box
			borderRadius={8}
			color="primary.main"
			height={xs ? "60vh" : "80vh"}
			sx={{
				aspectRatio: 9 / 20,
				backgroundImage: `url(${bhaktapurDurbarSquare})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<LockScreenOverlay />
		</Box>
	);
}
