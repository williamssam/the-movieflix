import { Link } from 'react-router-dom'
import defaultCastImage from 'assets/default-cast-image.jpeg'

const Casts = ({ cast }) => {
	return (
		<section className='casts'>
			<div className='container'>
				<h2>Featured Casts</h2>

				<div className='cast'>
					{cast
						? cast
								.slice(0, 12)
								.map(
									({
										id,
										original_name,
										name,
										character,
										profile_path,
									}) => (
										<article key={id}>
											<Link to={`/cast/${id}`}>
												<img
													src={
														profile_path
															? `https://image.tmdb.org/t/p/original${profile_path}`
															: defaultCastImage
													}
													loading='lazy'
													alt={original_name}
													title={original_name ?? name}
												/>

												<div>
													{original_name ? (
														<p>{original_name ?? name}</p>
													) : null}
													{character ? <p>{character}</p> : null}
													{/* <p>2 episode</p> */}
												</div>
											</Link>
										</article>
									)
								)
						: null}
				</div>
			</div>
		</section>
	)
}

export default Casts
