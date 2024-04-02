import React from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export default function SocialIconButton() {
	const skills = [
		{
			icon: "simple-icons:devdotto",
			link: "https://dev.to/k4ustu3h",
		},
		{
			icon: "simple-icons:discord",
			link: "https://discordapp.com/users/391680565759180811",
		},
		{
			icon: "simple-icons:github",
			link: "https://github.com/k4ustu3h",
		},
		{
			icon: "simple-icons:instagram",
			link: "https://www.instagram.com/k4ustu3h",
		},
		{
			icon: "simple-icons:linkedin",
			link: "https://www.linkedin.com/in/k4ustu3h/",
		},
		{
			icon: "simple-icons:pinterest",
			link: "https://pinterest.com/k4ustu3h",
		},
		{
			icon: "simple-icons:reddit",
			link: "https://www.reddit.com/u/kaustubhladiya",
		},
		{
			icon: "simple-icons:snapchat",
			link: "https://www.snapchat.com/add/k4ustu3h",
		},
		{
			icon: "simple-icons:steam",
			link: "https://steamcommunity.com/id/k4ustu3h",
		},
		{
			icon: "simple-icons:telegram",
			link: "https://t.me/k4ustu3h",
		},
		{
			icon: "simple-icons:tvtime",
			link: "https://app.tvtime.com/user/22960700",
		},
		{
			icon: "simple-icons:x",
			link: "https://www.x.com/k4ustu3h",
		},
		{
			icon: "simple-icons:xdadevelopers",
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
