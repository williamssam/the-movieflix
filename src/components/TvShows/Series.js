import Show from 'components/TvShows/Show'

const Series = ({ data }) => {
	return (
		<section className='movies'>
			{data
				? data.results.map((film) => <Show key={film.id} {...film} />)
				: null}
		</section>
	)
}

export default Series
