import SvgIcon from "@mui/material/SvgIcon";

export default function SquigglyLine({
	fillColor = "var(--mui-palette-background-default)",
}) {
	return (
		<SvgIcon
			aria-hidden="true"
			fill="none"
			inheritViewBox
			sx={{ height: "8px", width: "100%" }}
		>
			<svg
				aria-hidden="true"
				fill="none"
				height="8"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<pattern
					height="8"
					id="separator-wave"
					patternUnits="userSpaceOnUse"
					width="30"
				>
					<path
						d="m22.8 4c5.067-4.667 10.133-4.667 15.2 0v-4h-45.6v4c5.067-4.667 10.133-4.667 15.2 0 5.067 4.667 10.133 4.667 15.2 0z"
						fill={fillColor}
					/>
					<path
						d="m38 4c-5.067-4.667-10.133-4.667-15.2 0-5.067 4.667-10.133 4.667-15.2 0-5.067-4.667-10.133-4.667-15.2 0"
						stroke="var(--mui-palette-primary-main)"
						strokeLinecap="square"
						strokeOpacity={0.3}
					/>
				</pattern>
				<rect fill="url(#separator-wave)" height="100%" width="100%" />
			</svg>
		</SvgIcon>
	);
}
