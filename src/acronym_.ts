export function acronym_(string:string) {
	return (string && string.match(/\b(\w)/g)?.join('')) || ''
}
export {
	acronym_ as _acronym,
}
