import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export default function SocialIconButton() {
	const skills = [
		{
			icon: "simple-icons:discord",
			label: "Discord",
			link: "https://discordapp.com/users/391680565759180811",
		},
		{
			icon: "simple-icons:github",
			label: "GitHub",
			link: "https://github.com/k4ustu3h",
		},
		{
			icon: "simple-icons:instagram",
			label: "Instagram",
			link: "https://www.instagram.com/k4ustu3h",
		},
		{
			icon: "simple-icons:linkedin",
			label: "LinkedIn",
			link: "https://www.linkedin.com/in/k4ustu3h/",
		},
		{
			icon: "simple-icons:snapchat",
			label: "Snapchat",
			link: "https://www.snapchat.com/add/k4ustu3h",
		},
		{
			icon: "simple-icons:steam",
			label: "Steam",
			link: "https://steamcommunity.com/id/k4ustu3h",
		},
		{
			icon: "simple-icons:telegram",
			label: "Telegram",
			link: "https://t.me/k4ustu3h",
		},
		{
			icon: "simple-icons:tvtime",
			label: "TV Time",
			link: "https://app.tvtime.com/user/22960700",
		},
		{
			icon: "simple-icons:x",
			label: "X",
			link: "https://www.x.com/k4ustu3h",
		},
		{
			icon: "simple-icons:xdadevelopers",
			label: "XDA Developers",
			link: "https://forum.xda-developers.com/member.php?u=9461231",
		},
	];
	return (
		<Box
			color="section.footer.text"
			display="flex"
			flexWrap="wrap"
			justifyContent="center"
			gap={1}
		>
			{skills.map((skill) => {
				return (
					<IconButton
						aria-label={skill.label}
						color="inherit"
						href={skill.link}
						key={skill.icon}
					>
						<Icon icon={skill.icon} />
					</IconButton>
				);
			})}
		</Box>
	);
}
