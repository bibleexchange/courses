function P(props){

	const { data, update, index, read } = props

	if(read){
		return <p>{data.value}</p>
	}else{
	return (<><span>p</span><p><input type="text" value={data.value} onChange={(e)=>{
		let l = {...data}
		l.value = e.target.value
		update(index, l)
	}}/></p></>)
}
}


export const pTemplate = { type:"p", value:"" }
export default P;