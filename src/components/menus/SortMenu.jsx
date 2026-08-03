import { M3eIconButton } from "@m3e/react/icon-button";
import { M3eMenu, M3eMenuItem, M3eMenuTrigger } from "@m3e/react/menu";
import { M3eTooltip } from "@m3e/react/tooltip";

import { Sort } from "@nine-thirty-five/material-symbols-react/rounded";

export default function SortMenu({ id, sortBy, onSortChange }) {
	const handleSortSelect = (criteria) => {
		onSortChange(criteria);
	};

	const buttonId = `${id}-sort-button`;
	const menuId = `${id}-sort-menu`;

	return (
		<>
			<M3eIconButton id={buttonId} variant="tonal">
				<M3eMenuTrigger htmlFor={menuId} />
				<Sort size={24} />
			</M3eIconButton>
			<M3eTooltip htmlFor={buttonId}>Sort Repositories</M3eTooltip>
			<M3eMenu id={menuId} variant="vibrant">
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
