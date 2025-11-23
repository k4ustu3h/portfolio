import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
	return (
		<Box
			id="projects"
			sx={{
				bgcolor: "section.projects",
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
