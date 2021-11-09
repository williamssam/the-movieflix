import Films from 'components/MoviePage/Films'
import Search from 'components/Shared/Search'
import Series from 'components/TvShows/Series'
import useSWR from 'swr'
const apiKey = process.env.REACT_APP_API_KEY

const Home = () => {
	const { data: movies, error } = useSWR(
		`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
	)

	const { data: tvshows } = useSWR(
		`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`
	)

	console.log(movies)
	if (!movies) return <h2>Loading...</h2>

	return (
		<main>
			{/* <Hero /> */}
			<article class='home'>
				<div className='container'>
					<div class='home-text'>
						<h2>Welcome to the/MovieFlix</h2>
						<p>
							Millions of Tv Shows, Movies powered by{' '}
							<a href='https://www.themoviedb.org/'>TheMovieDB API</a>
						</p>
					</div>

					<Search />
				</div>
			</article>

			<section className='section'>
				<div className='container'>
					<div>
						<h2 class='overall-title'>Trending Movies</h2>
						<Films data={movies} />
					</div>

					<div>
						<h2 class='overall-title'>Trending TvShows</h2>
						<Series data={tvshows} />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
