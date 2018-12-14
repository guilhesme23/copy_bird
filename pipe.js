class Pipe {
    constructor() {
        this.x = width
        this.w = 52
        this.speed = 1.3
        this.gapHeight = 115
        this.gapY = random(ground - 145)
        this.topPipe = this.gapY;
        this.bottomPipe = ground - (this.gapHeight + this.gapY);
    }

    show() {
        fill(12,122,12)
        rect(this.x, 0, this.w, this.topPipe)
        fill(1,25,99)
        rect(this.x, ground - this.bottomPipe, this.w, this.bottomPipe);
        // fill(0,0,0,50)
        // rect(this.x, this.gapY, this.w, this.gapHeight)
    }

    update() {
        this.x -= this.speed
    }
}