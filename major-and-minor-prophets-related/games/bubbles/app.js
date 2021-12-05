const soundambient = document.createElement('audio')
soundambient.src = 'assets/sounds/bubbles-loop.mp3'

const sound1 = document.createElement('audio')
sound1.src = 'assets/sounds/ding.mp3'
const sound2 = document.createElement('audio')
sound2.src = 'assets/sounds/whoops.mp3'

soundambient.addEventListener("ended", function(e){
  soundambient.play()
}, false);

start.addEventListener('click',(e)=>{
	dispatch({type:actions.GAME_RESTART})
}, false)

//Initialize State

let state = {
	game: new Game(),
	player: new Player(),
	things: [],
	images: new Image(),
	levelSounds: [
		null,
		level1amb,
		level2amb,
		level3amb
	]
}

state.images.src = "assets\\spritesheets\\yellow_idle_lef_right.png"
//Initialize State end

function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}

function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  console.log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}

function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found
}

function calculateLevel(gameFrame){

	const lev = Math.round(gameFrame/1200)
	return lev < 1 || gameFrame === 0? 0:lev
}

function playLevelSound(level){

	for(let i=0; i < state.levelSounds.length;i++){
		//Level 0
		if(level === 0){
			if(i !== 0){
				state.levelSounds[i].pause()
				state.levelSounds[i].currentTime = 0
			}
		}

		//Level 1 TO level 3
		if(level > 0 && level < 4){
			if(i == level){
				state.levelSounds[i].currentTime = 0;
				state.levelSounds[i].play();
			}else if(i !== 0){
				state.levelSounds[i].pause();
				state.levelSounds[i].currentTime = 0;
			}
		}

		//Level 4 on
		//nothing
	}
}

// Animation Loop
function animate(){

	let level = calculateLevel(state.game.gameFrame)

	if(state.game.level !== level){
		state.game.level = level

		if(level <= 4){state.player.lives++;}
		playLevelSound(level)
	}

	bodyEl.classList.add("fish-game-level-" + level);

	if( state.player.lives >= 0 && state.game.started){
		ctx.font = "50px Georgia";
		ctx.clearRect(0,0,canvas.width,canvas.height)

		ctx.fillStyle = "black";
		ctx.fillText("score: " + state.player.score, 0,50)
		//ctx.fillText("time: " + (state.game.timer -(Math.round(state.game.gameFrame/60))), 200,50)
		ctx.fillText("lives: " + state.player.lives, 400,50)

		ctx.fillStyle = "white";
		ctx.fillText(state.game.level == 0? "level " +1:"level " +state.game.level, canvas.width/2,canvas.height/2)

		dispatch({type:actions.THINGS_RENDER, value:level})
		dispatch({type:actions.PLAYER_UPDATE})
		dispatch({type:actions.PLAYER_DRAW})

		dispatch({type:actions.GAME_FRAME_INCREMENT})

		//drawing grid
		/*ctx.fillStyle = 'black';
		ctx.beginPath();

		for(let i=0; i<11; i++){
			ctx.rect(i*50,50,50,50)
			ctx.closePath();
			ctx.stroke();
			for(let x=0; x<11; x++){
				ctx.rect(i*50,x*50,50,50)
				ctx.closePath();
				ctx.stroke();
			}
		}
	//drawing grid end

		ctx.fillStyle = '#2b04ff36';
		ctx.beginPath();
		ctx.arc(350,350,60,0,Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
*/
	}else if(state.game.started){
		dispatch({type:actions.GAME_END})
		
		ctx.clearRect(0,0,canvas.width,canvas.height)

		let el = null;
		let titleEl = document.createElement('h1')
		titleEl.innerHTML = "My Score: " + state.player.score
		scoresEl.appendChild(titleEl);

		for(let i = 0; i < state.game.scores.length; i++){
			el = document.createElement('li')
			el.innerHTML = state.game.scores[i].player + " " + state.game.scores[i].score
			scoresEl.appendChild(el)
		}
		
	}else if(state.game.lock){
		console.log('locked')
	}else{
		//console.log('not sure, nothing started', player)
	}

	requestAnimationFrame(animate)
}

animate()