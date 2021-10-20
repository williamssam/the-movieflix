import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages'
import MovieDetails from './pages/MovieDetails'
import CastsDetails from './pages/CastsDetails'
import NotFound from './pages/404'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' exact component={Homepage} />
				<Route path='/movie-details' component={MovieDetails} />
				<Route path='/casts-details' component={CastsDetails} />
				<Route path='*' component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
