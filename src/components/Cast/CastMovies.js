import defaultImage from 'assets/default-image.jpg'
import { Link } from 'react-router-dom'

/*
	Renders the actors movies/tv shows
**/
const CastMovies = ({ combined_credits: { cast } }) => {
	return (
		<section className='cast-movies'>
			<div className='container'>
				<h2>Known movies/tv series</h2>

				<section className='movies'>
					{cast
						? cast.map(
								({
									title,
									name,
									poster_path,
									character,
									release_date,
									id,
									media_type,
								}) => (
									<article key={id}>
										<Link
											to={
												media_type === 'movie'
													? `${`/movie/${id}`}`
													: `${`/tvshow/${id}`}`
											}>
											<img
												src={
													poster_path
														? `https://image.tmdb.org/t/p/original${poster_path}`
														: defaultImage
												}
												alt={title ?? name}
												title={title ?? name}
												loading='lazy'
											/>

											<div className='movie-info'>
												<Link to={`/movie/${id}`}>
													<h3>{title ?? name}</h3>
												</Link>
												<div className='movie-other-info'>
													{character ? (
														<p>as {character}</p>
													) : null}
													{release_date ? (
														<p className='movie-type'>
															{' '}
															{release_date.slice(0, 4)}
														</p>
													) : null}
												</div>
											</div>
										</Link>
									</article>
								)
						  )
						: null}
				</section>
			</div>
		</section>
	)
}

export default CastMovies
