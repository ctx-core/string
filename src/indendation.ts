export function _indentation(indent_count:number, indent = '	') {
	return new Array(indent_count + 1).join(indent)
}
export function _indentation_regexp(spaces:number) {
	const regexpSource = '^' + _indentation(spaces)
	return new RegExp(regexpSource, 'gm')
}
export {
	_indentation as $indentation,
	_indentation_regexp as _regexp__indentation,
	_indentation_regexp as $regexp__indentation,
}
