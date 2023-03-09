import type { ReadableStream as node_ReadableStream } from 'stream/web'
export type readable_reader_T =
	ReadableStream
	|node_ReadableStream
	|ReadableStreamDefaultReader
	|ReadableStreamBYOBReader
export declare type line_iterator__readable_reader_T = readable_reader_T
