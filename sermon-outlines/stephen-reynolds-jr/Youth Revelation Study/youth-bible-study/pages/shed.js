import Head from 'next/head'
import styles from '../styles/Home.module.css'

const db = {
  sheds : [
    {
      id:'reynolds-example',
      deck:{
        floor: {material:'advantech'},
        width:144,
        length:144,
        insulate: false,
        oncenter:16,
        skids:{count:2}
      },
      walls:{
        a: {
        length:144,
        stud:72,        
        openings:[
          {type:'window', style: 'standard', width:18, height:27, top:72.5, trim: false, box:false, shutters: false},
          {type:'door', style:'vinyl', width: 61.75, height:72.5, position: 0, ramp:{width:52, length:60}},
          {type:'window', style: 'standard', width:18, height:27, top:72.5, trim: false, box:false, shutters: false}
        ]
        },
        b: {
          length:144,        
          openings:[
            {type:'door', style: 'garage', width:96, height:84, top:84}
          ]},
        c:{length:144,        
        openings:[
          {type:'window', style: 'standard', width:18, height:27, top:72.5, trim: false, box:false, shutters: false},
          {type:'window', style: 'standard', width:18, height:27, top:72.5, trim: false, box:false, shutters: false}
        ], loft:{width:36, length: 96}},
        d:{length:144,        
        openings:[
          {type:'window', style: 'standard', width:18, height:27, top:72.5, trim: false, box:false, shutters: false},
          {type:'window', style: 'standard', width:18, height:27, top:72.5, trim: false, box:false, shutters: false}
        ]},
        insulate: false,
        electrical: false
      },
      roof: {
        type:'gable',
        insulate:false
      },
      siding: {
        type:'vinyl',
        color:'white'
      },
      roof:{
        type: 'shingle',
        color: 'black',
        vent: 'gable'
      }
    
    }
  ]
  }

function processOpenings(shed){

	  const opts = {
	    strokeWidth:1,
	    wallSize: 6,
	    openingSize: 12,
	    positionOffset:9
	  }

	let garageDoors = 0
	let walls = ["a","b","c","d"]
	let w = []

    walls.map(function(wall){
		shed.walls[wall].openings.map(function(v,k){
			
			if(v.type === "door" && v.style==="garage"){
				garageDoors++;
				w.push(wall)
			}

			    let space = {
			      empty: 0,
			      solid: shed.walls[wall].length,
			      spacing: 0
			    };

			    shed.walls[wall].openings && shed.walls[wall].openings.map(function(o){
			      space.empty = space.empty + o.width
			      space.solid = space.solid-o.width
			    }) 

			    space.spacing = shed.walls[wall].openings && space.solid/(shed.walls[wall].openings.length+1)

			    let position = 0

			      switch(k){

			        case 0:
			          position = space.spacing
			          break;

			        case 1:
			          position = space.spacing + shed.walls[wall].openings[0].width + space.spacing
			          break;

			        case 2:
			          position = space.spacing + shed.walls[wall].openings[0].width + space.spacing + shed.walls[wall].openings[1].width+ space.spacing
			          break;
			      }
			    

			  let text = "W"

		      if(v.type === "door" && v.style === "garage"){
		        text = "GAR"
		      }else if(v.type === "door"){
		      	text = "DR"
		      }

		    shed.openings = {
		    	garageDoors: garageDoors,
		    	garageDoorOn: w
		    }

			shed.walls[wall].openings[k].position = position
			shed.walls[wall].openings[k].text = text
			shed.walls[wall].space = space

			switch(wall){
				case "a":
					shed.walls[wall].openings[k].drawing = {
						x:position, 
						y:shed.walls.b.length-opts.wallSize, 
						textx:position+(shed.walls[wall].openings[k].width*.3), 
						texty:shed.walls.b.length+(opts.wallSize*.5),
						width: shed.walls[wall].openings[k].width,
						height: opts.wallSize
					}
					break;

				case "b":
					shed.walls[wall].openings[k].drawing = {
						x:0, 
						y:position, 
						textx:0, 
						texty:position+(shed.walls[wall].openings[k].width/2),
						width: opts.wallSize,
						height: shed.walls[wall].openings[k].width}
					break;

				case "c":
					shed.walls[wall].openings[k].drawing = {
						x:position, 
						y:(opts.wallSize*1)-opts.wallSize, 
						textx:position, 
						texty:(opts.wallSize*2.5)-opts.wallSize,
						width: shed.walls[wall].openings[k].width,
						height: opts.wallSize
					}
					break;

				case "d":
					shed.walls[wall].openings[k].drawing = {
						x:shed.walls.b.length-opts.wallSize,
						y:position, 
						textx:shed.walls.b.length-(opts.wallSize*2), 
						texty:position+(shed.walls[wall].openings[k].width*.8),
						width: opts.wallSize,
						height: shed.walls[wall].openings[k].width
					}
					break;

			}

		})
	})

	return shed
}

