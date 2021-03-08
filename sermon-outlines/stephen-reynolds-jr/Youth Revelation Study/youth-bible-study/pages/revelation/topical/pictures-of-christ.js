import Head from 'next/head'
import picturesOfChrist from './pictures-of-christ.md'
	
	export default function notes() {

  	const { html, attributes: { title } } = picturesOfChrist

  return (
<div>

<div dangerouslySetInnerHTML={{ __html: html }} />

</div>

)

}