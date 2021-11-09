import { getAverageRatings } from 'misc/getAverageRatings'
import { Link } from 'react-router-dom'

const Film = ({ id, title, name, poster_path, vote_average, release_date }) => {
	return (
		<>
			<article>
				<Link to={`/tvshow/${id}`} title={title ?? name}>
					<img
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
						alt=''
					/>
				</Link>

				<div className='movie-info'>
					<h3>{title ?? name}</h3>
					<div className='movie-other-info'>
						{release_date ? (
							<p className='movie-type'> {release_date.slice(0, 4)}</p>
						) : null}
						<p className='movie-rating'>
							<span
								className={
									vote_average ? getAverageRatings(vote_average) : null
								}>
								{vote_average}
							</span>
							/10
						</p>
					</div>
				</div>
			</article>
		</>
	)
}

export default Film
