import { M3eIconButton } from "@m3e/react/icon-button";

import {
	LocationOn,
	Mail,
} from "@nine-thirty-five/material-symbols-react/rounded";

export default function AboutButton() {
	const buttons = [
		{
			icon: LocationOn,
			id: "location",
			label: "Location",
			link: "https://www.google.com/maps/place/Jabalpur",
		},
		{
			icon: Mail,
			id: "mail",
			label: "E-mail",
			link: "mailto:k4ustu3h@gmail.com",
		},
	];

	return buttons.map((button) => {
		const Icon = button.icon;

		return (
			<M3eIconButton
				aria-label={button.label}
				href={button.link}
				key={button.label}
				size="medium"
				style={{ marginRight: 16 }}
				variant="tonal"
			>
				<Icon />
			</M3eIconButton>
		);
	});
}
