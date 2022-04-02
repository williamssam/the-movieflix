import { useParams } from 'react-router'
import Casts from 'components/cast/Casts'
import Status from 'components/shared/Status'
import TitularInfo from 'components/shared/TitularInfo'
import { useRequest } from 'hooks/useRequest'
import Loader from 'components/Loader'
import Error from 'components/Error'
import 'styles/movie-details.css'
import Recommended from 'components/shared/Recommended';

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
					background: `linear-gradient(#ddd, transparent), url('https://image.tmdb.org/t/p/original${data.backdrop_path}') no-repeat top/cover`,
				}}></div>

			<section className='info'>
				<TitularInfo {...data} />
				<Status {...data} />
				<Casts {...data.credits} />
				<Recommended {...data.recommendations} />
				<Recommended {...data.similar} />
			</section>
		</main>
	)
}

export default MovieDetails
