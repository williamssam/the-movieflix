const Select = ({ selected, setSelected }) => {
	return (
		<div className='select-field'>
			<div className='select'>
				<select
					name='select'
					id='select'
					value={selected}
					onChange={(e) => setSelected(e.currentTarget.value)}>
					<option value='popular'>Popular</option>
					<option value='top_rated'>Top-Rated</option>
					<option value='on_the_air'>On TV</option>
				</select>
			</div>
		</div>
	)
}

export default Select
