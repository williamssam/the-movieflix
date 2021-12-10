/*
	*****
	hook to fetch data with infinite loading ability
	****
*/
import useSWRInfinite from 'swr/infinite';
const apiKey = process.env.REACT_APP_API_KEY;

const useInfiniteLoad = (type, rank) => {
	const { data, error, size, setSize } = useSWRInfinite(
		(index) =>
			`https://api.themoviedb.org/3${type}/${rank}?api_key=${apiKey}&language=en-US&page=${
				index + 1
			}`
	);

	const movies = data ? [...data] : [];
	const isLoadingInitialData = !data && !error;
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === 'undefined');

	return { movies, error, isLoadingMore, size, setSize };
};

export default useInfiniteLoad;
