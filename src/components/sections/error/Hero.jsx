import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import breakpoints from "../../../styles/breakpoints.json";
import TARDIS from "../../../assets/svgs/TARDIS";

export default function Hero() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);
	const alignment = xs ? "center" : "end";

	const quotes = [
		"Did you just try to access a forbidden dimension? Because that's how you get lost in a labyrinth.",
		"Exterminate! Exterminate this nonexistent page!",
		"Oh, brilliant! Just what I always wanted, a blank page. Now where did I put my invisible paint?",
		"Seems we've landed in a bit of a paradox. This page? It doesn't exist.",
		"The TARDIS seems lost in the time vortex. This page may be hidden somewhere in time, or perhaps never existed at all.",
		"The Web of Time stretches far and wide, companion. Perhaps this page has simply fallen through the cracks.",
		"This anomaly is most curious. Perhaps a rogue Cyberman is manipulating the information flow.",
		"This path is clearly malfunctioning. Reverse the course!",
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
			pb={xs ? 0 : 6}
			px={xs ? 4 : 8}
		>
			<Box
				alignItems={alignment}
				color="primary.main"
				display="flex"
				fontSize={xs ? "100vw" : "40vw"}
				height={xs ? "60%" : "100%"}
				justifyContent={alignment}
				width={xs ? "100%" : "50%"}
			>
				<TARDIS />
			</Box>
			<Stack
				display="flex"
				height={xs ? "40%" : "100%"}
				justifyContent={alignment}
				spacing={xs ? 2 : 5}
				width={xs ? "100%" : "50%"}
			>
				<Typography fontSize={xs ? "6vw" : "4vw"}>
					{randomQuotes}
				</Typography>
				<Box>
					<Button
						variant={
							xs
								? "filledSmall"
								: sm
								? "filledMedium"
								: "filledLarge"
						}
						href="/"
					>
						Use the TARDIS
					</Button>
				</Box>
			</Stack>
		</Stack>
	);
}
