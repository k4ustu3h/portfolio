import dynamic from "next/dynamic";

const BasicClock = dynamic(
	() => import("@/components/surfaces/lockscreen/clocks/digital/BasicClock"),
	{ ssr: false },
);

export default function LockScreenOverlay() {
	return (
		<div
			className="lock-screen-overlay"
			style={{
				alignItems: "center",
				aspectRatio: "9 / 20",
				borderRadius: "32px",
				display: "flex",
				height: "100%",
				justifyContent: "center",
				userSelect: "none",
			}}
		>
			<BasicClock />
		</div>
	);
}
