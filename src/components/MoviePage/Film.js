import { getAverageRatings } from 'utils/getAverageRatings'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}
const Film = ({ id, title, name, poster_path, vote_average, release_date }) => {
	const { ref, inView } = useInView()
	return (
		<>
			<motion.article
				ref={ref}
				variants={item}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}>
				<Link to={`/movie/${id}`} title={title ?? name}>
					<img
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
						alt=''
					/>
				</Link>

				<div className='movie-info'>
					<Link to={`/movie/${id}`}>
						<h3>{title ?? name}</h3>
					</Link>
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
			</motion.article>
		</>
	)
}

export default Film
