// convert language code to full name e.g converts 'fr' to 'french'
export const getLanguageName = (language) => {
	const languageNamesInEnglish = new Intl.DisplayNames(['en'], {
		type: 'language',
	})

	const lang = languageNamesInEnglish.of(language)

	return lang
}
