function preload() {
    let bgImage;
    let baseImg;
    let dayTime = ['day','night']
    let choice = floor(random(0,2))
    bgImage = loadImage(`data/sprites/background-${dayTime[choice]}.png`);
    baseImg = loadImage('data/sprites/base.png')
    scene = new Scene(bgImage, baseImg)
}

function setup() {
    createCanvas(288, 512)
    ground = height - 112;
    bird = new Bird()
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