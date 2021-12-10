import { Link } from 'react-router-dom'
import image from '../assets/29.png'
import '../styles/NotFound.css'

/*
	*****
	404 page
	****
*/
const NotFound = () => {
	return (
		<div className='not-found'>
			<img src={image} alt='' />

			<div>
				<h2>404</h2>
				<h3>Page not found</h3>
				<p>Sorry, we can't find the page you are looking for 😢</p>

				<Link to='/' class='home-btn'>
					Back to home
				</Link>
			</div>
		</div>
	)
}

export default NotFound
