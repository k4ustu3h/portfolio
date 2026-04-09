import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import socials from "@/data/socials.json";

export default function SocialIconButton() {
	return (
		<Box
			sx={{
				color: "section.footer.text",
				display: "flex",
				flexWrap: "wrap",
				gap: 1,
				justifyContent: "center",
			}}
		>
			{socials.map((social) => {
				return (
					<IconButton
						aria-label={social.label}
						color="inherit"
						href={social.link}
						key={social.icon}
					>
						<Icon icon={social.icon} />
					</IconButton>
				);
			})}
		</Box>
	);
}
