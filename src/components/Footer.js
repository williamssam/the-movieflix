import '../styles/footer.css'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div>
					<p>
						Created by{' '}
						<a
							href='https://williamssam.netlify.app'
							target='_blank'
							rel='noreferrer'>
							Williams Samuel
						</a>
						.
					</p>
					<p className='footer-twitter'>
						Follow me on{' '}
						<a
							href='https://twitter.com/williams_codes'
							target='_blank'
							rel='noreferrer'>
							twitter
						</a>{' '}
						for more.
					</p>
				</div>

				<ul>
					<li>React Js</li>
					<li>Context API</li>
					<li>Firebase</li>
					<li>Framer Motion</li>
					<li>TheMovieDB API</li>
				</ul>
				<p>
					check out the code on{' '}
					<a
						href='https://github.com/williamssam/the-movieflix'
						target='_blank'
						rel='noreferrer'>
						github
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
