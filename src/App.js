import { Switch, Route } from 'react-router-dom'
import MoviesHome from 'pages/movies/MoviesHome'
import MovieDetails from 'pages/movies/MovieDetails'
import NotFound from 'pages/404'
import Header from 'components/Header'
import TvShowsHome from 'pages/tvshows/TvShowsHome'
import TvShowsDetails from 'pages/tvshows/TvShowsDetails'
import CastsDetails from 'pages/CastsDetails'
import Home from 'pages'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Watchlist from 'pages/Watchlist'
import Footer from 'components/Footer'
import AuthRoute from 'components/AuthRoute'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/movies' component={MoviesHome} />
				<Route exact path='/tvshows' component={TvShowsHome} />
				{/* on show if user is logged in */}
				<AuthRoute path='/watchlist' exact>
					<Watchlist />
				</AuthRoute>
				<Route exact path='/movie/:id' component={MovieDetails} />
				<Route exact path='/tvshow/:id' component={TvShowsDetails} />
				<Route exact path='/cast/:id' component={CastsDetails} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route path='*' component={NotFound} />
			</Switch>
			<Footer />
		</>
	)
}

export default App
