export function _acronym(string) {
	return string && string.match(/\b(\w)/g).join('')
}
