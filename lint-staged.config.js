module.exports = {
	'*.{js,ts,tsx}': 'eslint --fix --ext .tsx,.ts,.jsx,.js "./src" ',
	'*.{ts,tsx,css,scss}': 'prettier --write ./src',
	'**/*.ts?(x)': () => 'tsc --noEmit',
};
