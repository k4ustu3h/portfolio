import { Icon } from "@iconify/react";
import { Button, Grid, IconButton, Stack } from "@mui/material";
import React from "react";

export default function SocialIconButton() {
	const skills = [
		{
			icon: "simple-icons:codepen",
			link: "https://codepen.io/k4ustu3h",
		},
		{
			icon: "simple-icons:devdotto",
			link: "https://dev.to/k4ustu3h",
		},
		{
			icon: "simple-icons:discord",
			link: "https://discordapp.com/users/391680565759180811",
		},
		{
			icon: "simple-icons:facebook",
			link: "https://fb.me/k4ustu3h",
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
			icon: "simple-icons:paypal",
			link: "https://paypal.me/k4ustu3h",
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
		{
			icon: "simple-icons:youtube",
			link: "https://www.youtube.com/@k4ustu3h",
		},
	];
	return (
		<Stack direction="row" mt={1} spacing={1}>
			{skills.map((skill) => {
				return (
					<IconButton href={skill.link} key={skill.icon}>
						<Icon icon={skill.icon} />
					</IconButton>
				);
			})}
		</Stack>
	);
}
