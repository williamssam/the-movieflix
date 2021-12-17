import { useParams } from 'react-router'
import { useRequest } from 'hooks/useRequest'
import Casts from 'components/cast/Casts'
import Status from 'components/shared/Status'
import TitularInfo from 'components/shared/TitularInfo'
import Loader from 'components/Loader'
import Error from 'components/Error'
import RecommendedTvShows from 'components/tvshows/RecommendedTvShows'
import SimilarTvShows from 'components/tvshows/SimilarTvShows'

import 'styles/movie-details.css'
import Seasons from 'components/tvshows/Seasons'

/*
	Individual tvshows details page
*/
const TvShowsDetails = () => {
	const { id } = useParams()
	const { data, error } = useRequest(id, '/tv')

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
				<Seasons {...data} />
				<Casts {...data.credits} />
				<RecommendedTvShows {...data.recommendations} />
				<SimilarTvShows {...data.similar} />
			</section>
		</main>
	)
}

export default TvShowsDetails
