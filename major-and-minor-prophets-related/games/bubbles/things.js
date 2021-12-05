// Things

class Thing {

	constructor(level, health = false, force = false){
		this.health = health
		this.level = level
		this.radius = 50;
		this.distance;
		this.counted = false;
		this.origin = 'top'
		this.isGood = health? true : Math.random() <= 0.5

		if(force){
			this.frameX = 2;
			this.frameY = 4;
			this.isGood = health;
			this.speed = Math.random() * 5 + 1;
		}else if(!this.isGood){
			let fromTheTop = Math.random() <= 0.5

			if(!fromTheTop && level > 1){
				this.origin = Math.random() <= 0.5? "left":"right"
			}
			this.frameX = 3;
			this.frameY = 2;

			if(level <= 2){
				this.speed = Math.random() * 2 + 1;
			}else{
				this.speed = Math.random() * 5 + 1;
			}
		}else{
			if(this.health){
				this.frameX = 2;
				this.frameY = 4;
			}else{
				this.frameX = 2;
				this.frameY = 2;
			}

			this.speed = Math.random() * 2 + 1;
		}

		switch(this.origin){

			case 'top':
				//Come Down from the Top
				this.x = Math.random() * canvas.width;
				this.y = -100
				break;
			case 'bottom':
				//Come Up from the Bottom
				//NOT USED YET
				this.x = Math.random() * canvas.width;
				this.y = canvas.height + 100;
				break;
			case 'right':
				//Come In from the Right
				this.x = canvas.width + 100;
				this.y = Math.random() * canvas.width;

				this.frameX = 3;
				this.frameY = 3;

				break;
			case 'left':
				//Come In from the Right
				this.x = -100;
				this.y = Math.random() * canvas.width;

				this.frameX = 2;
				this.frameY = 3;
				break;
		}
		
		this.sound = this.isGood ? "sound1":"sound2";
		this.spriteWidth = 498;
		this.spriteHeight = 327;
	}

	update(){

		switch(this.origin){

			case 'top':
				this.y += this.speed;
				break;
			case 'left':
				this.x += this.speed;
				break;
			case 'right':
				this.x -= this.speed;
				break;

		}
		
		const dx = (this.x) - state.player.x;
		const dy = (this.y) - state.player.y;
		this.distance = Math.sqrt(dx*dx + dy*dy); //Pythagorean Theorum
	}

	draw(){
		//ctx.fillStyle = 'blue';
		//ctx.beginPath();
		//ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
		//ctx.fill();
		//ctx.closePath();
		//ctx.stroke();

		const frame = this.getFrame()
		ctx.drawImage(
			state.images, 
			frame.x * this.spriteWidth, 
			frame.y * this.spriteHeight, 
			this.spriteWidth, 
			this.spriteHeight,
			this.x-60, 
			this.y-45,
			this.spriteWidth/4, this.spriteHeight/4
		)

	}

	getFrame(){
			return {
				x:this.frameX,
				y: this.frameY
			} 
	}
}