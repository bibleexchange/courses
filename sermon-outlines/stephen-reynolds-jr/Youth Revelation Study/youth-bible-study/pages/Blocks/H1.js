function H1(props){

	const { data, update, index, read } = props

	if(read){
		return <h1>{data.value}</h1>
	}else{
	return (<><span>h1</span><h1><input type="text" value={props.data.value} onChange={(e)=>{
		let l = {...props.data}
		l.value = e.target.value
		update(index, l)
	}}/></h1></>)
	}
}


export const h1Template = { type:"h1", value:"" }
export default H1;