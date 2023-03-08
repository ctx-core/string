import type { readable_reader_T } from '../_types'
export declare function line_iterator_(
	readable_stream_or_reader:readable_reader_T,
	text_decoder?:TextDecoder
):Iterable<string>
export declare function line_iterator_(
	cb:line_iterator__cb,
	readable_stream_or_reader:readable_reader_T,
	text_decoder?:TextDecoder
):Iterable<void>
export type line_iterator__cb = (line:string)=>any
