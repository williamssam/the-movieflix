import '../styles/casts-details.css'
import CastBio from '../components/CastBio'
import CastMovies from '../components/CastMovies'
import useSWR from 'swr'
import { useParams } from 'react-router'
const apiKey = process.env.REACT_APP_API_KEY

const Casts = () => {
	const { id } = useParams()
	const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=combined_credits,external_ids`
	const { data, error } = useSWR(url)
	console.log(data)

	if (!data) return <h2>Loading...</h2>
	return (
		<>
			<section className='cast-details'>
				<CastBio {...data} />
				<CastMovies {...data} />
			</section>
		</>
	)
}

export default Casts
