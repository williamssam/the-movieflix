import { formatTime } from 'misc/formatTime'
import { getDateName } from 'misc/getDateName'
import { getLanguageName } from 'misc/getLanguageName'

const Status = ({
	status,
	budget,
	revenue,
	production_companies,
	production_countries,
	homepage,
	original_language,
	release_date,
	runtime,
	next_episode_to_air,
	networks,
	number_of_seasons,
	number_of_episodes,
	type,
	backdrop_path,
	first_air_date,
	last_air_date,
}) => {
	return (
		<section
			class='status'
			style={{
				background: `linear-gradient(#080705, #080705), url('https://image.tmdb.org/t/p/original${backdrop_path}') no-repeat center/cover`,
			}}>
			<div class='container'>
				{status ? (
					<div>
						<p>Staus</p>
						<p>{status}</p>
					</div>
				) : null}

				{type ? (
					<div>
						<p>Type</p>
						<p>{type}</p>
					</div>
				) : null}

				{release_date ? (
					<div>
						<p>Release Date</p>
						<p>{getDateName(release_date)}</p>
					</div>
				) : null}

				{first_air_date ? (
					<div>
						<p>First air date</p>
						<p>{getDateName(first_air_date)}</p>
					</div>
				) : null}

				{last_air_date ? (
					<div>
						<p>Last air date</p>
						<p>{getDateName(last_air_date)}</p>
					</div>
				) : null}

				{original_language ? (
					<div>
						<p>Original Language</p>
						<p>{getLanguageName(original_language)}</p>
					</div>
				) : null}

				{runtime ? (
					<div>
						<p>Runtime</p>
						<p>{formatTime(runtime)}</p>
					</div>
				) : null}

				{networks ? (
					<div>
						<p>Networks</p>
						{networks.map((network, index) => network.name).join(', ')}
					</div>
				) : null}

				{number_of_seasons ? (
					<div>
						<p>Season</p>
						<p>
							{number_of_seasons} / {number_of_episodes}ep
						</p>
					</div>
				) : null}

				{production_companies?.production_companies ? (
					<div>
						<p>Production Company</p>
						<p>{production_companies[0].name}</p>
					</div>
				) : null}

				{production_countries?.production_countries ? (
					<div>
						<p>Country of Origin</p>
						<p>{production_countries[0].name}</p>
					</div>
				) : null}

				{budget ? (
					<div>
						<p>Budget</p>
						<p>${budget.toLocaleString()}</p>
					</div>
				) : null}

				{revenue ? (
					<div>
						<p>Revenue</p>
						<p>${revenue.toLocaleString()}</p>
					</div>
				) : null}

				{next_episode_to_air ? (
					<div>
						<p>Next Episode</p>
						<p>{getDateName(next_episode_to_air.air_date)}</p>
					</div>
				) : null}

				{homepage ? (
					<div>
						<p>Homepage</p>
						<a href={homepage} target='_blank' rel='noreferrer'>
							Movie Homepage
						</a>
					</div>
				) : null}
			</div>
		</section>
	)
}

export default Status
