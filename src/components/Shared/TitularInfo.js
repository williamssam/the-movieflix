import defaultImage from 'assets/default-image.jpg'

const TitularInfo = ({
	poster_path,
	title,
	name,
	vote_average,
	tagline,
	overview,
	release_date,
	genres,
	credits,
	created_by,
	videos,
}) => {
	const video = videos.results.find(({ type }) => type === 'Trailer')

	return (
		<section className='titular-info'>
			<div className='container'>
				<img
					src={
						poster_path
							? `https://image.tmdb.org/t/p/original${poster_path}`
							: defaultImage
					}
					alt={title ?? name}
					tittle={title ?? name}
				/>

				<div className='details'>
					<div className='detail'>
						<div>
							<h2>{title ?? name}</h2>
							<div className='tag'>
								{release_date ? (
									<p className='year'>{release_date.slice(0, 4)}</p>
								) : null}
								<div>
									{genres ? (
										<p className='tags'>
											{genres.map((genre) => genre.name).join(', ')}
										</p>
									) : null}
								</div>
							</div>
						</div>

						{vote_average ? (
							<h2 className='rating'>
								{vote_average}
								<span>/10</span>
							</h2>
						) : null}
					</div>

					<button className='add-btn'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='currentColor'
							title='bookmark'>
							<path d='M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z'></path>
							<path d='M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z'></path>
						</svg>
						<span>Add to wishlist</span>
					</button>

					<div className='story'>
						{tagline ? <p className='tagline'>{tagline}</p> : null}

						{overview ? <p className='storyline'>{overview}</p> : null}
					</div>

					<div className='crew'>
						{credits.crew ? (
							<p>
								<strong>Director(s):</strong>{' '}
								{credits.crew
									.map((crews) =>
										crews.department === 'Directing'
											? crews.name
											: null
									)
									.filter(Boolean)
									.join(', ')}
							</p>
						) : null}

						{created_by ? (
							<p>
								<strong>Created by:</strong>{' '}
								{created_by.map((created) => created.name).join(', ')}
							</p>
						) : null}

						{credits.crew ? (
							<p>
								<strong>Writer(s):</strong>{' '}
								{credits.crew
									.map((crews) =>
										crews.department === 'Writing' ? crews.name : null
									)
									.filter(Boolean)
									.join(', ')}
							</p>
						) : null}
					</div>
				</div>

				<div className='video'>
					{video ? (
						<iframe
							src={`https://www.youtube.com/embed/${video.key}`}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							key={video.key}></iframe>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default TitularInfo
