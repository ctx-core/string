export function _title_case(str:string) {
	const title_case =
		str == null
		? ''
		: str.toString().replace(
			/\w\S*/g,
			(txt:string)=>
				txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
	return title_case
}
export {
	_title_case as titleCase,
	_title_case as toTitleCase,
	_title_case as titleCase__string,
}
