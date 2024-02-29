import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollToTop from "../buttons/ScrollToTop";

export default function NavBar() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

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
			position="absolute"
			sx={{ px: 4, py: 2 }}
		>
			<Toolbar>
				<Typography flexGrow={1} variant="logo">
					kl.
				</Typography>
				{pages.map((page, index) => {
					return (
						<Button
							color="inherit"
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
