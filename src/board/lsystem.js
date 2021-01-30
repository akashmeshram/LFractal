class Lsystem {
	constructor(data) {
		this.startx = data.startx;
		this.starty = data.starty;
		this.angle = data.angle;
		this.axiom = data.axiom;
		this.sentence = this.axiom;
		this.len = data.len;
		this.factor = data.factor;
		this.weight = data.thickness;
		this.iterations = data.iterations;
		this.branchValue = 1;
		this.check = false;
		this.alphabet= ["F", "f", "X", "x", "Y", "y", "[", "]", "+", "-"];
		this.rules = [this.getRule(data.rule1), this.getRule(data.rule2)];
	}

	getRule(rule) {
		const [letter, becomes] = rule.split("=");
		return {letter, becomes};
	}

	generate() {
		this.len *= this.factor; 
		this.branchValue += 1;
		let nextSentence = "";
		for (let i = 0; i < this.sentence.length; i++) {
			let current = this.sentence.charAt(i);
			if(current === current.toLowerCase()) {
				current = current.toUpperCase();
			}
			let found = false;
		
			if (current === this.rules[0].letter) {
				found = true;
				nextSentence += this.rules[0].becomes;
			} else if (current === this.rules[1].letter) {
				found = true;
				nextSentence += this.rules[1].becomes;
			}
			
			if (!found) {
				nextSentence += current;
			}
		}
		this.sentence = nextSentence;
	}

	draw(p) {
		p.background(0);
		p.resetMatrix();
		p.translate(this.startx, this.starty);

		// Start the L System
		this.sentence = this.axiom;
		this.generate();
		for (let iter = 1; iter < this.iterations; ++iter) {
			this.generate();
		}

		let fromColor = p.color("#ED5B5B");
    let toColor = p.color("#5E04A7");
    
		// Drawing the L System
		for (let i = 0; i < this.sentence.length; i++) {
	    	let current = this.sentence.charAt(i);
		    if (current === "F" || current === "f") {
          p.strokeWeight(2);
          p.stroke(p.lerpColor(fromColor, toColor, i / this.sentence.length));
          p.line(0, 0, 0, -this.len);
          p.translate(0, -this.len);
		    } 
		    else if (current === "+") {
		      	p.rotate(this.angle);
		    } 
		    else if (current === "-") {
		        p.rotate(-this.angle);
		    } 
		    else if (current === "[") {
		    	this.branchValue -= 1;	
		        p.push();
		    } 
		    else if (current === "]") {
		    	this.branchValue += 1;
		        p.pop();
	    	}
		}
	}

}

export default Lsystem;