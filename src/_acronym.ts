export function _acronym(string:string) {
	return (string && string.match(/\b(\w)/g)?.join('')) || ''
}