function processDecks(shed){

		{/*Plate Length*/}
		shed.deck.plates = {length: shed.deck.length}
   		{/*Joists*/}
        shed.deck.joists = {
        	length: shed.deck.width-3,
        	count: Math.ceil((shed.deck.length/shed.deck.oncenter)+1) + shed.openings.garageDoors,
        	layout: []
        }

		  let x = .75
		  
		  while (x < shed.deck.length-.75){
		  	
		  	
		  	if(x === .75){

				shed.deck.joists.layout.push(x)

				if(shed.openings.garageDoorOn.includes('b')){
					shed.deck.joists.layout.push(2.25)
				}
				x = 0
		  	}

		  	x += shed.deck.oncenter

		  	if(x+shed.deck.oncenter >= shed.deck.length){ 
		  		const diff = shed.deck.length-(x-shed.deck.oncenter)	
		  		x = shed.deck.length - (diff*.5)
		  		shed.deck.joists.layout.push(x)
		  		break;
		  	}

		  	if(x === shed.deck.length){
		  		x = shed.deck.length-.75
		  	}

		  	shed.deck.joists.layout.push(x)
		  }    

		if(shed.openings.garageDoorOn.includes('d') ){
			shed.deck.joists.layout.push(shed.deck.length-2.25)
		}

		shed.deck.joists.layout.push(shed.deck.length-.75)

		{/*SKIDS*/}

		if(shed.deck.skids.count <= 2 && shed.deck.width <= 144){
			shed.deck.skids.layout = [
				{x: 0, y: (shed.deck.width/2)-36},
				{x: 0, y: (shed.deck.width/2)+36} 
			]
			
		}else if(shed.deck.skids.count === 4 || shed.deck.width > 144){
			shed.deck.skids.layout = [
				{x: 0, y: 0},
				{x: 0, y: (shed.deck.width/2)-36},
				{x: 0, y: (shed.deck.width/2)+36} ,
				{x: 0, y: shed.deck.width} 
			]
		}

		shed.deck.skids.count = shed.deck.skids.layout.length

		{/*FLOOR*/}

		if(shed.deck.floor.material === "advantech"){
			shed.deck.floor.area = (shed.deck.width/12)*(shed.deck.length/12)
			shed.deck.floor.areaunit = "sq ft"
			shed.deck.floor.pieces = shed.deck.width*shed.deck.length/(48*96)
		}

		return shed
}

function data(db){


	db.sheds.map(function(val, key){
		let shed = processOpenings(val)
		shed = processDecks(shed)
		db.sheds[key] = shed
	})

	console.log(db.sheds[0])
	return db
}

function Opening(props){

 return (<><rect x={props.opening.drawing.x} y={props.opening.drawing.y} height={props.opening.drawing.height} width={props.opening.drawing.width} stroke="gray" fill="white"/>
              <text x={props.opening.drawing.textx} y={props.opening.drawing.texty} fill="red">{props.opening.text}</text></>)

}

