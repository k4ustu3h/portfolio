import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export default function RepoCardSkeleton() {
	return Array.from(Array(4)).map((_, index) => (
		<Grid item key={index} xs={12} sm={8} md={6} lg={4}>
			<Box p={4}>
				<Skeleton animation="wave" variant="text" width="50%" />
				<Skeleton
					animation="wave"
					height={64}
					variant="text"
					width="60%"
				/>
				<Box display="flex" gap={2} justifyContent="end" mt={3}>
					{Array.from(Array(3)).map((_, index) => (
						<Skeleton
							animation="wave"
							height={40}
							key={index}
							sx={{
								borderRadius: 20,
							}}
							variant="rounded"
							width={92}
						/>
					))}
				</Box>
			</Box>
		</Grid>
	));
}
