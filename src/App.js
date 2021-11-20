import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from 'pages/movies'
import MovieDetails from 'pages/movies/MovieDetails'
import NotFound from 'pages/404'
import Header from 'components/Header'
import TvShows from 'pages/tvshows'
import TvShowsDetails from 'pages/tvshows/TvShowsDetails'
import CastsDetails from 'pages/CastsDetails'
import Home from 'pages'
import Login from 'pages/Login'
import SignUp from 'pages/SignUp'
import Watchlist from 'pages/Watchlist'
import Footer from 'components/Footer'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/movies' component={Movies} />
				<Route exact path='/tvshows' component={TvShows} />
				<Route exact path='/watchlist' component={Watchlist} />
				<Route exact path='/movie/:id' component={MovieDetails} />
				<Route exact path='/tvshow/:id' component={TvShowsDetails} />
				<Route exact path='/cast/:id' component={CastsDetails} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
				<Route path='*' component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
