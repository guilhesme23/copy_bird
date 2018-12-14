class Scene {
    constructor(backgroundImage, floorImage) {
        this.bgImage = backgroundImage
        this.base = floorImage
        this.baseOffset = -112 // Image height
    }

    drawScene() {
        image(this.bgImage, 0,0)
    }
    
    drawBase() {
        image(this.base, 0, height + this.baseOffset)
        let s = 'Score: ' + score.toString()
        textSize(24)
        text(s, 10, height - 70)
    }
}