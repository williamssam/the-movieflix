import FetchResult from 'components/FetchResult'
import InifiniteLoader from 'components/InfiniteLoader'
import Hero from 'components/Shared/Hero'
import Search from 'components/Shared/Search'
import Select from 'components/TvShows/Select'
import Series from 'components/TvShows/Series'
import useInfiniteLoad from 'hooks/useInfiniteLoad'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import 'styles/homepage.css'

/*
	Renders the TVShows Page: when you click 'tvshow' on the navbar
**/
const TvShows = () => {
	const { ref, inView } = useInView()
	const [selectedValue, setSelectedValue] = useState('popular')

	// fetches movies with infinite load ability
	const { movies, error, isLoadingMore, size, setSize } = useInfiniteLoad(
		'/tv',
		selectedValue
	)
	useEffect(() => {
		if (inView) {
			setSize(size + 1)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView])

	return (
		<main>
			<Hero />

			<section className='section'>
				<div className='container'>
					<div className='form-section'>
						<Select
							selected={selectedValue}
							setSelected={setSelectedValue}
						/>
						<Search />
					</div>

					<FetchResult movies={movies} error={error}>
						<h2 className='overall-title'>{selectedValue} Movies</h2>
						{movies.map((movie, index) => (
							<Series key={index} data={movie} />
						))}
					</FetchResult>

					<button ref={ref} style={{ margin: 'auto' }}>
						{isLoadingMore ? <InifiniteLoader /> : null}
					</button>
				</div>
			</section>
		</main>
	)
}

export default TvShows
