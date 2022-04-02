import Search from 'components/shared/Search';
import Error from 'components/Error';
import useSWR from 'swr';
import Loader from 'components/Loader';
import Movies from 'components/shared/Movies';
const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
	const { data: movies, error } = useSWR(
		`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
	);

	const { data: tvshows } = useSWR(
		`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`
	);

	return (
		<main>
			<article className='home'>
				<div className='container'>
					<div className='home-text'>
						<h2>Welcome to the/MovieFlix</h2>
						<p>
							Millions of Movies, Tv Shows powered by{' '}
							<a href='https://www.themoviedb.org/'>
								<img
									src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'
									alt='the moviedb'
								/>
							</a>
						</p>
					</div>

					<Search />
				</div>
			</article>

			{!movies && <Loader />}
			{error && <Error />}
			<section className='section'>
				<div className='container'>
					<div>
						<h2 className='overall-title'>Trending Movies</h2>
						<Movies data={movies} />
					</div>

					<div>
						<h2 className='overall-title'>Trending TvShows</h2>
						<Movies data={tvshows} />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
