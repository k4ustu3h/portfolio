import { useState } from "react";

import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
		<Box sx={{ display: "flex", justifyContent: "flex-end", px: 3, mt: 2 }}>
			<Tooltip title="Sort repositories">
				<IconButton
					aria-controls={menuOpen ? "sort-menu" : undefined}
					aria-expanded={menuOpen ? "true" : undefined}
					aria-haspopup="true"
					color="inherit"
					onClick={handleMenuOpen}
				>
					<Icon icon="material-symbols:sort-rounded" fontSize={28} />
				</IconButton>
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
