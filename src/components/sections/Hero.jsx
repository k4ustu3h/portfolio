import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import AnimatedShapes from "@/components/shapes/AnimatedShapes";
import breakpoints from "@/styles/breakpoints.json";
import LockScreen from "@/components/surfaces/LockScreen";
import Typewriter from "@/components/typography/Typewriter";

export default function Hero() {
	const xs = useMediaQuery(breakpoints.width.xs);

	return (
		<Stack
			direction={xs ? "column" : "row-reverse"}
			spacing={xs ? 6 : 0}
			sx={{
				alignItems: xs ? "" : "end",
				bgcolor: "background.default",
				color: "on.surface",
				height: "89vh",
				pb: xs ? 10 : 6,
				px: xs ? 4 : 8,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					pb: xs ? 0 : 2,
					width: xs ? "100%" : "50%",
				}}
			>
				<LockScreen />
			</Box>
			<Box
				className="Hero"
				sx={{
					fontSize: xs ? "8vw" : "4vw",
					width: xs ? "100%" : "50%",
				}}
			>
				<AnimatedShapes xs={xs} />
				<Typography variant="heroPrimaryHeading">
					Just another
				</Typography>
				<br />
				<Typewriter />
			</Box>
		</Stack>
	);
}
