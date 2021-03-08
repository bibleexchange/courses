function Timeline(props){

	const { data, update, index, read } = props

	const style = {

/*.flex-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.input-flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 100px;
  max-width: 1000px;
  position: relative;
  z-index: 0;
}

.input {
  width: 25px;
  height: 25px;
  background-color: #2C3E50;
  position: relative;
  border-radius: 50%;
}
.input:hover {
  cursor: pointer;
}
.input::before, .input::after {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
  background-color: #2C3E50;
  width: 4vw;
  height: 5px;
  max-width: 50px;
}
.input::before {
  left: calc(-4vw + 12.5px);
}
.input::after {
  right: calc(-4vw + 12.5px);
}
.input.active {
  background-color: #2C3E50;
}
.input.active::before {
  background-color: #2C3E50;
}
.input.active::after {
  background-color: #AEB6BF;
}
.input.active span {
  font-weight: 700;
}
.input.active span::before {
  font-size: 13px;
}
.input.active span::after {
  font-size: 15px;
}
.input.active ~ .input, .input.active ~ .input::before, .input.active ~ .input::after {
  background-color: #AEB6BF;
}
.input span {
  width: 1px;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
}
.input span::before, .input span::after {
  visibility: visible;
  position: absolute;
  left: 50%;
}
.input span::after {
  content: attr(data-year);
  top: 25px;
  transform: translateX(-50%);
  font-size: 14px;
}
.input span::before {
  content: attr(data-info);
  top: -65px;
  width: 70px;
  transform: translateX(-5px) rotateZ(-45deg);
  font-size: 12px;
  text-indent: -10px;
}

.description-flex-container {
  width: 80vw;
  font-weight: 400;
  font-size: 22px;
  margin-top: 100px;
  max-width: 1000px;
}
.description-flex-container p {
  margin-top: 0;
  display: none;
}
.description-flex-container p.active {
  display: block;
}

@media (min-width: 1250px) {
  .input::before {
    left: -37.5px;
  }

  .input::after {
    right: -37.5px;
  }
}
@media (max-width: 850px) {
  .input {
    width: 17px;
    height: 17px;
  }
  .input::before, .input::after {
    height: 3px;
  }
  .input::before {
    left: calc(-4vw + 8.5px);
  }
  .input::after {
    right: calc(-4vw + 8.5px);
  }
}
@media (max-width: 600px) {
  .flex-parent {
    justify-content: initial;
  }

  .input-flex-container {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 15vh;
  }

  .input {
    width: 60px;
    height: 60px;
    margin: 0 10px 50px;
    background-color: #AEB6BF;
  }
  .input::before, .input::after {
    content: none;
  }
  .input span {
    width: 100%;
    height: 100%;
    display: block;
  }
  .input span::before {
    top: calc(100% + 5px);
    transform: translateX(-50%);
    text-indent: 0;
    text-align: center;
  }
  .input span::after {
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ECF0F1;
  }

  .description-flex-container {
    margin-top: 30px;
    text-align: center;
  }
}
@media (max-width: 400px) {
  body {
    min-height: 950px;
  }
}*/}

	if(read){
		return (
			<div>{style}
			<div class="flex-parent">
    <div class="input-flex-container">
        <div class="input">
            <span data-year="1910" data-info="headset"></span>
        </div>
        <div class="input">
            <span data-year="1920" data-info="jungle gym"></span>
        </div>
        <div class="input active">
            <span data-year="1930" data-info="chocolate chip cookie"></span>
        </div>
        <div class="input">
            <span data-year="1940" data-info="Jeep"></span>
        </div>
        <div class="input">
            <span data-year="1950" data-info="leaf blower"></span>
        </div>
        <div class="input">
            <span data-year="1960" data-info="magnetic stripe card"></span>
        </div>
        <div class="input">
            <span data-year="1970" data-info="wireless LAN"></span>
        </div>
        <div class="input">
            <span data-year="1980" data-info="flash memory"></span>
        </div>
        <div class="input">
            <span data-year="1990" data-info="World Wide Web"></span>
        </div>
        <div class="input">
            <span data-year="2000" data-info="Google AdWords"></span>
        </div>
    </div>
    <div class="description-flex-container">
        <p>And future Call of Duty players would thank them.</p>
        <p>Because every kid should get to be Tarzan for a day.</p>
        <p class="active">And the world rejoiced.</p>
        <p>Because building roads is inconvenient.</p>
        <p>Ain’t nobody got time to rake.</p>
        <p>Because paper currency is for noobs.</p>
        <p>Nobody likes cords. Nobody.</p>
        <p>Brighter than glow memory.</p>
        <p>To capitalize on an as-yet nascent market for cat photos.</p>
        <p>Because organic search rankings take work.</p>
    </div>
</div>



<div style="position: absolute; bottom: 40px; right: 10px; font-size: 12px">
    <a href="https://codepen.io/cjl750/pen/XMyRoB" target="_blank">original version with slinky mobile menu</a></div>
<div style="position: absolute; bottom: 15px; right: 10px; font-size: 12px">
    <a href="https://codepen.io/cjl750/pen/wdVxzV" target="_blank">alternate version with custom range input</a></div>
<div style="position: absolute; bottom: 15px; left: 10px; font-size: 18px; font-weight: bold">
    <a href="https://codepen.io/cjl750/pen/MXvYmg" target="_blank">version 4: pure CSS!</a></div>
			</div>
)
	}else{
	return (<><h2><input type="text" value={props.data.title} onChange={(e)=>{
		let l = {...props.data}
		l.title = e.target.value
		update(index, l)
	}}/></h2><ol>
	    {props.data.questions.map(function(q,i){

	    	const keys = q? Object.keys(q):[]
	    	return <li key={i}>

	    		    	<button style={{color:"red", marginLeft:"15px"}} onClick={(e)=>{
			    			let newData = {...props.data}
			    			delete newData.questions[i]
			    			update(index,newData)
			    		}}>x</button>

	    		{keys.map(function(k){
	    			if(k === "answers"){
	    				return (props.data.questions[i][k].map(function(q,answerid){
	    					return <div key={answerid}><textarea className={styles.option} type="text" onChange={
						    		(e)=>{
						    			let newData = {...props.data}
						    			newData.questions[i][k][answerid].text = e.target.value
						    			update(index,newData)
						    		}} value={props.data.questions[i][k][answerid].text}></textarea><span className={styles.questionLabel}>TEXT</span>
						    		<textarea className={styles.option} type="text" onChange={
						    		(e)=>{
						    			let newData = {...props.data}
						    			newData.questions[i][k][answerid].points = e.target.value
						    			update(index,newData)
						    		}} value={props.data.questions[i][k][answerid].points}></textarea><span className={styles.questionLabel}>POINTS</span>
				    		</div>
	    				})) 

	    			}else{

	    			return <div key={k}><textarea className={styles.questions +" " + styles[k]} type="text" onChange={
			    		(e)=>{
			    			let newData = {...props.data}
			    			newData.questions[i][k] = e.target.value
			    			update(index,newData)
			    		}} value={q[k]}></textarea><span className={styles.questionLabel}>{k}</span>

			    		<button style={{color:"red", marginLeft:"15px"}} onClick={(e)=>{
			    			let newData = {...props.data}
			    			newData.questions.splice(i, 1);
			    			update(index,newData)
			    		}}>x</button>
	    		</div>
	    			}
	    		})}

	    		   <form onSubmit={(e)=>{
			      	    e.preventDefault();
					    const index = e.target.index.value
					    const prop = e.target.prop.value
					    const val = e.target.val.value

					    let newData = {...props.data}
					    newData.questions[index][prop] = val
					    update(index,newData)

	    		   }}>
	    		   	<input type="hidden" name="index" value={i} />
			        <label>
			          Key:
			          <input type="text" name="prop" />
			        </label>
			  		<label>
			          Value:
			          <input type="text" name="val"/>
			        </label>
			        <input type="submit" value="+" />
			      </form>

			      <hr/>
	    		</li>
	    })}
	    </ol>

	    	<button onClick={function(e){
	    		let newData = {...props.data}
			    newData.questions.push(quizTemplate.questions[0])
			    update(index,newData)
	    	}}>add new question</button>
	    	</>)
	    }
	    
	    }


export const timelineTemplate = { type:"timeline", title:"NEW TIMELINE", entries:[{
        "date": "date",
        "body": "body"
      }] }

export default Timeline;