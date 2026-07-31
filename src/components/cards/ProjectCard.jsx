import { M3eButton } from "@m3e/react/button";
import { M3eButtonGroup } from "@m3e/react/button-group";
import { M3eCard } from "@m3e/react/card";
import { M3eHeading } from "@m3e/react/heading";

import { FileCopyOff } from "@nine-thirty-five/material-symbols-react/outlined";
import {
	Home,
	Interests,
} from "@nine-thirty-five/material-symbols-react/rounded";

import useMediaQuery from "@/hooks/useMediaQuery";

import projects from "@/data/projects.json";

import breakpoints from "@/styles/breakpoints.json";

import FoodToGo from "@/assets/svgs/FoodToGo";
import IntelliHire from "@/assets/svgs/IntelliHire";
import VSCode from "@/assets/svgs/VSCode";

import MonochromeIcon from "@/components/icons/MonochromeIcon";

const iconMap = {
	dedupe: FileCopyOff,
	foodtogo: FoodToGo,
	mnt: Home,
	monocons: Interests,
	intellihire: IntelliHire,
	vscode: VSCode,
};

export default function ProjectCard() {
	const sm = useMediaQuery(breakpoints.width.sm);
	const xs = useMediaQuery(breakpoints.width.xs);
	const isSmall = sm || xs;

	return (
		<>
			{projects.map((project) => {
				const Icon = iconMap[project.icon];

				return (
					<div
						key={project.heading}
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
						}}
					>
						<M3eCard style={{ width: "512px" }} variant="elevated">
							<M3eHeading
								className="rounded-heading"
								size="small"
								slot="header"
								style={{ display: "flex", alignItems: "start" }}
								variant="headline"
							>
								{project.heading}
								<div style={{ flexGrow: 1 }} />
								{isSmall && (
									<div
										style={{
											fontSize: "48px",
											padding: "8px",
										}}
									>
										<Icon height="1em" width="1em" />
									</div>
								)}
							</M3eHeading>
							<div
								slot="content"
								style={{
									alignItems: "center",
									display: "flex",
								}}
							>
								{project.description}
							</div>
							<M3eButtonGroup end slot="actions">
								<M3eButton
									href={project.secondaryAction.link}
									variant="outlined"
									target="_blank"
								>
									Source Code
								</M3eButton>
								<M3eButton
									href={project.primaryAction.link}
									variant="filled"
									target="_blank"
								>
									{project.primaryAction.label}
								</M3eButton>
							</M3eButtonGroup>
						</M3eCard>
						{!isSmall && (
							<div
								style={{
									height: "256px",
									width: "256px",
								}}
							>
								<MonochromeIcon size={"128px"}>
									<Icon height="1em" width="1em" />
								</MonochromeIcon>
							</div>
						)}
					</div>
				);
			})}
		</>
	);
}
