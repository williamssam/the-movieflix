const LoadMoreBtn = ({ page, setPage }) => {
	return (
		<button className='load-more-btn' onClick={() => setPage(page + 1)}>
			Load More
		</button>
	)
}

export default LoadMoreBtn
