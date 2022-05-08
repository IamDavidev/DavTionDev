export const validateTitletAsk = (title: string): string => {
	// validate title
	if (title.length > 30) return title.substring(0, 30) + ' ..}';

	return title;
};
