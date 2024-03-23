import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function RepoCardSkeleton() {
	return Array.from(Array(6)).map((_, index) => (
		<Box key={index} p={4}>
			<Skeleton animation="wave" variant="text" width="50%" />
			<Skeleton animation="wave" height={64} variant="text" width="60%" />
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
	));
}
