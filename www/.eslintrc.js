module.exports = {
	extends: [
		'../.eslintrc.js',
		'@deloitte-digital-au/eslint-config-react'
	],
	overrides: [
		{
			"files": ["**/*.tsx"],
			"rules": {
				"react/prop-types": "off"
			}
		}
	]
}
