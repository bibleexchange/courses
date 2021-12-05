//Global State

const actions = {
	COLISSION: "COLISSION",

	THING_ADD: "THING_ADD",
	THING_ADD_HEART:"THING_ADD_HEART",
	THING_CLEAR:"THING_CLEAR",
	THING_UPDATE_DRAW: "THING_UPDATE_DRAW",
	THINGS_RENDER: "THINGS_RENDER",
	THINGS_CLEAR: "THINGS_CLEAR",

	GAME_END: "GAME_END",
	GAME_FRAME_INCREMENT: "GAME_FRAME_INCREMENT",
	GAME_RESTART: "GAME_RESTART",
	
	PLAYER_UPDATE_SCORE: "PLAYER_UPDATE_SCORE",
	PLAYER_RESTART: "PLAYER_RESTART",
	PLAYER_UPDATE: "PLAYER_UPDATE",
	PLAYER_UPDATE_NAME: "PLAYER_UPDATE_NAME",
	PLAYER_DRAW: "PLAYER_DRAW"
}

function dispatch(action){

	if(action.type != "THING_ADD") {
		console.log(action.type, action.value)
	}
	switch (action.type){

		case actions.COLISSION:
			colission(action.value)
			break;
		case actions.THING_ADD:
			state.things.push(action.value)
			break;
		case actions.THING_UPDATE:
			state.things[action.value.index] = {...action.value.props}
			break;
		case actions.THING_UPDATE_DRAW:
			state.things[action.value].update();
			state.things[action.value].draw();
			break;
		case actions.THING_CLEAR:
			state.things.splice(action.value,1);
			break;

		case actions.THINGS_CLEAR:
			state.things = []
			break;

		case actions.THINGS_RENDER:
			state.game.handleThings(action.value);
			break;
		
		case actions.GAME_END:
			state.game.end()
			break;
		case actions.GAME_FRAME_INCREMENT:
			state.game.gameFrame++;
			break;
		case actions.GAME_RESTART:
			state.game.restart()
			break;

		case actions.PLAYER_UPDATE_SCORE:
			state.player.score = action.value
			break;
		case actions.PLAYER_RESTART:
			state.player.restart()
			break;
		case actions.PLAYER_UPDATE:
			state.player.update()
			break;
		case actions.PLAYER_UPDATE_NAME:
			state.player.name = action.value
			playerName.innerText = action.value
			break;
		case actions.PLAYER_DRAW:
			state.player.draw()
			break;
	}
}

function colission(index){
	if(!state.things[index].counted){
		if(state.things[index].sound == 'sound1'){
			sound1.currentTime = 0;
			sound1.play();
		}else{
			sound2.currentTime = 0;
			sound2.play();
		}
		let newScore = 0;

		if(state.things[index].isGood && state.things[index].health){
			state.player.lives++;
			state.player.score++;
		}else if(state.things[index].isGood){
			state.player.score++;
		}else{
			state.player.score--;
			state.player.lives--;
		}
		state.things.splice(index,1);
	}
}