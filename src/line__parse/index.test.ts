import { Readable } from 'stream'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { line__parse } from './index'
test('line__parse|!include_line_separator|callback', async ()=>{
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
test('line__parse|include_line_separator|callback', async ()=>{
	const readable = new Readable()
	readable.push('foo\n')
	readable.push('bar baz\r\n')
	readable.push('quux\r')
	readable.push(null)
	const line_a:string[] = []
	await line__parse(
		line=>line_a.push(line),
		Readable.toWeb(readable),
		{ include_line_separator: true })
	equal(line_a, [
		'foo\n',
		'bar baz\r\n',
		'quux\r',
	])
})
test('line__parse|!include_line_separator|iterator', async ()=>{
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
test('line__parse|!include_line_separator|iterator', async ()=>{
	const readable = new Readable()
	readable.push('foo\n')
	readable.push('bar baz\n')
	readable.push('\n')
	readable.push(null)
	const line_a:string[] = []
	for await (const line of line__parse(
		Readable.toWeb(readable),
		{ include_line_separator: true }
	)) {
		line_a.push(line)
	}
	equal(line_a, [
		'foo\n',
		'bar baz\n',
		'\n',
	])
})
test.run()
