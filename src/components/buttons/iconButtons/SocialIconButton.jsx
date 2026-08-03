import { M3eIconButton } from "@m3e/react/icon-button";

import SiDiscord from "@icons-pack/react-simple-icons/icons/SiDiscord";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiInstagram from "@icons-pack/react-simple-icons/icons/SiInstagram";
import SiSnapchat from "@icons-pack/react-simple-icons/icons/SiSnapchat";
import SiSteam from "@icons-pack/react-simple-icons/icons/SiSteam";
import SiTelegram from "@icons-pack/react-simple-icons/icons/SiTelegram";
import SiTvtime from "@icons-pack/react-simple-icons/icons/SiTvtime";
import SiX from "@icons-pack/react-simple-icons/icons/SiX";
import SiXdadevelopers from "@icons-pack/react-simple-icons/icons/SiXdadevelopers";

import LinkedIn from "@/assets/svgs/LinkedIn";

import socials from "@/data/socials.json";

const iconMap = {
	discord: SiDiscord,
	github: SiGithub,
	instagram: SiInstagram,
	linkedin: LinkedIn,
	snapchat: SiSnapchat,
	steam: SiSteam,
	telegram: SiTelegram,
	tvtime: SiTvtime,
	x: SiX,
	xdadevelopers: SiXdadevelopers,
};

export default function SocialIconButton() {
	return (
		<div
			style={{
				color: "section.footer.text",
				display: "flex",
				flexWrap: "wrap",
				gap: 1,
				justifyContent: "center",
			}}
		>
			{socials.map((social) => {
				const Icon = iconMap[social.icon];

				return (
					<M3eIconButton
						aria-label={social.label}
						color="inherit"
						href={social.link}
						key={social.icon}
					>
						<Icon size={24} />
					</M3eIconButton>
				);
			})}
		</div>
	);
}
