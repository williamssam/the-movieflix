import { getDateName } from 'utils/getDateName'
import { getGender } from 'utils/getGender'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";


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

						<ul className='cast-social'>
							<li>
								<a href='#'>
									<IoLogoFacebook size={24} />
								</a>
							</li>
							<li>
								<a href='#'>
								<IoLogoTwitter size={24} />
								</a>
							</li>
							<li>
								<a href='#'>
								<IoLogoInstagram size={24} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CastBio
