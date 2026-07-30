import { useRouter } from "next/navigation";

import { M3eAppBar } from "@m3e/react/app-bar";
import { M3eButton } from "@m3e/react/button";
import { M3eButtonGroup } from "@m3e/react/button-group";
import { M3eHeading } from "@m3e/react/heading";

import useMediaQuery from "@/hooks/useMediaQuery";

import breakpoints from "@/styles/breakpoints.json";

import ScrollToTop from "@/components/buttons/ScrollToTop";

export default function NavBar({ bgColor = "var(--md-sys-color-surface)" }) {
	const xs = useMediaQuery(breakpoints.width.xs);

	const router = useRouter();

	const pages = [
		{ label: "Home", link: "/" },
		{ label: "About", link: "/#about" },
		{ label: "Projects", link: "/#projects" },
		{ label: "Repositories", link: "/repos" },
	];

	const handleNavigation = (e, link, isNextRoute) => {
		if (isNextRoute) {
			e.preventDefault();
			router.push(link);
		}
	};

	return (
		<>
			<M3eAppBar
				id="back-to-top-anchor"
				style={{
					fontVariationSettings: `"ROND" 100`,
					padding: "16px",
					"--m3e-app-bar-container-color": bgColor,
				}}
			>
				<M3eHeading slot="leading" className="logo">
					kl.
				</M3eHeading>
				<M3eButtonGroup slot="trailing" variant="connected">
					{pages.map((page) => {
						const isNextRoute =
							page.label === "Home" ||
							page.label === "Repositories";
						const hideOnMobile =
							page.label === "About" || page.label === "Projects";

						if (hideOnMobile && xs) return null;

						return (
							<M3eButton
								href={page.link}
								key={page.label}
								onClick={(e) =>
									handleNavigation(e, page.link, isNextRoute)
								}
							>
								{page.label}
							</M3eButton>
						);
					})}
				</M3eButtonGroup>
			</M3eAppBar>
			<ScrollToTop />
		</>
	);
}
