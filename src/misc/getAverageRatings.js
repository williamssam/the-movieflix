// displays color based on the ratings
export const getAverageRatings = (vote) => {
	if (vote >= 8) {
		return 'good'
	} else if (vote >= 5) {
		return 'average'
	} else {
		return 'bad'
	}
}
