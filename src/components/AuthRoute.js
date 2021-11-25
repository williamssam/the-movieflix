import { useAuth } from 'hooks/useAuth'
import { Redirect, Route } from 'react-router-dom'

/*
   protect route for page shown to user if logged in
*/
const AuthRoute = (props) => {
	const { currentUser } = useAuth()
	const { children, ...rest } = props

	return (
		<Route
			{...rest}
			render={({ location }) =>
				currentUser ? (
					children
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: location } }}
					/>
				)
			}></Route>
	)
}

export default AuthRoute
