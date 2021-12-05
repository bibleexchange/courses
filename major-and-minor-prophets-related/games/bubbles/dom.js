let scoresEl = document.getElementById('scores')
let bubbles = document.getElementById('background-wrap')

const bodyEl = document.getElementById('fish-game')
const menu = document.getElementById('game-menu')

const start = document.createElement('button')
start.innerText = "start"
menu.appendChild(start)

const playerName = document.createElement('input')
playerName.id = "name"
playerName.value = "Anonymous"
menu.appendChild(playerName)

playerName.addEventListener("change", function(e){
	dispatch({type: actions.PLAYER_UPDATE_NAME, value: e.target.value})
}, false)

playerName.addEventListener("focus", function(e){
	state.game.lock = true
}, false)

playerName.addEventListener("blur", function(e){
	state.game.lock = false
}, false)

const level1amb = document.createElement('audio')
level1amb.src = 'assets/sounds/level-1.mp3'
const level2amb = document.createElement('audio')
level2amb.src = 'assets/sounds/level-2.mp3'
const level3amb = document.createElement('audio')
level3amb.src = 'assets/sounds/level-3.mp3'