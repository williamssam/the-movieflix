import { motion } from 'framer-motion';
import Movie from './Movie';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const Movies = ({ data }) => {
	return (
		<motion.section
			variants={container}
			initial='hidden'
			animate='visible'
			className='movies'>
			{data
				? data.results.map((movie) => <Movie {...movie} key={movie.id} />)
				: null}
		</motion.section>
	);
};

export default Movies;
