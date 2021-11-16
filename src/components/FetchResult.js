import Error from './Error'
import Loader from './Loader'

/**
 * Fetched Result conditionally renders states:
 * movies - which is the data received, error or its children when data is ready
 */
const FetchResult = ({ movies, error, children }) => {
	if (!movies) return <Loader />
	if (error) return <Error />
	if (movies) return children
}

export default FetchResult
