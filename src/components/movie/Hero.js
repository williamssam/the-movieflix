import useSWR from 'swr';
import { useState, useEffect } from 'react';
import AddWatchListBtn from 'components/AddWatchlistBtn';
import { Link } from 'react-router-dom';
const apiKey = process.env.REACT_APP_API_KEY;

const Hero = () => {
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
	);
	const [randomMovie, setRandomMovie] = useState(null);

	useEffect(() => {
		if (!data) return 'Loading...';
		if (error) console.log(error);
		setRandomMovie(
			data.results[Math.floor(Math.random() * data.results.length - 1)]
		);
	}, [data, error]);
	// ;

	console.log('randomMovie', randomMovie);
	return (
		<section
			className='hero-movie'
			style={{
				background: `linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%), url('https://image.tmdb.org/t/p/original${
					randomMovie && randomMovie.backdrop_path
				}') no-repeat top/cover`,
			}}>
			{randomMovie && (
				<div className='hero-movie-container'>
					<div>
						<h2 className='title'>
							{randomMovie.title ?? randomMovie.name}
						</h2>
						<p className='tagline'>{randomMovie.media_type}</p>
					</div>

					<p className='storyline'>{`${randomMovie.overview.substring(
						0,
						200
					)}...`}</p>

					<div class='hero-footer'>
						<AddWatchListBtn
							title={randomMovie.title}
							name={randomMovie.name}
							id={randomMovie.id}
							vote_average={randomMovie.vote_average}
							poster_path={randomMovie.poster_path}
						/>
						<Link to={`/movie/${randomMovie.id}`}>Details →</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default Hero;
