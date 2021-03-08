import styles from '../../styles/Revelation.module.css'
import Head from 'next/head'
import Calendar from './calendar'
import Timeline from './timeline'
import Lessons from './lessons'
import Navigation from './navigation'

export default function Revelation() {
  return (
<div>
      <Head>
        <title>Youth Revelation Study</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
      </Head>

	<main>
	<h1 id="outline">Revelation Study</h1>
	<Lessons/>
	<Navigation />
	<Calendar/>
	<Timeline />
	</main>
</div>

)

}