import { getLanguageName, getDateName, formatTime } from '../misc'

const Status = ({
	status,
	budget,
	revenue,
	production_companies,
	homepage,
	original_language,
	release_date,
	runtime,
}) => {
	return (
		<section class='status'>
			<div class='container'>
				{status && (
					<div>
						<p>Staus</p>
						<p>{status}</p>
					</div>
				)}

				{release_date && (
					<div>
						<p>Release Date</p>
						<p>{getDateName(release_date)}</p>
					</div>
				)}

				{original_language && (
					<div>
						<p>Original Language</p>
						<p>{getLanguageName(original_language)}</p>
					</div>
				)}

				{runtime && (
					<div>
						<p>Runtime</p>
						<p>{formatTime(runtime)}</p>
					</div>
				)}

				{production_companies && (
					<div>
						<p>Production Company</p>
						<p>{production_companies[0].name}</p>
					</div>
				)}

				{budget && (
					<div>
						<p>Budget</p>
						<p>${budget.toLocaleString()}</p>
					</div>
				)}

				{revenue && (
					<div>
						<p>Revenue</p>
						<p>${revenue.toLocaleString()}</p>
					</div>
				)}

				{homepage && (
					<div>
						<p>Homepage</p>
						<a href={homepage} target='_blank' rel='noreferrer'>
							Movie Homepage
						</a>
					</div>
				)}
			</div>
		</section>
	)
}

export default Status
