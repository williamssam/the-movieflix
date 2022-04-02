import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/header.css'
import { useAuth } from 'hooks/useAuth'
import { logoutUser } from 'services/auth-service'
import { CgMenuHotdog } from 'react-icons/cg'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import avatar from 'assets/avatar.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IoTv, IoHome, IoFilm, IoBookmarks } from "react-icons/io5";

/*
	the website header
**/
const Header = () => {
	const [open, setOpen] = useState(false)
	const [navFixed, setNavFixed] = useState(false)
	const { currentUser } = useAuth()
	const location = useLocation()

	useEffect(() => {
		window.addEventListener('scroll', () =>
			setNavFixed(window.pageYOffset > 300)
		)
	}, [])

	return (
		<header className={`header ${navFixed ? 'fixednav' : ''}`}>
			<motion.div
				initial={{ y: -250 }}
				animate={{ y: 0 }}
				className='container'>
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
								<IoHome />
								<span>home</span>
							</NavLink>
						</li>

						<li>
							<NavLink
								activeClassName='active'
								to='/movies'
								onClick={() => setOpen(!open)}>
								<IoFilm />
								<span>movies</span>
							</NavLink>
						</li>

						<li>
							<NavLink
								activeClassName='active'
								to='/tvshows'
								onClick={() => setOpen(!open)}>
								<IoTv />
								<span>series</span>
							</NavLink>
						</li>
						{currentUser && (
							<li>
								<NavLink
									activeClassName='active'
									to='/watchlist'
									onClick={() => setOpen(!open)}>
									<IoBookmarks />
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
			</motion.div>
		</header>
	)
}

export default Header
