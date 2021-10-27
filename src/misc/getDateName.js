// get date like 22-07-2021 and converts it to Thursday, 22 July 2021. you can change the dateStyle to either 'medium, short, long' to get other result
export const getDateName = (dateStr, locale) => {
	var date = new Date(dateStr)
	return date.toLocaleDateString(locale, { dateStyle: 'full' })
}
