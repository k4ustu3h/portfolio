import React from "react";
import { Icon } from "@iconify/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function SkillButton() {
	const skills = [
		{
			icon: "simple-icons:kotlin",
			label: "Kotlin",
			link: "https://kotlinlang.org/",
		},
		{
			icon: "simple-icons:javascript",
			label: "JavaScript",
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			icon: "simple-icons:jetpackcompose",
			label: "Jetpack Compose",
			link: "https://developer.android.com/jetpack/compose",
		},
		{
			icon: "simple-icons:react",
			label: "ReactJS",
			link: "https://react.dev/",
		},
		{
			icon: "simple-icons:figma",
			label: "Figma",
			link: "https://www.figma.com/",
		},
		{
			icon: "simple-icons:androidstudio",
			label: "Android Studio",
			link: "https://developer.android.com/studio",
		},
		{
			icon: "simple-icons:visualstudiocode",
			label: "Visual Studio Code",
			link: "https://code.visualstudio.com/",
		},
		{
			icon: "simple-icons:materialdesign",
			label: "Material Design",
			link: "https://material.io/",
		},
		{
			icon: "simple-icons:manjaro",
			label: "Manjaro",
			link: "https://manjaro.org/",
		},
	];
	return (
		<Grid mt={1} container spacing={1}>
			{skills.map((skill) => {
				return (
					<Grid item key={skill.label}>
						<Button
							href={skill.link}
							startIcon={<Icon icon={skill.icon} width={18} />}
							variant="tonal"
						>
							{skill.label}
						</Button>
					</Grid>
				);
			})}
		</Grid>
	);
}
