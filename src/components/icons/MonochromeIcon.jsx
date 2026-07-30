export default function MonochromeIcon({ children, size }) {
	return (
		<div
			style={{
				alignItems: "center",
				alignSelf: "center",
				backgroundColor: "var(--md-sys-color-surface)",
				borderRadius: "50%",
				color: "var(--md-sys-color-on-surface)",
				display: "flex",
				fontSize: size,
				height: "100%",
				justifyContent: "center",
				width: "100%",
			}}
		>
			{children}
		</div>
	);
}
