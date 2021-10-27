import { useParams } from 'react-router'
import useSWR from 'swr'
import Casts from '../components/Casts'
import Recommended from '../components/Recommended'
import Status from '../components/Status'
import TitularInfo from '../components/TitularInfo'
import '../styles/movie-details.css'
import Similar from '../components/Similar'
const apiKey = process.env.REACT_APP_API_KEY

const MovieDetails = () => {
	const { id } = useParams()
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits,similar,reviews,recommendations`
	const { data, error } = useSWR(url)

	console.log(data)

	// console.log(data)
	if (!data) return <h2>Loading...</h2>

	return (
		<section className='movie-details'>
			<div
				className='movie-hero'
				style={{
					background: `linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%), url('https://image.tmdb.org/t/p/original${data.backdrop_path}') no-repeat center/cover`,
				}}></div>

			<div className='info'>
				<TitularInfo {...data} />
				<Status {...data} />
				<Casts {...data} />
				<Recommended {...data} />
				<Similar {...data} />
			</div>
		</section>
	)
}

export default MovieDetails
