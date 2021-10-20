import Hero from '../components/Hero'
import Movies from '../components/Movies'
import Select from '../components/Select'
import '../styles/homepage.css'

const Homepage = () => {
	return (
		<main>
			<Hero />

			<section className='section'>
				<div className='container'>
					<Select />
					<Movies />
				</div>
			</section>
		</main>
	)
}

export default Homepage
