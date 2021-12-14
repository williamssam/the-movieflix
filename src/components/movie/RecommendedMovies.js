import { Link } from 'react-router-dom'
import { getAverageRatings } from 'utils/getAverageRatings'
import defaultImage from 'assets/default-image.jpg'

const RecommendedMovies = ({ results }) => {
	return (
		<section className='recommended-movie'>
			<div className='container'>
				<h2>You should also watch</h2>

				<div className='movies'>
					{results
						.slice(0, 18)
						.map(
							({
								id,
								title,
								poster_path,
								vote_average,
								name,
								release_date,
							}) => (
								<article key={id}>
									<Link to={`/movie/${id}`} title={title}>
										<img
											src={
												poster_path
													? `https://image.tmdb.org/t/p/original${poster_path}`
													: defaultImage
											}
											alt={title}
											loading='lazy'
										/>
									</Link>

									<div className='movie-info'>
										<Link to={`/movie/${id}`}>
											<h3>{title ?? name}</h3>
										</Link>
										<div className='movie-other-info'>
											{release_date ? (
												<p className='movie-type'>
													{' '}
													{release_date.slice(0, 4)}
												</p>
											) : null}
											<p className='movie-rating'>
												<span
													className={
														vote_average
															? getAverageRatings(vote_average)
															: null
													}>
													{vote_average}
												</span>
												/10
											</p>
										</div>
									</div>
								</article>
							)
						)}
				</div>
			</div>
		</section>
	)
}

export default RecommendedMovies
