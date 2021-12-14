import { useEffect, useState } from 'react';
import Films from 'components/movie/Films';
import Hero from 'components/movie/Hero';
import InifiniteLoader from 'components/InfiniteLoader';
import Search from 'components/shared/Search';
import Select from 'components/movie/Select';
import useInfiniteLoad from 'hooks/useInfiniteLoad';

import 'styles/homepage.css';
import { useInView } from 'react-intersection-observer';
import FetchResult from 'components/FetchResult';

/*
	Renders the Movies Page: when you click 'movies' on the navbar
**/
const Movies = () => {
	const { ref, inView } = useInView();
	const [selectedValue, setSelectedValue] = useState('popular');
	// fetches movies with infinite load ability
	const { movies, error, isLoadingMore, size, setSize } = useInfiniteLoad(
		'/movie',
		selectedValue
	);

	useEffect(() => {
		if (inView) {
			setSize(size + 1);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView]);

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
							<Films key={index} data={movie} />
						))}
					</FetchResult>

					<button ref={ref} style={{ margin: 'auto' }}>
						{isLoadingMore ? <InifiniteLoader /> : null}
					</button>
				</div>
			</section>
		</main>
	);
};

export default Movies;
