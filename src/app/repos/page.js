import dynamic from "next/dynamic";

const Repos = dynamic(() => import("@/components/pages/Repos"));

export default function Page() {
	return <Repos />;
}
