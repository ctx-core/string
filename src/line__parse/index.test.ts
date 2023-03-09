import { Readable } from 'stream'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { line__parse } from './index'
test('line__parse|callback', async ()=>{
	const readable = new Readable()
	readable.push('foo\n')
	readable.push('bar baz\n')
	readable.push('\n')
	readable.push(null)
	const line_a:string[] = []
	await line__parse(
		line=>line_a.push(line),
		Readable.toWeb(readable))
	equal(line_a, [
		'foo',
		'bar baz',
		'',
	])
})
test('line__parse|iterator', async ()=>{
	const readable = new Readable()
	readable.push('foo\n')
	readable.push('bar baz\n')
	readable.push('\n')
	readable.push(null)
	const line_a:string[] = []
	for await (const line of line__parse(Readable.toWeb(readable))) {
		line_a.push(line)
	}
	equal(line_a, [
		'foo',
		'bar baz',
		'',
	])
})
test.run()
