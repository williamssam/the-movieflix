import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from 'pages/movies'
import MovieDetails from 'pages/movies/MovieDetails'
import NotFound from 'pages/404'
import Header from 'components/Header'
import TvShows from 'pages/tvshows'
import TvShowsDetails from 'pages/tvshows/TvShowsDetails'
import CastsDetails from 'pages/CastsDetails'
import Home from 'pages'
// import Footer from 'components/Footer'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/movies' component={Movies} />
				<Route path='/tvshows' component={TvShows} />
				<Route path='/movie/:id' component={MovieDetails} />
				<Route path='/tvshow/:id' component={TvShowsDetails} />
				<Route path='/cast/:id' component={CastsDetails} />
				<Route path='*' component={NotFound} />
			</Switch>
			{/* <Footer /> */}
		</Router>
	)
}

export default App
