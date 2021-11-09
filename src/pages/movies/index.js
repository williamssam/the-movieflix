import { useEffect, useRef, useState } from 'react'
import Error from 'components/Error'
import Films from 'components/MoviePage/Films'
import Hero from 'components/Shared/Hero'
import InifiniteLoader from 'components/InfiniteLoader'
import Loader from 'components/Loader'
import Search from 'components/Shared/Search'
import Select from 'components/Shared/Select'
import useInfiniteLoad from 'hooks/useInfiniteLoad'
import useOnScreen from 'hooks/useOnScreen'

import 'styles/homepage.css'

const Movies = () => {
	const [selectedValue, setSelectedValue] = useState('popular')

	const ref = useRef()
	const { movies, error, isLoadingMore, size, setSize } = useInfiniteLoad(
		'/movie',
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

					<h2 class='overall-title'>{selectedValue} Movies</h2>
					{movies.map((movie, index) => (
						<Films key={index} data={movie} />
					))}

					<button ref={ref} style={{ margin: 'auto' }}>
						{isLoadingMore ? <InifiniteLoader /> : null}
					</button>
				</div>
			</section>
		</main>
	)
}

export default Movies
