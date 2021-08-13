import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// function handleFetchMovies() {
	// 	fetch('https://swapi.dev/api/films')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			const transformedMovies = data.results.map(result => ({
	// 				id: result.episode_id,
	// 				title: result.title,
	// 				openingText: result.opening_crawl,
	// 				releaseDate: result.release_date,
	// 			}));
	// 			setMovies(transformedMovies);
	// 		});
	// }

	const handleFetchMovies = useCallback(async () => {
		setIsLoading(true);

		try {
			// const response = await fetch('https://swapi.dev/api/films');
			const response = await fetch(
				'https://react-http-1dddc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
			);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();

			const loadedMovies = [];

			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					openingText: data[key].openingText,
					releaseDate: data[key].releaseDate,
				});
			}

			setMovies(loadedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	const handleAddMovie = async movie => {
		const response = await fetch(
			'https://react-http-1dddc-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
			{
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const data = response.json();
		console.log(data);
	};

	useEffect(() => {
		handleFetchMovies();
	}, [handleFetchMovies]);

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={handleAddMovie} />
			</section>
			<section>
				<button onClick={handleFetchMovies}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
