import { M3eIconButton } from "@m3e/react/icon-button";

import {
	SiDiscord,
	SiGithub,
	SiInstagram,
	SiSnapchat,
	SiSteam,
	SiTelegram,
	SiTvtime,
	SiX,
	SiXdadevelopers,
} from "@icons-pack/react-simple-icons";

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
