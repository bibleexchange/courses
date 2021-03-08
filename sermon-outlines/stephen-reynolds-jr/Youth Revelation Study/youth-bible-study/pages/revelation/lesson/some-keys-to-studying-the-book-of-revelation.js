import Head from 'next/head'
import keysToStudy from './some-keys-to-studying-the-book-of-revelation.md'

export default function notes() {

	const { html, attributes: { title } } = keysToStudy

  return (
	<div dangerouslySetInnerHTML={{ __html: html }} />
	)

}