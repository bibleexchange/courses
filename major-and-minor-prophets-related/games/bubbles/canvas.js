// Canvas Setup
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const ongoingTouches = []

canvas.width=innerWidth;
canvas.height=innerHeight-(.1*innerHeight);
ctx.font = "50px Georgia";

function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}

window.addEventListener('resize', ()=>{
	canvas.width=innerWidth;
	canvas.height=innerHeight-(.1*innerHeight);
})

// Mouse Interactivity
let canvasPosition = canvas.getBoundingClientRect();

// Mouse Interactivity
const mouse = {
	x: canvas.width/2,
	y: canvas.height/2,
	click: false
}

canvas.addEventListener("touchstart", handleStart, false);
canvas.addEventListener("touchend", handleEnd, false);
canvas.addEventListener("touchcancel", handleCancel, false);
canvas.addEventListener("touchmove", handleMove, false);

window.addEventListener("keydown", (e)=>{
	
	if(!state.game.lock){
	switch(e.keyCode){
    case 72:// h
      console.log('command: add heart')
      if(state.player.lives < 10){
        let newThing = new Thing(state.game.level === 0? 1:state.game.level, true, true)
        dispatch({type:actions.THING_ADD, value: newThing})
      }
      break;
		case 75:// k
			console.log('command: kill')
			state.player.lives = -1
			break;
		case 76:// l
			console.log('command: level up')
			state.game.gameFrame += 1200
			break;
		case 83:// s
			console.log('command: start')
			dispatch({type: actions.GAME_RESTART})
			break;
    default:
      console.log("uncaught key code", e.keyCode)
      console.log(".")
	}
}
}, false)

function handleStart(e){
  e.preventDefault();
  console.log("touchstart.");
  var touches = e.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    console.log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");

    mouse.click = true
	mouse.x = touches[i].pageX  - canvasPosition.left;
	mouse.y = touches[i].pageY - canvasPosition.top;
  }
}
function handleMove(evt){
	 evt.preventDefault();
 
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      console.log("continuing touch "+idx);
      ctx.beginPath();
      console.log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      console.log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record

		mouse.x = touches[i].pageX - canvasPosition.left;
		mouse.y = touches[i].pageY - canvasPosition.top;

      console.log(".");
    } else {
      console.log("can't figure out which touch to continue");
    }
  }	
}
function handleEnd(evt){
	 mouse.click = false

	evt.preventDefault();
  log("touchend");
 
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
      console.log("can't figure out which touch to end");
    }
  }
}
function handleCancel(evt){
	 evt.preventDefault();
	  mouse.click = false
  console.log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}

canvas.addEventListener('mousemove', onControllerMove, false)
canvas.addEventListener('mouseup', onMouseUp, false)
canvas.addEventListener("mousedown", function(e) {
	onControllerMove
}, false);

//Event Functions
function onControllerMove(event){
	mouse.click = true
	mouse.x = event.x - canvasPosition.left;
	mouse.y = event.y - canvasPosition.top;
}

function onMouseUp(event){
	mouse.click = false
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}