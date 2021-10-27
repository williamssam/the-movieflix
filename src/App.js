import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages'
import MovieDetails from './pages/MovieDetails'
import CastsDetails from './pages/CastsDetails'
import NotFound from './pages/404'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import Series from './pages/Series'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/movies' component={Movies} />
				<Route path='/tv-shows' component={Series} />
				<Route exact path='/:id' component={MovieDetails} />
				<Route exact path='/cast/:id' component={CastsDetails} />
				<Route path='*' component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
