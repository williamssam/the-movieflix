const Select = () => {
	return (
		<form className='form'>
			<div className='select-field'>
				<div className='select'>
					<select name='select' id='select'>
						<option value='popular'>Popular Movies</option>
						<option value='latest'>Latest Movies</option>
						<option value='top-rated'>Top-Rated Movies</option>
						<option value='upcoming'>Upcoming Movies</option>
					</select>
				</div>
			</div>

			<div className='input-field'>
				<svg
					className='icon'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
				</svg>
				<div>
					<label htmlFor='search-field'>Search</label>
					<input
						type='search'
						name='search-field'
						id='search-field'
						placeholder='Search the/movieflix'
					/>
				</div>
			</div>
		</form>
	)
}

export default Select
