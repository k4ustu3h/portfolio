import { Box, Stack } from "@mui/material";
import React from "react";
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
