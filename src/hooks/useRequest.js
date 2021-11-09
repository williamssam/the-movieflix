// const baseUrl = 'https://pokeapi.co/api/v2'

import useSWR from 'swr'
const apiKey = process.env.REACT_APP_API_KEY

export const useRequest = (id, type) => {
	const url = `https://api.themoviedb.org/3${type}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits,similar,recommendations`

	const { data, error } = useSWR(url)

	return { data, error }
}
