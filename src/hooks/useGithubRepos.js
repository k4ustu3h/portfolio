import { useState, useEffect } from "react";

export default function useGithubRepos(username) {
	const [repos, setRepos] = useState({ forkedRepos: [], sourceRepos: [] });
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);

				const response = await fetch(
					`https://api.github.com/users/${username}/repos`,
				);

				if (!response.ok) {
					throw new Error("Failed to fetch repositories");
				}

				const data = await response.json();

				setRepos({
					forkedRepos: data.filter((repo) => repo.fork),
					sourceRepos: data.filter((repo) => !repo.fork),
				});
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		if (username) {
			fetchData();
		}
	}, [username]);

	return { repos, isLoading, error };
}
