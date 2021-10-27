import { Link } from 'react-router-dom'
import { getAverageRatings } from '../misc'

const Recommended = ({ recommendations: { results } }) => {
	console.log(results)
	return (
		<section class='recommended-movie'>
			<div class='container'>
				<h2>You should also watch</h2>

				<div class='recommend'>
					{results.map(
						({ id, title, poster_path, vote_average, name }) => (
							<article key={id}>
								<Link to={`/${id}`} title={title}>
									<img
										src={`https://image.tmdb.org/t/p/original${poster_path}`}
										alt={title}
									/>
								</Link>

								<div className='movie-info'>
									<h3>{title ?? name}</h3>
									<div className='movie-other-info'>
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

export default Recommended
