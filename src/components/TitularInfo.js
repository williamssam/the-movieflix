const TitularInfo = () => {
	return (
		<section class='titular-info'>
			<div class='container'>
				<img
					src='https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg'
					alt=''
					tittle='zootopia'
				/>

				<div class='details'>
					<div class='detail'>
						<div>
							<h2>Zootopia</h2>
							<div class='tag'>
								<p class='year'>2014</p>
								<div>
									<p class='tags'>Action, Family, Animation</p>
								</div>
							</div>
						</div>

						<h2 class='rating'>
							7.5<span>/10</span>
						</h2>
					</div>

					<button class='add-btn'>
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
						<p class='tagline'>
							mankind was born here, but was not meant to die here
						</p>

						<p class='storyline'>
							From the largest elephant to the smallest shrew, the city
							of Zootopia is a mammal metropolis where various animals
							live and thrive. When Judy Hopps becomes the first rabbit
							to join the police force, she quickly learns how tough it
							is to enforce the law. Determined to prove herself, Judy
							jumps at the opportunity to solve a mysterious case.
						</p>
					</div>

					<div class='crew'>
						<p>
							<strong>Director(s):</strong> Rich Moore, Jared Bush
						</p>
						<p>
							<strong>Writer(s):</strong> Rich Moore, Jared Bush
						</p>
					</div>
				</div>

				<div class='video'>
					<iframe
						src='https://www.youtube.com/embed/jWM0ct-OLsM'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
				</div>
			</div>
		</section>
	)
}

export default TitularInfo
