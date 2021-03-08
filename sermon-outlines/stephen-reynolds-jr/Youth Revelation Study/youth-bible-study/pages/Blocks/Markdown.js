import ReactMarkdown from 'react-markdown/with-html'

function Markdown(props){

	const { data, update, index, read } = props



	if(read){
		return <ReactMarkdown allowDangerousHtml>{data.value}</ReactMarkdown>
	}else{
	return (<textarea style={{height:"100%"}} type="text" value={data.value} onChange={(e)=>{
		let l = {...data}
		l.value = e.target.value
		update(index, l)
	}}></textarea>)
}
}


export const markdownTemplate = { type:"md", value:"" }
export default Markdown;