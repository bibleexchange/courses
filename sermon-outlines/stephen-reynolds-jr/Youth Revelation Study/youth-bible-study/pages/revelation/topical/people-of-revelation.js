import Head from 'next/head'
import peopleOfRevelation from './people-of-revelation.md'
	
	export default function notes() {

  	const { html, attributes: { title } } = peopleOfRevelation

  return (
<div>

<div dangerouslySetInnerHTML={{ __html: html }} />

</div>

)

}