class Bird {
    constructor() {
        this.position = createVector(40, height/8)
        this.velocity = createVector()
        this.gravity = createVector(0,1)
        this.lift = -18
        this.w = 34
        this.h = 24
    }

    show() {
        noStroke()
        fill(255,100,100)
        ellipse(this.position.x, this.position.y, this.w, this.h)
    }

    fly() {
        let jump = createVector(0,this.lift)
        this.velocity.add(jump)
        console.log('Jumped!')
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
    }

}