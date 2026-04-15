import { useState } from "react";

import { Sort } from "@nine-thirty-five/material-symbols-react/rounded";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";

export default function SortMenu({ sortBy, onSortChange }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const menuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleSortSelect = (criteria) => {
		onSortChange(criteria);
		handleMenuClose();
	};

	return (
		<Box>
			<Tooltip title="Sort repositories">
				<ToggleButton
					aria-controls={menuOpen ? "sort-menu" : undefined}
					aria-expanded={menuOpen ? "true" : undefined}
					aria-haspopup="true"
					onClick={handleMenuOpen}
					selected={menuOpen}
					size="medium"
					value="sort"
					variant="tonal"
				>
					<Sort />
				</ToggleButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				id="sort-menu"
				onClose={handleMenuClose}
				open={menuOpen}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
			>
				<MenuItem
					onClick={() => handleSortSelect("updated")}
					selected={sortBy === "updated"}
				>
					Last Updated
				</MenuItem>
				<MenuItem
					onClick={() => handleSortSelect("stars")}
					selected={sortBy === "stars"}
				>
					Stars
				</MenuItem>
				<MenuItem
					onClick={() => handleSortSelect("name")}
					selected={sortBy === "name"}
				>
					Name (A-Z)
				</MenuItem>
			</Menu>
		</Box>
	);
}
