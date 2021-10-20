const Select = () => {
	return (
		<form class='form'>
			<div class='select-field'>
				<div class='select'>
					<select name='select' id='select'>
						<option value='popular'>Popular Movies</option>
						<option value='latest'>Latest Movies</option>
						<option value='top-rated'>Top-Rated Movies</option>
						<option value='upcoming'>Upcoming Movies</option>
					</select>
				</div>
			</div>

			<div class='input-field'>
				<svg
					class='icon'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
				</svg>
				<div>
					<label for='search-field'>Search</label>
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
