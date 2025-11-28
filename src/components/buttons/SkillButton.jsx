import { Icon } from "@iconify/react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import skills from "@/data/skills.json";

export default function SkillButton() {
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
