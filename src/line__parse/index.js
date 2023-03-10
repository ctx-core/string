/** @typedef {import('../_types').readable_stream_or_reader_T}readable_stream_or_reader_T */
/** @typedef {import('./index.d.ts').line_iterator__on_line_T}line_iterator__on_line */
/**
 * @param {line_iterator__on_line|readable_stream_or_reader_T}on_line_or_readable_stream_or_reader
 * @param {readable_stream_or_reader_T|TextDecoder}[readable_stream_or_reader_or_text_decoder]
 * @param {TextDecoder}[text_decoder]
 * @returns {void|AsyncIterable<string>}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read#example_2_-_handling_text_line_by_line}
 * @private
 */
export function line__parse(
	on_line_or_readable_stream_or_reader,
	readable_stream_or_reader_or_text_decoder,
	text_decoder
) {
	const on_line =
		typeof on_line_or_readable_stream_or_reader === 'function'
		? on_line_or_readable_stream_or_reader
		: null
	/** @type {readable_stream_or_reader_T} */
	const readable_stream_or_reader =
		on_line
		? readable_stream_or_reader_or_text_decoder
		: on_line_or_readable_stream_or_reader
	if (!on_line) text_decoder = readable_stream_or_reader_or_text_decoder
	if (!text_decoder) text_decoder = new TextDecoder('utf-8')
	return (
		on_line
		? line__parse__iterator_().next().then($=>$.value)
		: line__parse__iterator_())
	async function* line__parse__iterator_() {
		/** @type {ReadableStreamDefaultReader|ReadableStreamBYOBReader} */
		const reader =
			(/** @type {ReadableStream} */readable_stream_or_reader).getReader
			? (/** @type {ReadableStream} */readable_stream_or_reader).getReader()
			: readable_stream_or_reader
		let {
			value: chunk,
			done: readerDone
		} = await reader.read()
		chunk = chunk ? text_decoder.decode(chunk, { stream: true }) : ''
		const re = /\r\n|\n|\r/gm
		let startIndex = 0
		for (; ;) {
			let result = re.exec(chunk)
			if (!result) {
				if (readerDone) {
					break
				}
				let remainder = chunk.substring(startIndex);
				({ value: chunk, done: readerDone } = await reader.read())
				chunk =
					remainder + (chunk ? text_decoder.decode(chunk, { stream: true }) : '')
				startIndex = re.lastIndex = 0
				continue
			}
			const line = chunk.substring(startIndex, result.index)
			if (on_line) {
				on_line(line)
			} else {
				yield line
			}
			startIndex = re.lastIndex
		}
		if (startIndex < chunk.length) {
			// last line didn't end in a newline char
			let line = chunk.slice(startIndex)
			if (on_line) {
				on_line(line)
			} else {
				yield line
			}
		}
	}
}
export {
	line__parse as line_iterator_,
}
