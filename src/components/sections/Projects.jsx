import { Box, Typography, Stack, Container } from "@mui/material";
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
				<Typography variant="h3" pl={14} my={2}>
					Projects
				</Typography>
				<ProjectCard />
			</Stack>
		</Box>
	);
}
