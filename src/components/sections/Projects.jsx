import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import ProjectCard from "@/components/cards/ProjectCard";
import SquigglyLine from "@/components/shapes/SquigglyLine";

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
			<Box
				sx={{
					position: "relative",
					bottom: "-14px",
					left: 0,
					width: "100%",
				}}
			>
				<SquigglyLine fillColor="var(--mui-palette-section-projects)" />
			</Box>
		</Box>
	);
}
