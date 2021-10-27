import { Link } from 'react-router-dom'
import { getAverageRatings } from '../misc'

const Film = ({ id, title, name, poster_path, vote_average, media_type }) => {
	// const updateSpaceWithDash = (str) => {
	// 	const url = str.replace(/%20/g, '-')

	// 	return url
	// }

	return (
		<>
			<article>
				<Link to={`/${id}`} title={title ?? name}>
					<img
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
						alt=''
					/>
				</Link>

				<div className='movie-info'>
					<h3>{title ?? name}</h3>
					<div className='movie-other-info'>
						{media_type ? (
							<p className='movie-type'> {media_type}</p>
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
