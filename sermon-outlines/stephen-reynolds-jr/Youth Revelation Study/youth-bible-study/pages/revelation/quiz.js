import { useState, Component } from 'react'
import styles from '../../styles/Revelation.module.css'
import Head from 'next/head'
import { withRouter } from "next/router"
import Textbook from './textbook'
import Navigation from './navigation'
import Line, { lineTypes } from '../Blocks/Line'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	course: props.router.pathname.replace("/quiz","").replace("/",""),
    	questions: [],
    	file:false,
    	lineTypes: lineTypes,
    	lines:[]
    }
  }

  componentDidMount() {
    let lines = []

    if(localStorage && localStorage.getItem(this.state.course) === null){
   		lines = [];
    }else{
    	lines = JSON.parse(localStorage.getItem(this.state.course));
    }

    this.setState({
    	lines: lines
    })
}

  render() {
  	  const q = this.props.router.query.q? this.props.router.query.q:0
      let lesson = 13

      var rows = [];
      //for (var i = 1; i < 100; i++) {
          
          this.state.lines.map(function(line, index){
            if(line.lesson === lesson){rows.push(<Line key={index} index={index} data={line} read={true}/> ) }    
          })
      //}

    return (
	<div>
	      <Head>
	        <title>Quiz | Youth Revelation Study</title>
	        <link rel="icon" href="/favicon.ico" />
	        <meta charset="UTF-8" />
	      </Head>

		<main>

    {rows}


		</main>

	{/*<Navigation />*/}
</div>
    );
  }


}
export default withRouter(Quiz)

/*
1-4 Ellyanna
5-11 Jeremiah
12-16 Benjamin
17-22 Rosemary

1. Summaries
2. Conclusing of Book 1 sentence

One of these He finds nothing to commend (Laodicea)
Two alone pass inspection (Pergamos and Philadelphia)
Pergamos--thou holdest fast my name, and hast not denied my faith. Philadelphia--hast kept my word, and hast not denied my name. Yet they are in contact with elements which He condemns

    */