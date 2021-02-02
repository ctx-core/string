import { _wrap_a1 } from '@ctx-core/function'
export function case_insensitive_eql(a1_unwrap:string[]) {
	const value_a1 = _wrap_a1<string>(a1_unwrap)
	let current_value = value_a1[0]?.toString()?.toLowerCase()
	for (let i = 1; i < value_a1.length; i++) {
		const value = value_a1[i]?.toString()?.toLowerCase()
		if (current_value !== value) return false
	}
	return true
}