import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../styles/breakpoints.json";
import Tardis from "../../assets/svgs/Tardis";

export default function Hero() {
	const xs = useMediaQuery(breakpoints.width.xs);

	const quotes = [
		"Seems we've landed in a bit of a paradox. This page? It doesn't exist.",
		"The TARDIS seems lost in the time vortex. This page may be hidden somewhere in time, or perhaps never existed at all.",
		"Exterminate! Exterminate this nonexistent page!",
		"Did you just try to access a forbidden dimension? Because that's how you get lost in a labyrinth.",
		"This path is clearly malfunctioning. Reverse the course!",
		"Oh, brilliant! Just what I always wanted, a blank page. Now where did I put my invisible paint?",
		"This anomaly is most curious. Perhaps a rogue Cyberman is manipulating the information flow.",
	];

	const [randomQuotes, setRandomQuotes] = useState([]);

	useEffect(() => {
		const randomiseQuotes =
			quotes[Math.floor(Math.random() * quotes.length)];
		setRandomQuotes(randomiseQuotes);
	}, []);

	return (
		<Stack
			alignItems={xs ? "" : "end"}
			color="on.surface"
			direction={xs ? "column" : "row-reverse"}
			height="89vh"
			px={xs ? 4 : 8}
			pt={xs ? 10 : 0}
			pb={xs ? 0 : 6}
			spacing={xs ? 10 : 0}
		>
			<Box
				display="flex"
				fontSize={xs ? "100vw" : "40vw"}
				justifyContent={xs ? "center" : "end"}
				width={xs ? "100%" : "50%"}
			>
				<Tardis />
			</Box>
			<Stack spacing={xs ? 2 : 5} width={xs ? "100%" : "50%"}>
				<Typography fontSize={xs ? "6vw" : "4vw"}>
					{randomQuotes}
				</Typography>
				<Box>
					<Button variant="filled" href="/">
						Go back to Home
					</Button>
				</Box>
			</Stack>
		</Stack>
	);
}
