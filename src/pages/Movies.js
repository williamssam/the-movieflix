import { useState } from 'react'
import useSWR from 'swr'
import Error from '../components/Error'
import Films from '../components/Films'
import Hero from '../components/Hero'
import LoadMoreBtn from '../components/LoadMoreBtn'
import Select from '../components/Select'
const apiKey = process.env.REACT_APP_API_KEY

const Movies = () => {
	const [page, setPage] = useState(1)
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
	const { data, error } = useSWR(url)

	return (
		<main>
			<Hero />

			<section className='section'>
				<div className='container'>
					{error && <Error />}
					{!data && <h2>Loading...</h2>}
					<Select />
					<Films data={data} />

					<LoadMoreBtn page={page} setPage={setPage} data={data} />
				</div>
			</section>
		</main>
	)
}

export default Movies
