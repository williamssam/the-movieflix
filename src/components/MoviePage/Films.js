import Film from 'components/MoviePage/Film'

const Films = ({ data }) => {
	return (
		<section className='movies'>
			{data
				? data.results.map((film) => <Film key={film.id} {...film} />)
				: null}
		</section>
	)
}

export default Films
