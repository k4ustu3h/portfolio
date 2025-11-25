import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollToTop() {
	const trigger = useScrollTrigger({
		threshold: 100,
	});

	const handleClick = () => {
		const anchor = document.querySelector("#back-to-top-anchor");
		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	return (
		<Slide direction="up" in={trigger} mountOnEnter unmountOnExit>
			<Box
				onClick={handleClick}
				sx={{ position: "fixed", zIndex: 20, right: 16, bottom: 16 }}
			>
				<Fab variant="scroll-to-top">
					<Icon
						icon="material-symbols:keyboard-arrow-up-rounded"
						width="24"
					/>
				</Fab>
			</Box>
		</Slide>
	);
}
