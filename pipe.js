class Pipe {
    constructor() {
        this.topHeight = random(300);
        this.bottomHeight = random(300);
        this.x = width
        this.w = 52
        this.speed = 1.3
    }

    show() {
        fill(12,122,12)
        rect(this.x, 0, this.w,this.topHeight)
        rect(this.x, ground - this.bottomHeight, this.w,this.bottomHeight)
    }

    update() {
        this.x -= this.speed
    }
}