import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/header.css'
import { useAuth } from 'hooks/useAuth'
import { logoutUser } from 'services/auth-service'
import { CgMenuHotdog } from 'react-icons/cg'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import avatar from 'assets/avatar.jpg'
import { useState } from 'react'
// import { motion } from 'framer-motion'

/*
	the website header
**/
const Header = () => {
	const [open, setOpen] = useState(false)
	const { currentUser } = useAuth()
	const location = useLocation()

	return (
		<header className='header'>
			<div className='container'>
				<h1 className='logo'>
					<Link to='/'> the/MovieFlix </Link>
				</h1>
				<nav className={`nav ${open ? 'open' : ''}`}>
					<ul className='nav-list'>
						<li>
							<NavLink
								exact
								activeClassName='active'
								to='/'
								onClick={() => setOpen(!open)}>
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
							<NavLink
								activeClassName='active'
								to='/movies'
								onClick={() => setOpen(!open)}>
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
							<NavLink
								activeClassName='active'
								to='/tvshows'
								onClick={() => setOpen(!open)}>
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
						{currentUser && (
							<li>
								<NavLink
									activeClassName='active'
									to='/watchlist'
									onClick={() => setOpen(!open)}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z'></path>
										<path d='M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z'></path>
									</svg>
									<span>watchlist</span>
								</NavLink>
							</li>
						)}
					</ul>
				</nav>

				<ul className={`btn-container ${open ? 'open' : ''}`}>
					{!currentUser && (
						<li>
							<NavLink
								to={{ pathname: '/login', state: { from: location } }}
								className='btn log-in'
								onClick={() => setOpen(!open)}>
								<span>Login</span>
							</NavLink>
						</li>
					)}

					{!currentUser && (
						<li>
							<NavLink
								to='/signup'
								className='btn sign-up'
								onClick={() => setOpen(!open)}>
								<span>Register</span>
							</NavLink>
						</li>
					)}

					{currentUser && (
						<li onClick={() => setOpen(!open)}>
							<button className='btn sign-up' onClick={logoutUser}>
								<span>Log out</span>
							</button>
						</li>
					)}

					{currentUser && (
						<li>
							<img src={avatar} alt='popcorn' className='avatar' />
						</li>
					)}
				</ul>

				<div className='hamburger' onClick={() => setOpen(!open)}>
					{!open ? (
						<CgMenuHotdog style={{ fontSize: '25px' }} />
					) : (
						<MdOutlineRestaurantMenu style={{ fontSize: '25px' }} />
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
