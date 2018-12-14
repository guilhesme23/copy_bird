// Globals
let scene;
let bird;
let birdSprites = [];
let ground;
let pipes = [];
let count = 0;
let score = 0;
let gameSpeed = 1.3
let pipeRate = 150
let maxPipeRate = 60
let maxSpeed = 6

function keyPressed() {
    if (key === ' ') {
        bird.fly()
    }
}

function renderPipes() {
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      let offscreen = pipes[i].x + pipes[i].w < 0;
      if (offscreen) {
        pipes.splice(i, 1);
        score++
        if (score % 4 === 0 && score !== 0) {
            gameSpeed < maxSpeed ? gameSpeed += 0.3 : gameSpeed
            pipeRate > maxPipeRate ? pipeRate -= 15 : pipeRate
        }
      }
    }
}

function createPipes() {
    if (count % pipeRate === 0) {
      pipes.push(new Pipe());
    }
    count++;
}

function checkHits() {
    for (let pipe of pipes) {
        evalHit(pipe, bird)
    }
}

function evalHit(pipe, birdie) {
    let err = 5
    let birdWidth = birdie.position.x + (birdie.w/2) - err
    let birdHeight = birdie.position.y + (birdie.h/2) - err

    let riskArea = birdHeight < pipe.topPipe || birdHeight > (pipe.gapY + pipe.gapHeight)
    let notOkay = birdWidth > pipe.x && birdWidth < (pipe.x + pipe.w)

    if (riskArea) {
        if (notOkay) {
            console.log('COLLISION!!!!!1!')
            console.log(birdWidth)
            console.log(birdHeight)
            console.log(pipe)
            console.log(birdie.position)
            pipe.highlight = true
            noLoop()
            return
        } else {
            pipe.highlight = false
        }
    }
}