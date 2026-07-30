import { M3eIconButton } from "@m3e/react/icon-button";
import { M3eMenu, M3eMenuItem, M3eMenuTrigger } from "@m3e/react/menu";
import { M3eTooltip } from "@m3e/react/tooltip";

import { Sort } from "@nine-thirty-five/material-symbols-react/rounded";

export default function SortMenu({ sortBy, onSortChange }) {
	const handleSortSelect = (criteria) => {
		onSortChange(criteria);
	};

	return (
		<>
			<M3eIconButton id="sort-button" toggle value="sort" variant="tonal">
				<M3eMenuTrigger htmlFor="sort-menu" />
				<Sort size={24} />
			</M3eIconButton>
			<M3eTooltip htmlFor="sort-button">Sort Repositories</M3eTooltip>
			<M3eMenu id="sort-menu" variant="vibrant">
				<M3eMenuItem
					onClick={() => handleSortSelect("updated")}
					selected={sortBy === "updated"}
				>
					Last Updated
				</M3eMenuItem>
				<M3eMenuItem
					onClick={() => handleSortSelect("stars")}
					selected={sortBy === "stars"}
				>
					Stars
				</M3eMenuItem>
				<M3eMenuItem
					onClick={() => handleSortSelect("name")}
					selected={sortBy === "name"}
				>
					Name (A-Z)
				</M3eMenuItem>
			</M3eMenu>
		</>
	);
}
