import { getAverageRatings } from 'utils/getAverageRatings'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

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
				<Link to={`/tvshow/${id}`} title={title ?? name}>
					<img
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
						alt=''
						loading='lazy'
					/>
				</Link>

				<div className='movie-info'>
					<Link to={`/tvshow/${id}`}>
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
