import React from "react";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";

export default function AboutButton() {
	const buttons = [
		{
			icon: "ic:baseline-location-on",
			label: "Location",
			link: "https://www.google.com/maps/place/Jabalpur",
		},
		{
			icon: "ic:baseline-mail",
			label: "E-mail",
			link: "mailto:k4ustu3h@gmail.com",
		},
	];
	return buttons.map((button) => {
		return (
			<IconButton
				aria-label={button.label}
				href={button.link}
				key={button.icon}
				size="large"
				sx={{ mr: 2 }}
				variant="tonal"
			>
				<Icon icon={button.icon} />
			</IconButton>
		);
	});
}
