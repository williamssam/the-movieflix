import defaultImage from 'assets/default-image.jpg'
import AddWatchListBtn from 'components/AddWatchlistBtn'
import { AiOutlineLink } from 'react-icons/ai'
import { ToastContainer } from 'react-toastify'
import { getAverageRatings } from 'utils/getAverageRatings'

/*
	Renders the individual movie/tvshow poster image, trailervideo and othe rimportant info
**/
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
	homepage,
	id,
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
							<h2>
								<a href={homepage} target='_blank' rel='noreferrer'>
									<span>{title ?? name}</span>{' '}
									<AiOutlineLink className='link-icon' />
								</a>
							</h2>
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
							<h2
								className={`rating ${
									vote_average ? getAverageRatings(vote_average) : null
								}`}>
								{vote_average}
								<span>/10</span>
							</h2>
						) : null}
					</div>

					<AddWatchListBtn
						title={title}
						name={name}
						id={id}
						vote_average={vote_average}
						poster_path={poster_path}
					/>

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
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
		</section>
	)
}

export default TitularInfo
