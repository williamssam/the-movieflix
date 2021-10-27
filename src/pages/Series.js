import useSWR from 'swr'
import Error from '../components/Error'
import Films from '../components/Films'
import Hero from '../components/Hero'
import Select from '../components/Select'

const Series = () => {
	const apiKey = process.env.REACT_APP_API_KEY
	const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
	const { data, error } = useSWR(url)

	// console.log(data, error)

	return (
		<main>
			<Hero />

			<section className='section'>
				<div className='container'>
					{error && <Error />}
					{!data && <h2>Loading...</h2>}
					<Select />
					<Films data={data} />
				</div>
			</section>
		</main>
	)
}

export default Series
