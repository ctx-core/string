export function indentation_(indent_count:number, indent = '	') {
	return new Array(indent_count + 1).join(indent)
}
export function indentation_regexp_(spaces:number) {
	const regexpSource = '^' + indentation_(spaces)
	return new RegExp(regexpSource, 'gm')
}
export {
	indentation_ as _indentation,
	indentation_ as $indentation,
	indentation_regexp_ as _indentation_regexp,
	indentation_regexp_ as _regexp__indentation,
	indentation_regexp_ as $regexp__indentation,
}
