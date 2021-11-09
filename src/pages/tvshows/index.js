import Error from 'components/Error'
import InifiniteLoader from 'components/InfiniteLoader'
import Loader from 'components/Loader'
import Hero from 'components/Shared/Hero'
import Search from 'components/Shared/Search'
import Select from 'components/Shared/Select'
import Series from 'components/TvShows/Series'
import useInfiniteLoad from 'hooks/useInfiniteLoad'
import useOnScreen from 'hooks/useOnScreen'
import { useEffect, useRef, useState } from 'react'

import 'styles/homepage.css'

const TvShows = () => {
	const [selectedValue, setSelectedValue] = useState('popular')

	const ref = useRef()
	const { movies, error, isLoadingMore, size, setSize } = useInfiniteLoad(
		'/tv',
		selectedValue
	)
	const isVisible = useOnScreen(ref)

	useEffect(() => {
		if (isVisible) {
			setSize(size + 1)
		}
	}, [isVisible])

	return (
		<main>
			<Hero />

			<section className='section'>
				<div className='container'>
					<form className='form'>
						<Select
							selected={selectedValue}
							setSelected={setSelectedValue}
						/>
						<Search />
					</form>

					{error ? <Error /> : null}
					{!movies ? <Loader /> : null}

					<h2 class='overall-title'>{selectedValue} TvShows</h2>
					{movies.map((movie, index) => (
						<Series key={index} data={movie} />
					))}

					<button ref={ref} style={{ margin: 'auto' }}>
						{isLoadingMore ? <InifiniteLoader /> : null}
					</button>
				</div>
			</section>
		</main>
	)
}

export default TvShows
