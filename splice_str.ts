export function splice_str(
	str: string, idx = str.length, rem = 0, add?
) {
	return (str.slice(0, idx) + (add || '') + str.slice(idx + Math.abs(rem)))
}
export const splice_string = splice_str
export const splice__str = splice_str
export const splice__string = splice_str
