// const baseUrl = 'https://pokeapi.co/api/v2'

import useSWR from 'swr'
import Error from '../components/Error'

export const useRequest = (path) => {
	if (!path) {
		throw new Error('Path is required')
	}

	const { data, error } = useSWR(path)

	if (!data) return <h2>Loading....</h2>

	return { data, error }
}
