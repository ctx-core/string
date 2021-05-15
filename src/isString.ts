export function isString(obj:any) {
	return !!(obj === '' || (obj && obj.charCodeAt && obj.substr))
}
