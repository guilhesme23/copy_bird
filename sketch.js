let bgImage;

function preload() {
    let dayTime = ['day','night']
    let choice = floor(random(0,2))
    bgImage = loadImage(`data/sprites/background-${dayTime[choice]}.png`);
}

function setup() {
    createCanvas(288, 512)
}

function draw() {
    background(bgImage)
}