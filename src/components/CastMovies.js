const defaultImage = '../assets/default-image.jpg'

const CastMovies = ({ combined_credits: { cast } }) => {
	return (
		<section className='cast-movies'>
			<div className='container'>
				<h2>Known movies/tv series</h2>
				<div className='cast-movie'>
					{cast &&
						cast.map(
							({ title, poster_path, character, release_date }) => (
								<a href='#' title={title}>
									<img
										src={
											`https://image.tmdb.org/t/p/original${poster_path}` ||
											defaultImage
										}
										alt={title}
									/>
									<span>
										as {character} - ({`${release_date}`.slice(0, 4)})
									</span>
								</a>
							)
						)}
				</div>
			</div>
		</section>
	)
}

export default CastMovies
