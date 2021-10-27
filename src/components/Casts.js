import { Link } from 'react-router-dom'

const Casts = ({ credits: { cast } }) => {
	return (
		<section class='casts'>
			<div class='container'>
				<h2>Featured Casts</h2>

				<div class='cast'>
					{cast &&
						cast
							.slice(0, 12)
							.map(
								({
									id,
									original_name,
									name,
									cast_id,
									character,
									profile_path,
								}) => (
									<article key={cast_id}>
										<Link to={`/cast/${id}`}>
											<img
												src={`https://image.tmdb.org/t/p/original${profile_path}`}
												alt={original_name}
												title={original_name ?? name}
											/>

											<div>
												{original_name && (
													<p>{original_name ?? name}</p>
												)}
												{character && <p>{character}</p>}
												{/* <p>2 episode</p>*/}
											</div>
										</Link>
									</article>
								)
							)}
				</div>
			</div>
		</section>
	)
}

export default Casts
