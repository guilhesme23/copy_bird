class Pipe {
  constructor() {
    this.x = width;
    this.w = 52;
    this.speed = 1.3;
    this.gapHeight = random(90, 115);
    this.gapY = random(ground - 145);
    this.topPipe = this.gapY;
    this.bottomPipe = ground - (this.gapHeight + this.gapY);

  }

  show() {
    // Top pipe
    fill(12, 122, 12);
    rect(this.x, 0, this.w, this.topPipe);
    image(pipeSprites[0], this.x,  0, this.w, this.topPipe)
    
    // Bottom pipe
    fill(1, 25, 99, 0);
    let bottomY = ground - this.bottomPipe
    rect(this.x, bottomY, this.w, this.bottomPipe);
    image(pipeSprites[1], this.x, bottomY)
    

    // fill(0,0,0,50)
    // rect(this.x, this.gapY, this.w, this.gapHeight)
  }

  update() {
    this.x -= gameSpeed;
  }
}
