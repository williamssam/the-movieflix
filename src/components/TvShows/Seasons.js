import { getDateName } from 'utils/getDateName'
import defaultImage from 'assets/default-image.jpg'

const Seasons = ({ seasons }) => {
	return (
		<section className='tvshow-seasons'>
			<div className='container'>
				<h2>Seasons</h2>

				<div className='seasons'>
					{seasons.map(
						({
							id,
							poster_path,
							season_number,
							episode_count,
							name,
							air_date,
							overview,
						}) => (
							<article key={id}>
								<img
									src={
										poster_path
											? `https://image.tmdb.org/t/p/original${poster_path}`
											: defaultImage
									}
									alt=''
								/>

								<div className='season-text'>
									<div className='heading'>
										{name ? <h3>{name}</h3> : null}
										{air_date ? (
											<h4>
												{air_date.slice(0, 4)} | {episode_count}{' '}
												Episodes
											</h4>
										) : null}
									</div>
									{season_number ? (
										<p>
											Season {season_number} premiered on{' '}
											{getDateName(air_date)}.
										</p>
									) : null}
									{overview ? <p>{overview}</p> : null}
								</div>
							</article>
						)
					)}
				</div>
			</div>
		</section>
	)
}

export default Seasons
