export const metadata = {
	title: "Kaustubh Ladiya",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
