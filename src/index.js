import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import App from './App'
import './index.css'

const fetcher = async (...args) => {
	const res = await fetch(...args)

	if (!res.ok) {
		const error = new Error('An error occurred while fetching the data.')
		// Attach extra info to the error object.
		error.info = await res.json()
		error.status = res.status
		throw error
	}

	return res.json()
}

ReactDOM.render(
	<React.StrictMode>
		<SWRConfig value={{ fetcher }}>
			<App />
		</SWRConfig>
	</React.StrictMode>,
	document.getElementById('root')
)
