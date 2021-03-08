import styles from '../../styles/Revelation.module.css'
import Head from 'next/head'
import Outline from './outline'
import Lessons from './lessons'

import Front from './lesson/some-keys-to-studying-the-book-of-revelation'
import Introduction from './lesson/a_introduction'
import ChristAndSevenGoldenCandlesticks from './lesson/b_christ-and-seven-golden-candlesticks'
import SevenLetters from './lesson/c_seven-letters-to-seven-churches'
import VisionOfTheThrone from './lesson/d_vision-of-the-throne'
import SevenSeals from './lesson/e_seven-seals'
import SevenTrumpets from './lesson/f_angels-and-seven-trumpets'
import WarInHeavenAndEarth from './lesson/g_a-war-in-heaven-and-a-war-on-earth'
import TwoBeastsAndDragon from './lesson/h_two-beasts-and-the-dragon'
import ALambStoodOnMountSion from './lesson/i_a-lamb-stood-on-mount-sion'
import JudgmentHourMessages from './lesson/j_judgment-hour-messages'
import SevenLastPlagues from './lesson/k_seven-last-plagues'
import FallOfBabylon from './lesson/l_fall-of-babylon'
import MarriageAndMarriageFeast from './lesson/m_marriage-and-marriage-feast'
import MillenialKingdom  from './lesson/n_millenial-kingdom'
import LastJudgment  from './lesson/o_last-judgment'
import AllThingsNew from './lesson/p_all-things-new'
import Closing from './lesson/q_closing'

import PicturesOfChrist from './topical/pictures-of-christ'
import PeopleOfRevelation from './topical/people-of-revelation'

export default function Textbook(props) {

	const components = {
			front: <Front />,
			a : <Introduction />,
			b: <ChristAndSevenGoldenCandlesticks/>,
			c: <SevenLetters/>,
			d: <VisionOfTheThrone/>,
			e: <SevenSeals/>,
			f: <SevenTrumpets/>,
			g: <WarInHeavenAndEarth/>,
			h: <TwoBeastsAndDragon/>,
			i: <ALambStoodOnMountSion/>,
			j: <JudgmentHourMessages/>,
			k: <SevenLastPlagues/>,
			l: <FallOfBabylon/>,
			m: <MarriageAndMarriageFeast/>,
			n: <MillenialKingdom/>,
			o: <LastJudgment/>,
			p: <AllThingsNew/>,
			q: <Closing/>,
			picturesofchrist: <PicturesOfChrist/>,
			peopleofrevelation: <PeopleOfRevelation/>

		}

	if(props.part){
		return components[props.part]
	}

  return (
<div>
      <Head>
        <title>Textbook | Revelation Study</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
      </Head>

	<main>

	<h1 id="youth-study-of-revelation">Youth Study of Revelation</h1>

	<h2>Book Outline</h2>
		<Outline />
	<h2 id="outline">Study Outline</h2>
		<Lessons />

		{Object.keys(components).map(function(part){
			return components[part];
		})}

<nav className={styles.quickNav}><a href="#outline">outline</a></nav>

	</main>
</div>

)

}