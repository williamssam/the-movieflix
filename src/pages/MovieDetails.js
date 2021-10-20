import Casts from '../components/Casts'
import OtherRecommended from '../components/OtherRecommended'
import Recommended from '../components/Recommended'
import Status from '../components/Status'
import TitularInfo from '../components/TitularInfo'
import '../styles/movie-details.css'

const MovieDetails = () => {
	return (
		<section className='movie-details'>
			<div class='movie-hero'></div>

			<div className='info'>
				<TitularInfo />
				<Status />
				<Casts />
				<Recommended />
				<OtherRecommended />
			</div>
		</section>
	)
}

export default MovieDetails
