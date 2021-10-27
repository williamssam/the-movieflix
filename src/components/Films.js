import Film from './Film'

const Films = ({ data }) => {
	console.log(data)
	return (
		<section className='movies'>
			{data && data.results.map((film) => <Film key={film.id} {...film} />)}
		</section>
	)
}

export default Films
