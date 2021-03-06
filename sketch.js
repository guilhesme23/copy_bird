function preload() {
    let bgImage;
    let baseImg;
    let midflap
    let upflap
    let downflap
    let dayTime = ['day','night']
    let choice = floor(random(0,2))
    bgImage = loadImage(`data/sprites/background-${dayTime[choice]}.png`);
    baseImg = loadImage('data/sprites/base.png')
    scene = new Scene(bgImage, baseImg)
    
    // Load bird sprites
    midflap = loadImage('data/sprites/yellowbird-midflap.png')
    birdSprites.push(midflap)
    upflap = loadImage('data/sprites/yellowbird-upflap.png')
    birdSprites.push(upflap)
    downflap = loadImage('data/sprites/yellowbird-downflap.png')
    birdSprites.push(downflap)

    // Pipes sprites
    let pipeUp = loadImage('data/sprites/pipe-green-down.png')
    pipeSprites.push(pipeUp)
    let pipeDown = loadImage('data/sprites/pipe-red.png')
    pipeSprites.push(pipeDown)

}

function setup() {
    createCanvas(288, 512)
    ground = height - 112;
    bird = new Bird(birdSprites)
}

function draw() {
    background(0)
    scene.drawScene();

    createPipes();

    renderPipes();

    bird.show();
    bird.update();

    checkHits()

    scene.drawBase();
}