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
			<Stack spacing={6} sx={{ p: 4 }}>
				<ProjectCard />
			</Stack>
		</Box>
	);
}
