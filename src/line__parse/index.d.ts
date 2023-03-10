import type { readable_stream_or_reader_T } from '../_types'
export declare function line__parse(
	readable_stream_or_reader:readable_stream_or_reader_T,
	text_decoder?:TextDecoder
):AsyncIterable<string>
export declare function line__parse(
	on_line:line_iterator__on_line_T,
	readable_stream_or_reader:readable_stream_or_reader_T,
	text_decoder?:TextDecoder
):void
export {
	line__parse as line_iterator_,
}
export type line_iterator__on_line_T = (line:string)=>any
