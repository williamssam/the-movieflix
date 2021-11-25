import { getDateName } from 'utils/getDateName'
import { useState } from 'react'
import useSWR from 'swr'
import defaultImage from 'assets/default-image.jpg'
import InifiniteLoader from 'components/InfiniteLoader'
import { Link } from 'react-router-dom'

/*
	Renders the search form and the searched data
**/
const Search = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const { data } = useSWR(
		`https://api.themoviedb.org/3/search/multi?api_key=54b94c812ae977596ee0eec873960261&query=${
			searchQuery && searchQuery
		}`
	)

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<form className='form' onSubmit={handleSubmit} autoComplete='off'>
				<svg
					className='icon'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
				</svg>
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

				<div className={`searched-data ${searchQuery ? 'active' : ''}`}>
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
							}) => (
								<article key={id}>
									{/* if media type is movie, route to movie page or else to tvshow page */}
									<Link
										to={
											media_type === 'movie'
												? `${`/movie/${id}`}`
												: `${`/tvshow/${id}`}`
										}>
										<img
											src={
												poster_path
													? `https://image.tmdb.org/t/p/w200${poster_path}`
													: defaultImage
											}
											alt=''
										/>
										<div>
											<h3>{title ?? name}</h3>
											<p>
												{release_date
													? getDateName(release_date)
													: getDateName(first_air_date)}
											</p>
											<p>{media_type}</p>
										</div>
									</Link>
								</article>
							)
						)}
				</div>
			</form>
		</>
	)
}

export default Search
