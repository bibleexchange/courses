import Quiz , {quizTemplate} from './Quiz'
import H1 , {h1Template} from './H1'
import P , {pTemplate} from './P'
import Markdown , {markdownTemplate} from './Markdown'
import Timeline , {timelineTemplate} from './Timeline'

export default function Line(props){

	switch(props.data.type){
		case quizTemplate.type:
			return <Quiz {...props}/>
			break;

		case h1Template.type:
			return <H1 {...props}/>
			break;


		case pTemplate.type:
			return <P {...props}/>
			break;

		case markdownTemplate.type:
			return <Markdown {...props}/>
			break;

		case timelineTemplate.type:
			return <Timeline {...props}/>
			break;

		default:
			return <div/>
	}
	return blocks[props.type] 
}

export const lineTypes = [ markdownTemplate.type, h1Template.type,"h2",pTemplate.type,"blockquote",quizTemplate.type]

export const templates = {
	quiz: { ...quizTemplate, lesson:1},
	h1: { ...h1Template, lesson:1},
	p: { ...pTemplate, lesson:1},
	md: { ...markdownTemplate, lesson:1},
	timeline: { ...timelineTemplate, lesson:1}
}