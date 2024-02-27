import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavBar() {
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	const display = isSmallScreen ? "none" : "inherit";

	const pages = [
		{ label: "Home", link: "/" },
		{ label: "About", link: "/#about" },
		{ label: "Projects", link: "/#projects" },
		{ label: "Repositories", link: "/repos" },
	];
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color="transparent" elevation={0} position="absolute">
				<Toolbar>
					<Box p={2} sx={{ flexGrow: 1 }}>
						<Typography variant="logo">kl.</Typography>
					</Box>
					{pages.map((page, index) => {
						return (
							<Button
								key={page.label}
								size="large"
								color="inherit"
								href={page.link}
								sx={{
									display:
										index === 1 || index === 2
											? display
											: "",
									mx: 1,
								}}
							>
								{page.label}
							</Button>
						);
					})}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
