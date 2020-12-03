function Pipe() {
	this.top = random(height / 2);
	this.bottom = random(height / 2);
	this.x = width;
	this.speed = 2;
	this.w = 20;
	this.highlight = false;
	
	this.hits = function (bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.w) {
				this.highlight = true;
				return true;
			}
		}
		this.highlight = false;
	}

	this.show = function () {
		fill(255);
		if (this.highlight) {
			fill(255, 0, 0);
		}
		rect(this.x, 0, 20, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}

	this.update = function () {
		this.x -= this.speed;
	}



	this.offscreen = function () {
		if (this.x < -this.w)
			return true;
		else
			return false;
	}
}
