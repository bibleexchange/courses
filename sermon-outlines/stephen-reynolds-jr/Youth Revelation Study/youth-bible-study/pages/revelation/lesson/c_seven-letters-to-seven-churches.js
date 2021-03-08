import Head from 'next/head'
import sevenLetterToSevenChurches from './c_seven-letters-to-seven-churches.md'

export default function notes() {

	const { html, attributes: { title } } = sevenLetterToSevenChurches

  return (
	<div dangerouslySetInnerHTML={{ __html: html }} />
	)

}