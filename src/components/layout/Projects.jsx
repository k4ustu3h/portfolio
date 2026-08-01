import ProjectCard from "@/components/cards/ProjectCard";
import SquigglyLine from "@/components/shapes/SquigglyLine";

export default function Projects() {
	const bgColor = "var(--md-sys-color-secondary-fixed)";

	return (
		<section
			id="projects"
			style={{
				backgroundColor: bgColor,
				borderTop: "4px solid var(--md-sys-color-surface)",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "48px",
					padding: "32px",
				}}
			>
				<ProjectCard />
			</div>
			<div
				style={{
					bottom: "-14px",
					left: 0,
					position: "relative",
					width: "100%",
				}}
			>
				<SquigglyLine fillColor={bgColor} />
			</div>
		</section>
	);
}
