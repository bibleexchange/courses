import styles from '../../styles/Revelation.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Textbook from './textbook'
import Navigation from './navigation'

export default function lesson() {

  const router = useRouter()
  const { part } = router.query

  return (
<div>
      <Head>
        <title>Lesson 9 | Youth Revelation Study</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
      </Head>

	<main>
    <Textbook part={part} />
	</main>

<Navigation />
</div>

)

}