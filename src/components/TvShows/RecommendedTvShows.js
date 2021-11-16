import { Link } from 'react-router-dom'
import defaultImage from 'assets/default-image.jpg'
import { getAverageRatings } from 'utils/getAverageRatings'

const RecommendedTvShows = ({ recommendations: { results } }) => {
	return (
		<section className='recommended-movie'>
			<div className='container'>
				<h2>You should also watch</h2>

				<div className='recommend'>
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
									<Link to={`/tvshow/${id}`} title={title}>
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
										<h3>{title ?? name}</h3>
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

export default RecommendedTvShows
