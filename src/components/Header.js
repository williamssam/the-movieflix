import { useEffect, useState } from 'react'
import { BiCarousel, BiLogInCircle } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
	const [small, setSmall] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () =>
			setSmall(window.pageYOffset > 300)
		)
	}, [])
	return (
		<header className={`header ${small ? 'small' : ''}`}>
			<div className='container'>
				<h1 className='logo'>
					<Link to='/'> the/MovieFlix </Link>
				</h1>
				<nav className='nav'>
					<ul className='nav-list'>
						<li>
							<NavLink exact activeClassName='active' to='/'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z'></path>
								</svg>
								<span>home</span>
							</NavLink>
						</li>

						<li>
							<NavLink activeClassName='active' to='/movies'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zm-5.466 0-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.535L6.869 5h2.596l2.666 4zM4 5h.465l2.667 4H4V5z'></path>
								</svg>
								<span>movies</span>
							</NavLink>
						</li>

						<li>
							<NavLink activeClassName='active' to='/tvshows'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2z'></path>
								</svg>
								<span>series</span>
							</NavLink>
						</li>

						<li>
							<NavLink activeClassName='active' to='/watchlist'>
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
							</NavLink>
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
