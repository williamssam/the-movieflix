import { getDateName } from 'utils/getDateName'
import { useState } from 'react'
import useSWR from 'swr'
import defaultImage from 'assets/default-image.jpg'
import InifiniteLoader from 'components/InfiniteLoader'
import { Link } from 'react-router-dom'
import { getGender } from 'utils/getGender'
import { motion } from 'framer-motion'
import { IoSearchOutline } from "react-icons/io5";

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
}

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

/*
	Renders the search form and the searched data
**/
const Search = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const { data } = useSWR(
		`https://api.themoviedb.org/3/search/multi?api_key=54b94c812ae977596ee0eec873960261&query=${searchQuery}`
	)

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<form className='form' onSubmit={handleSubmit} autoComplete='off'>
				<IoSearchOutline size={24} />
				<div>
					<label htmlFor='search-field'>Search</label>
					<input
						type='search'
						name='search-field'
						id='search-field'
						placeholder='Search the/movieflix'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						enterKeyHint='search'
					/>
				</div>

				<motion.div
					variants={container}
					initial='hidden'
					animate='visible'
					className={`searched-data ${searchQuery ? 'active' : ''}`}>
					{!data && <InifiniteLoader />}
					{data &&
						data.results.map(
							({
								id,
								title,
								release_date,
								name,
								poster_path,
								first_air_date,
								media_type,
								gender,
								profile_path,
							}) => (
								<motion.article variants={item} key={id}>
									{/* if media type is movie, route to movie page or else to tvshow page */}
									<Link
										to={
											media_type === 'movie'
												? `${`/movie/${id}`}`
												: media_type === 'person'
												? `${`/cast/${id}`}`
												: `${`/tvshow/${id}`}`
										}>
										<img
											src={
												poster_path
													? `https://image.tmdb.org/t/p/w200${poster_path}`
													: profile_path
													? `https://image.tmdb.org/t/p/w200${profile_path}`
													: defaultImage
											}
											alt=''
										/>
										<div>
											<h3>{title ?? name}</h3>
											<p>
												{release_date
													? getDateName(release_date)
													: gender
													? getGender(gender)
													: getDateName(first_air_date)}
											</p>
											<p>{media_type}</p>
										</div>
									</Link>
								</motion.article>
							)
						)}
				</motion.div>
			</form>
		</>
	)
}

export default Search
