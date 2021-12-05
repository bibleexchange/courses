class Game {
	constructor(){
		this.lock = false
		this.started = false;
		this.timer = 25;
		this.gameFrame = 0;
		this.level = 1;
		this.scores = JSON.parse(localStorage.getItem('fish-game'));
		if(!this.scores){this.scores = []}
	}

	restart(){
		this.started = true;
		this.gameFrame = 0;
		this.level = 1;
		localStorage.setItem('fish-game',JSON.stringify(this.scores))
		dispatch({type:actions.PLAYER_RESTART})		
		removeAllChildNodes(scoresEl);
		bodyEl.className = 'fish-game-level-1'

		soundambient.pause()
		soundambient.currentTime = 0
		soundambient.play()
	}

	end(){
		this.level = 0;
		if(state.player.name == ""){
			let pr = prompt('What is your name?')
			state.player.name = pr
			playerNameInput.value = pr
		}

		dispatch({type:actions.THINGS_CLEAR})	
		this.started = false
		this.scores.push({player:state.player.name, score: state.player.score})

		this.scores.sort(function(a, b) {
		  return b.score-a.score;
		});

		if(this.scores.length > 10){
			this.scores = [...this.scores.slice(0,10)]
		}

		soundambient.pause()
		soundambient.currentTime = 0;

		level1amb.pause(); level1amb.currentTime = 0;
		level2amb.pause(); level2amb.currentTime = 0;
		level3amb.pause(); level3amb.currentTime = 0;

	}

handleThings(level){

	if(this.gameFrame % 35 == 0 && level == 2){ //run every 35 frames
		dispatch({type:actions.THING_ADD, value:new Thing(level)})
	}else if(this.gameFrame % 15 == 0 && level == 3){//run every 15 frames
		dispatch({type:actions.THING_ADD, value:new Thing(level)})
	}else if(this.gameFrame % 15 == 0 && level >= 4){//run every 15 frames
		dispatch({type:actions.THING_ADD, value:new Thing(level)})
		dispatch({type:actions.THING_ADD, value:new Thing(level)})
	}else if(this.gameFrame % 50 == 0){//run every 50 frames
		dispatch({type:actions.THING_ADD, value: new Thing(level)})
	}

	if(this.gameFrame % 1000 == 0 && level == 3){//run every 99 frames
		dispatch({type:actions.THING_ADD, value:new Thing(level, true)})
	}else if(this.gameFrame % 500 == 0 && level > 3){//run every 99 frames
		dispatch({type:actions.THING_ADD, value:new Thing(level, true)})
	}	

	for( let i = 0; i < state.things.length; i++){
		dispatch({type:actions.THING_UPDATE_DRAW, value:i})
	}

	for( let i = 0; i < state.things.length; i++){
		if(state.things[i].y < 0 - state.things[i].radius * 2){
			dispatch({type:actions.THING_CLEAR, value:i})
		}

		if(state.things[i]){
			//let invisible = state.player.x > 400 && state.player.x < 450 && state.player.y > 250 && state.player.y < 300
			if(state.things[i].distance < (state.things[i].radius/3) + state.player.radius /*&& !invisible*/){
				dispatch({type:actions.COLISSION, value:i})
			}
		}
	}
}
}
