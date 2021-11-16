import '../styles/casts-details.css'
import CastBio from '../components/Cast/CastBio'
import CastMovies from '../components/Cast/CastMovies'
import useSWR from 'swr'
import { useParams } from 'react-router'
import Loader from '../components/Loader'
import Error from '../components/Error'
const apiKey = process.env.REACT_APP_API_KEY

const Casts = () => {
	const { id } = useParams()
	const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=combined_credits,external_ids`
	const { data, error } = useSWR(url)

	if (!data) return <Loader />
	if (error) return <Error />
	return (
		<>
			<main className='cast-details'>
				<CastBio {...data} />
				<CastMovies {...data} />
			</main>
		</>
	)
}

export default Casts
