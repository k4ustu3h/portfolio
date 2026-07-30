import { useState, useEffect } from "react";

import { M3eShape } from "@m3e/react/shape";

import shapes from "@/data/shapes.json";

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
		<>
			<div
				style={{ alignItems: "flex-end", display: "flex", gap: "2vw" }}
			>
				<div
					style={{
						animation: "spin 10s linear infinite",
						display: "flex",
						"--m3e-shape-container-color":
							"var(--md-sys-color-secondary)",
					}}
				>
					<M3eShape
						name={shapeOne}
						style={{
							transition: "all 0.5s ease",
							"--m3e-shape-size": xs ? "16vw" : "6vw",
						}}
					/>
				</div>
				<div
					style={{
						animation: "spin 15s linear infinite reverse",
						display: "flex",
						"--m3e-shape-container-color":
							"var(--md-sys-color-tertiary)",
					}}
				>
					<M3eShape
						name={shapeTwo}
						style={{
							transition: "all 0.5s ease",
							"--m3e-shape-size": xs ? "10vw" : "4vw",
						}}
					/>
				</div>
			</div>
		</>
	);
}
