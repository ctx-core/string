export declare function line__transform_stream_(
	include_line_separator?:boolean,
	writable_strategy?:QueuingStrategy<string>,
	readable_strategy?:QueuingStrategy<string>
):TransformStream<string, string>
