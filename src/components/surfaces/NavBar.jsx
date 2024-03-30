import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../styles/breakpoints.json";
import ScrollToTop from "../buttons/ScrollToTop";

export default function NavBar() {
	const xs = useMediaQuery(breakpoints.width.xs);

	const pathName = usePathname();

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
					const aboutAndProjects = index === 1 || index === 2;
					return (
						<Button
							color={
								pathName === page.link ? "inherit" : "secondary"
							}
							component={aboutAndProjects ? Button : Link}
							href={page.link}
							key={page.label}
							size="large"
							sx={{
								display: aboutAndProjects
									? xs
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
