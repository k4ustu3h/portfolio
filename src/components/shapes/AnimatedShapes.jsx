import { useState, useEffect } from "react";

import { keyframes } from "@mui/material";
import { M3eShape } from "@m3e/react/shape";
import Box from "@mui/material/Box";

import shapes from "@/data/shapes.json";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export default function AnimatedShapes({ xs }) {
	const [shapeOne, setShapeOne] = useState("12-sided-cookie");
	const [shapeTwo, setShapeTwo] = useState("pill");

	useEffect(() => {
		const interval = setInterval(() => {
			const randomOne = shapes[Math.floor(Math.random() * shapes.length)];
			const randomTwo = shapes[Math.floor(Math.random() * shapes.length)];

			setShapeOne(randomOne);
			setShapeTwo(randomTwo);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Box sx={{ alignItems: "flex-end", display: "flex", gap: "2vw" }}>
			<Box
				sx={{
					animation: `${spin} 10s linear infinite`,
					display: "flex",
					"--m3e-shape-container-color": (theme) =>
						theme.vars.palette.secondary.main,
				}}
			>
				<M3eShape
					name={shapeOne}
					style={{
						transition: "all 0.5s ease",
						"--m3e-shape-size": xs ? "16vw" : "6vw",
					}}
				/>
			</Box>
			<Box
				sx={{
					animation: `${spin} 15s linear infinite reverse`,
					display: "flex",
					"--m3e-shape-container-color": (theme) =>
						theme.vars.palette.tertiary.main,
				}}
			>
				<M3eShape
					name={shapeTwo}
					style={{
						transition: "all 0.5s ease",
						"--m3e-shape-size": xs ? "10vw" : "4vw",
					}}
				/>
			</Box>
		</Box>
	);
}
