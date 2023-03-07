/**
 * @param {ReadableStreamDefaultReader<string>}readable
 * @param {TextDecoder}[text_decoder]
 * @returns {Iterable<string>}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read#example_2_-_handling_text_line_by_line}
 * @private
 */
export async function* line_iterator_(
	reader,
	text_decoder = new TextDecoder('utf-8')
) {
	let { value: chunk, done: readerDone } = await reader.read()
	chunk = chunk ? text_decoder.decode(chunk, { stream: true }) : ''
	let re = /\r\n|\n|\r/gm
	let startIndex = 0
	for (; ;) {
		let result = re.exec(chunk)
		if (!result) {
			if (readerDone) {
				break
			}
			let remainder = chunk.substr(startIndex);
			({ value: chunk, done: readerDone } = await reader.read())
			chunk =
				remainder + (chunk ? text_decoder.decode(chunk, { stream: true }) : '')
			startIndex = re.lastIndex = 0
			continue
		}
		yield chunk.substring(startIndex, result.index)
		startIndex = re.lastIndex
	}
	if (startIndex < chunk.length) {
		// last line didn't end in a newline char
		yield chunk.slice(startIndex)
	}
}
