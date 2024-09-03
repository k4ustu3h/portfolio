import React from "react";
import { Icon } from "@iconify/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

export default function SkillButton() {
	const skills = [
		{
			icon: "simple-icons:adobeillustrator",
			label: "Adobe Illustrator",
			link: "https://www.adobe.com/products/illustrator.html",
		},
		{
			icon: "simple-icons:adobephotoshop",
			label: "Adobe Photoshop",
			link: "https://www.adobe.com/products/photoshop.html",
		},
		{
			icon: "simple-icons:androidstudio",
			label: "Android Studio",
			link: "https://developer.android.com/studio",
		},
		{
			icon: "simple-icons:figma",
			label: "Figma",
			link: "https://www.figma.com/",
		},
		{
			icon: "simple-icons:inkscape",
			label: "Inkscape",
			link: "https://inkscape.org/",
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
			icon: "simple-icons:kotlin",
			label: "Kotlin",
			link: "https://kotlinlang.org/",
		},
		{
			icon: "simple-icons:manjaro",
			label: "Manjaro",
			link: "https://manjaro.org/",
		},
		{
			icon: "simple-icons:materialdesign",
			label: "Material Design",
			link: "https://material.io/",
		},
		{
			icon: "simple-icons:mui",
			label: "MUI",
			link: "https://mui.com/",
		},
		{
			icon: "simple-icons:nodedotjs",
			label: "NodeJS",
			link: "https://nodejs.org/",
		},
		{
			icon: "simple-icons:react",
			label: "ReactJS",
			link: "https://react.dev/",
		},
		{
			icon: "simple-icons:visualstudiocode",
			label: "Visual Studio Code",
			link: "https://code.visualstudio.com/",
		},
	];
	return (
		<Grid mt={1} container spacing={1}>
			{skills.map((skill) => {
				return (
					<Grid key={skill.label}>
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
