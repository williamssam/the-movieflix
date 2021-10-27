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
	videos,
}) => {
	return (
		<section className='titular-info'>
			<div className='container'>
				<img
					src={`https://image.tmdb.org/t/p/original${poster_path}`}
					alt={title ?? name}
					tittle={title ?? name}
				/>

				<div className='details'>
					<div className='detail'>
						<div>
							<h2>{title ?? name}</h2>
							<div className='tag'>
								{release_date && (
									<p className='year'>{release_date.slice(0, 4)}</p>
								)}
								<div>
									{genres && (
										<p className='tags'>
											{genres.map((genre) => genre.name).join(', ')}
										</p>
									)}
								</div>
							</div>
						</div>

						{vote_average && (
							<h2 className='rating'>
								{vote_average}
								<span>/10</span>
							</h2>
						)}
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

					<div class='story'>
						{tagline && <p className='tagline'>{tagline}</p>}

						{overview && <p className='storyline'>{overview}</p>}
					</div>

					<div className='crew'>
						{credits.crew && (
							<p>
								<strong>Director(s):</strong>{' '}
								{credits.crew.map((crews) =>
									crews.known_for_department === 'Directing'
										? crews.name
										: null
								)}
							</p>
						)}
						{credits.crew && (
							<p>
								<strong>Writer(s):</strong>{' '}
								{credits.crew.map((crews) =>
									crews.known_for_department === 'Writing'
										? crews.name
										: null
								)}
							</p>
						)}
					</div>
				</div>

				<div className='video'>
					{videos &&
						videos.results.map((video) =>
							video.type === 'Trailer' ? (
								<iframe
									src={`https://www.youtube.com/embed/${video.key}`}
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen></iframe>
							) : (
								''
							)
						)}
				</div>
			</div>
		</section>
	)
}

export default TitularInfo
