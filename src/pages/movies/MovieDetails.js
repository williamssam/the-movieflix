import { useParams } from 'react-router'
import Casts from 'components/Cast/Casts'
import Status from 'components/Shared/Status'
import TitularInfo from 'components/Shared/TitularInfo'
import { useRequest } from 'hooks/useRequest'
import Loader from 'components/Loader'
import Error from 'components/Error'
import 'styles/movie-details.css'
import SimilarMovies from 'components/MoviePage/SimilarMovies'
import RecommendedMovies from 'components/MoviePage/RecommendedMovies'

/*
	Individual movie details page
*/
const MovieDetails = () => {
	const { id } = useParams()
	const { data, error } = useRequest(id, '/movie')

	if (!data) return <Loader />
	if (error) return <Error />

	return (
		<main className='movie-details'>
			<div
				className='movie-hero'
				style={{
					background: `linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%), url('https://image.tmdb.org/t/p/original${data.backdrop_path}') no-repeat center/cover`,
				}}></div>

			<section className='info'>
				<TitularInfo {...data} />
				<Status {...data} />
				<Casts {...data} />
				<RecommendedMovies {...data} />
				<SimilarMovies {...data} />
			</section>
		</main>
	)
}

export default MovieDetails
