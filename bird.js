class Bird {
    constructor() {
        this.position = createVector(width/2, height/2)
        this.velocity = createVector()
        this.acceleration = createVector()
        this.gravity = createVector(0,1)
        this.w = 34
        this.h = 24
    }

    show() {
        noStroke()
        fill(255,100,100)
        ellipse(this.position.x, this.position.y, this.w, this.h)
    }

    addGravity() {
        if (this.position.y < ground) {
          this.acceleration.add(this.gravity);
        } else {
          this.acceleration = createVector();
          this.velocity = createVector()
          this.position.y = ground
        }
    }

    update() {
        this.addGravity()
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }

}