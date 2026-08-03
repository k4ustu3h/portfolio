import { M3eButton } from "@m3e/react/button";

import SiAndroid from "@icons-pack/react-simple-icons/icons/SiAndroid";
import SiAndroidstudio from "@icons-pack/react-simple-icons/icons/SiAndroidstudio";
import SiFigma from "@icons-pack/react-simple-icons/icons/SiFigma";
import SiFlutter from "@icons-pack/react-simple-icons/icons/SiFlutter";
import SiInkscape from "@icons-pack/react-simple-icons/icons/SiInkscape";
import SiJavascript from "@icons-pack/react-simple-icons/icons/SiJavascript";
import SiKotlin from "@icons-pack/react-simple-icons/icons/SiKotlin";
import SiManjaro from "@icons-pack/react-simple-icons/icons/SiManjaro";
import SiMaterialdesign from "@icons-pack/react-simple-icons/icons/SiMaterialdesign";
import SiMui from "@icons-pack/react-simple-icons/icons/SiMui";
import SiNodedotjs from "@icons-pack/react-simple-icons/icons/SiNodedotjs";
import SiReact from "@icons-pack/react-simple-icons/icons/SiReact";

import skills from "@/data/skills.json";

import M3E from "@/assets/svgs/M3E";
import VSCode from "@/assets/svgs/VSCode";

const iconMap = {
	android: SiAndroid,
	androidstudio: SiAndroidstudio,
	figma: SiFigma,
	flutter: SiFlutter,
	inkscape: SiInkscape,
	javascript: SiJavascript,
	kotlin: SiKotlin,
	m3e: M3E,
	manjaro: SiManjaro,
	materialdesign: SiMaterialdesign,
	mui: SiMui,
	nodedotjs: SiNodedotjs,
	react: SiReact,
	visualstudiocode: VSCode,
};

export default function SkillButton() {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: "8px",
				marginTop: "8px",
			}}
		>
			{skills.map((skill) => {
				const Icon = iconMap[skill.icon];

				return (
					<M3eButton
						href={skill.link}
						key={skill.label}
						variant="tonal"
					>
						<Icon size={18} slot="icon" />
						{skill.label}
					</M3eButton>
				);
			})}
		</div>
	);
}
