import { useParams } from 'react-router'
import { useRequest } from 'hooks/useRequest'
import Casts from 'components/Cast/Casts'
import Status from 'components/Shared/Status'
import TitularInfo from 'components/Shared/TitularInfo'
import Loader from 'components/Loader'
import Error from 'components/Error'
import 'styles/movie-details.css'
import RecommendedTvShows from 'components/TvShows/RecommendedTvShows'
import SimilarTvShows from 'components/TvShows/SimilarTvShows'

const TvShowsDetails = () => {
	const { id } = useParams()
	const { data, error } = useRequest(id, '/tv')

	console.log('series', data)

	// console.log(data)
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
				<RecommendedTvShows {...data} />
				<SimilarTvShows {...data} />
			</section>
		</main>
	)
}

export default TvShowsDetails