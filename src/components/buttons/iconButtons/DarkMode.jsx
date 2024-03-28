import React from "react";
import { Icon } from "@iconify/react";
import { useColorScheme } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export default function DarkMode() {
	const { mode, setMode } = useColorScheme();
	return (
		<Box>
			<IconButton
				color="inherit"
				onClick={() => {
					setMode(mode === "light" ? "dark" : "light");
				}}
			>
				{mode === "light" ? (
					<Icon icon="material-symbols:light-mode" />
				) : (
					<Icon icon="material-symbols:dark-mode" />
				)}
			</IconButton>
		</Box>
	);
}
