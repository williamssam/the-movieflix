import defaultImage from 'assets/default-image.jpg'

const CastMovies = ({ combined_credits: { cast } }) => {
	return (
		<section className='cast-movies'>
			<div className='container'>
				<h2>Known movies/tv series</h2>
				<div className='cast-movie'>
					{cast
						? cast.map(
								({
									title,
									name,
									poster_path,
									character,
									release_date,
									id,
								}) => (
									<article key={id}>
										<img
											src={
												poster_path
													? `https://image.tmdb.org/t/p/original${poster_path}`
													: defaultImage
											}
											alt={title ?? name}
											title={title ?? name}
										/>
										{release_date ? (
											<span>
												as {character} - (
												{`${release_date}`.slice(0, 4)})
											</span>
										) : null}
									</article>
								)
						  )
						: null}
				</div>
			</div>
		</section>
	)
}

export default CastMovies
