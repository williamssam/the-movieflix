import {
	BiBookmarks,
	BiCarousel,
	BiLogInCircle,
	BiMovie,
	BiTv,
} from 'react-icons/bi'
import '../styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<h1 className='logo'>
					<Link to='/'> The/MovieFlix </Link>
				</h1>
				<nav className='nav'>
					<ul className='nav-list'>
						<li>
							<a href='#'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zm-5.466 0-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.535L6.869 5h2.596l2.666 4zM4 5h.465l2.667 4H4V5z'></path>
								</svg>
								<span>movies</span>
							</a>
						</li>

						<li>
							<a href='#'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2z'></path>
								</svg>
								<span>series</span>
							</a>
						</li>

						<li>
							<a href='#'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z'></path>
									<path d='M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z'></path>
								</svg>
								<span>my watchlist</span>
							</a>
						</li>
					</ul>
				</nav>

				<div className='btn-container'>
					<button className='btn log-in'>
						<BiLogInCircle />
						<span>log in</span>
					</button>

					<button className='btn sign-up'>
						<BiCarousel />
						<span>sign up</span>
					</button>
				</div>

				<button className='hamburger close'>
					<div></div>
					<div></div>
					<div></div>
				</button>
			</div>
		</header>
	)
}

export default Header
