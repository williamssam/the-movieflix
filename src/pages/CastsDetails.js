import '../styles/casts-details.css'
import CastBio from '../components/CastBio'
import CastMovies from '../components/CastMovies'

const Casts = () => {
	return (
		<section className='cast-details'>
			<CastBio />
			<CastMovies />
		</section>
	)
}

export default Casts
