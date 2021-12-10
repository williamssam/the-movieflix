import Film from 'components/MoviePage/Film';
import { motion } from 'framer-motion';

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

const Films = ({ data }) => {
	console.log('data', data);
	return (
		<motion.section
			variants={container}
			initial='hidden'
			animate='visible'
			className='movies'>
			{data
				? data.results.map((film) => <Film {...film} key={film.id} />)
				: null}
		</motion.section>
	);
};

export default Films;
