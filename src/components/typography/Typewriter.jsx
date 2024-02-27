import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
	return (
		<TypeAnimation
			className="type"
			cursor={false}
			deletionSpeed={150}
			repeat={0}
			sequence={[
				"web developer",
				600,
				"android developer",
				600,
				"copy paster...",
			]}
			speed={250}
		/>
	);
}
