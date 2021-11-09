import { getDateName } from 'misc/getDateName'
import { getGender } from 'misc/getGender'

const CastBio = ({
	biography,
	birthday,
	name,
	place_of_birth,
	profile_path,
	gender,
	combined_credits: { cast },
}) => {
	const date = new Date().getFullYear()
	return (
		<section className='cast-bio'>
			<div className='container'>
				<img
					src={`https://image.tmdb.org/t/p/original${profile_path}`}
					alt={name}
					title={name}
				/>

				<div className='bio'>
					<div>
						{name ? <h2>{name}</h2> : null}
						{biography ? <p>{biography}</p> : null}
					</div>

					<div className='personal-info'>
						<div>
							{gender ? (
								<p>
									<strong>Gender:</strong> {getGender(gender)}
								</p>
							) : null}
							{birthday ? (
								<p>
									<strong>Date of Birth:</strong>{' '}
									{getDateName(birthday)} (
									{date - birthday.slice(0, 4)}years old)
								</p>
							) : null}
							{place_of_birth ? (
								<p>
									<strong>Place of Birth:</strong> {place_of_birth}
								</p>
							) : null}
							{cast ? (
								<p>
									<strong>Known Credits:</strong> {cast.length}{' '}
									movies/tvseries
								</p>
							) : null}
						</div>

						{/* <ul className='cast-social'>
							<li>
								<a href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z'></path>
									</svg>
								</a>
							</li>
							<li>
								<a href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
									</svg>
								</a>
							</li>
							<li>
								<a href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z'></path>
										<circle
											cx='11.994'
											cy='11.979'
											r='3.003'></circle>
									</svg>
								</a>
							</li>
						</ul> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CastBio
