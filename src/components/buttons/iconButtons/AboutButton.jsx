import {
	LocationOn,
	Mail,
} from "@nine-thirty-five/material-symbols-react/rounded";
import IconButton from "@mui/material/IconButton";

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
			<IconButton
				aria-label={button.label}
				href={button.link}
				key={button.icon}
				size="large"
				sx={{ mr: 2 }}
				variant="tonal"
			>
				<Icon />
			</IconButton>
		);
	});
}
