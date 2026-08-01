import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";

import TARDIS from "@/assets/svgs/TARDIS";

import SquigglyLine from "@/components/shapes/SquigglyLine";

import tardisQuotes from "@/data/tardisQuotes.json";

export default function Hero() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);
	const alignment = xs ? "center" : "end";

	const [randomQuotes, setRandomQuotes] = useState([]);

	useEffect(() => {
		const randomiseQuotes =
			tardisQuotes[Math.floor(Math.random() * tardisQuotes.length)];
		setRandomQuotes(randomiseQuotes);
	}, []);

	return (
		<Box sx={{ position: "relative", bgcolor: "background.default" }}>
			<Stack
				direction={xs ? "column" : "row-reverse"}
				sx={{
					alignItems: xs ? "" : "end",
					color: "on.surface",
					height: "89vh",
					pb: xs ? 0 : 6,
					px: xs ? 4 : 8,
				}}
			>
				<Box
					sx={{
						alignItems: alignment,
						color: "primary.main",
						display: "flex",
						fontSize: xs ? "100vw" : "40vw",
						height: xs ? "60%" : "100%",
						justifyContent: alignment,
						width: xs ? "100%" : "50%",
					}}
				>
					<TARDIS />
				</Box>
				<Stack
					spacing={xs ? 2 : 5}
					sx={{
						display: "flex",
						height: xs ? "40%" : "100%",
						justifyContent: alignment,
						width: xs ? "100%" : "50%",
					}}
				>
					<Typography sx={{ fontSize: xs ? "6vw" : "4vw" }}>
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
			</Stack>{" "}
			<Box
				sx={{
					bottom: "-14px",
					left: 0,
					position: "relative",
					width: "100%",
				}}
			>
				<SquigglyLine />
			</Box>
		</Box>
	);
}
