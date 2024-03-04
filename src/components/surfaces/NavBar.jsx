import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollToTop from "../buttons/ScrollToTop";

export default function NavBar() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	const location = useLocation();

	const pages = [
		{ label: "Home", link: "/" },
		{ label: "About", link: "/#about" },
		{ label: "Projects", link: "/#projects" },
		{ label: "Repositories", link: "/repos" },
	];
	return (
		<AppBar
			color="transparent"
			elevation={0}
			id="back-to-top-anchor"
			position="static"
			sx={{ px: 4, py: 2 }}
		>
			<Toolbar>
				<Typography className="Logo" variant="logo">
					kl.
				</Typography>
				<div style={{ flexGrow: 1 }}></div>
				{pages.map((page, index) => {
					return (
						<Button
							color={
								location.pathname === page.link
									? "inherit"
									: "secondary"
							}
							href={page.link}
							key={page.label}
							size="large"
							sx={{
								display:
									index === 1 || index === 2
										? isSmallScreen
											? "none"
											: "inherit"
										: "",
								mx: 1,
							}}
						>
							{page.label}
						</Button>
					);
				})}
			</Toolbar>
			<ScrollToTop />
		</AppBar>
	);
}
