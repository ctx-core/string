export function splice_str(str, idx = str.length, rem = 0, add) {
	return str.slice(0, idx) + (add || '') + str.slice(idx + Math.abs(rem))
}
export { splice_str as splice_string, splice_str as splice__str, splice_str as splice__string, }
