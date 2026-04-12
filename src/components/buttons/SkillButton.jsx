import {
	SiAndroid,
	SiAndroidstudio,
	SiFigma,
	SiFlutter,
	SiInkscape,
	SiJavascript,
	SiKotlin,
	SiManjaro,
	SiMaterialdesign,
	SiMui,
	SiNodedotjs,
	SiReact,
} from "@icons-pack/react-simple-icons";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import skills from "@/data/skills.json";
import VSCode from "@/assets/svgs/VSCode";

const iconMap = {
	android: SiAndroid,
	androidstudio: SiAndroidstudio,
	figma: SiFigma,
	flutter: SiFlutter,
	inkscape: SiInkscape,
	javascript: SiJavascript,
	kotlin: SiKotlin,
	manjaro: SiManjaro,
	materialdesign: SiMaterialdesign,
	mui: SiMui,
	nodedotjs: SiNodedotjs,
	react: SiReact,
	visualstudiocode: VSCode,
};

export default function SkillButton() {
	return (
		<Grid
			container
			spacing={1}
			sx={{
				mt: 1,
			}}
		>
			{skills.map((skill) => {
				const Icon = iconMap[skill.icon];

				return (
					<Grid key={skill.label}>
						<Button
							href={skill.link}
							startIcon={<Icon size={18} />}
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