const FloorPlan = function(props) {

	  const opts = {
	    strokeWidth:1,
	    wallSize: 6,
	    openingSize: 12,
	    positionOffset:9
	  }

  return (<svg height={props.walls.b.length} width={props.walls.a.length} viewBox={"-10 -1 "+ (props.walls.a.length + 40) + " " + (props.walls.b.length)} 
    stroke-width={opts.strokeWidth}
    stroke-alignment="inner"
    >

     <rect x={opts.wallSize} y={props.walls.b.length-opts.wallSize} height={opts.wallSize} width={props.walls.a.length-(opts.wallSize*2)} stroke="black" fill="black"/>
     <text x={props.walls.a.length*.45} y={props.walls.b.length+15} fill="gray">A</text>
     {props.walls.a.openings.map(function(o,i){
        return <Opening wall={props.walls.a} opening={o} key={i} size={opts.openingSize} position={props.walls.b.length-opts.positionOffset} />
     })}

     <rect x="0" y={0} height={props.walls.b.length} width={opts.wallSize} stroke="black" fill="black"/>
     <text x={-11} y={props.walls.b.length*.45} fill="gray">B</text>
      {props.walls.b.openings.map(function(o,i){
        return <Opening wall={props.walls.b} opening={o} key={i} size={opts.openingSize} position={0} horizontal={false}/>
      })}

     <rect x={opts.wallSize} y={0} height={opts.wallSize} width={props.walls.c.length-(opts.wallSize*2)} stroke="black" fill="black"/>
     <text x={props.walls.a.length*.45} y={0} fill="gray">C</text>
    {props.walls.c.openings.map(function(o,i){
        return <Opening wall={props.walls.c} opening={o} key={i} size={opts.openingSize} position={-3} />
     })}

     <rect x={props.walls.a.length-(opts.wallSize)} y={0} height={props.walls.d.length} width={opts.wallSize} stroke="black" fill="black"/>
    <text x={props.walls.a.length+7} y={props.walls.d.length*.45} fill="gray">D</text>
    {props.walls.d.openings.map(function(o,i){
        return <Opening wall={props.walls.d} opening={o} key={i} size={opts.openingSize} position={props.walls.a.length-(opts.wallSize)} horizontal={false}/>
      })}

  </svg>)
}

const Deck = function(props) {

  const opts = {
    strokeWidth:1
  }

  const joists = []
 
 for (var i = 0; i < props.deck.joists.count; i++) {
 	let x = props.deck.joists.layout[i]
 	let sub = .75
  	joists.push(<rect x={x-sub} y={1.5} height={props.deck.width-1.5} width={1.5} stroke="black" fill="none"/>)
 }

  return (<svg height={props.deck.width} width={props.deck.length} viewBox={"-10 -1 "+ (props.deck.length + 40) + " " + (props.deck.width)} 
    stroke-width={opts.strokeWidth}
    stroke-alignment="inner"
    >
 	{/*SKIDS*/}
 	{props.deck.skids.layout.map(function(skid){
 		return <rect x={skid.x} y={skid.y} height={3.5} width={props.deck.length} stroke="black" fill="blue"/>
 	})}

 		{/*PLATES*/}
     <rect x={0} y={props.deck.width} height={1.5} width={props.deck.length} stroke="black" fill="none"/>
     <rect x={0} y={0} height={1.5} width={props.deck.length} stroke="black" fill="none"/>

 	{/*JOISTS*/}
     {joists}
     
  </svg>)
}

const WorkOrder = function(props) {

  return (<div>
      <h1>Work Order ({props.shed.id})</h1>

      <h2>DECK</h2>
        Size: <input type="text" value={props.shed.deck.width/12} /> (w) x <input type="text" value={props.shed.deck.length/12} /> (l) <br/>
        Insulate: <input type="checkbox" value={props.shed.deck.insulate} />
        <br/>
        Plate Length: {props.shed.deck.plates.length}"
        <br/>
        Joists Length: {props.shed.deck.joists.length}"
        <br/>
        Joists Count: {props.shed.deck.joists.count}"

      <h2>Walls</h2>

    	<textarea>{JSON.stringify(props.shed)}</textarea>
    </div>)
}

export default function Shed() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shed Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Shed Assistant
        </h1>

        <p className={styles.description}>
          Work Orders
        </p>

        <div className={styles.grid}>

          {
            data(db).sheds.map(function(shed){
              return (          
              <div className={styles.card}>
                <h3>{shed.id}</h3>
                <p>{shed.walls.b.length/12}' x {shed.walls.a.length/12}'</p>
                <hr/>
                <Deck {...shed}/>
                <FloorPlan {...shed}/>
                <hr/>
                <WorkOrder shed={shed} />

              </div>
          )
            })
          }



        </div>
      </main>

      <footer className={styles.footer}>
        Created by Stephen Reynolds, Jr.
      </footer>
    </div>
  )
}
