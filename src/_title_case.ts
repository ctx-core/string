export function _title_case(str) {
	const title_case =
		str == null
		? ''
		: str.toString().replace(
			/\w\S*/g,
			txt=>
				txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
	return title_case
}
export const titleCase = _title_case
export const toTitleCase = _title_case
export const titleCase__string = titleCase
