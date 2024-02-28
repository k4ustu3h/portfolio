import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
	return (
		<Box
			id="projects"
			sx={{
				bgcolor: "secondary.container",
				borderTop: 4,
				borderColor: "background.default",
			}}
		>
			<Stack p={4} spacing={6}>
				<ProjectCard />
			</Stack>
		</Box>
	);
}
