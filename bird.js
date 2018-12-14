class Bird {
    constructor(sprites) {
        this.position = createVector(40, height/8)
        this.velocity = createVector()
        this.gravity = createVector(0,1)
        this.lift = -23
        this.w = 34
        this.h = 24
        this.xpos = this.position.x - (this.w / 2)
        this.ypos = this.position.y - (this.h / 2)
        this.animation = []
        if (sprites) {
            this.animation = sprites
        }
        this.animate = false
    }

    show() {
        noStroke()
        fill(255,100,100, 0)
        ellipse(this.position.x, this.position.y, this.w, this.h)
        fill(255,100,100)
        if (this.animation.length > 0 && !this.animate) {
            image(this.animation[0], this.xpos, this.ypos);
        }

        if (this.animate) {
            let sp = 0.3
            for (let i = 0; i < 500; i+=sp) {
                let index = floor(i) % 3
                image(this.animation[index], this.xpos, this.ypos)
            }
            this.animate = false
        }
    }

    fly() {
        let jump = createVector(0,this.lift)
        this.velocity.add(jump)
        this.animate = true
    }

    updateImagePos() {
        this.xpos = this.position.x - this.w / 2;
        this.ypos = this.position.y - this.h / 2;
    }

    update() {
        this.velocity.add(this.gravity)
        this.velocity.mult(0.8)
        if (this.position.y > ground) {
            this.position.y = ground
            this.velocity.mult(0)
        } 
        this.position.add(this.velocity)
        if (this.position.y < 0) {
            this.position.y = 0
        }
        this.updateImagePos()
    }

}