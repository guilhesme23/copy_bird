let scene
let bird
let ground;
let pipes = [];
let count = 0

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
    scene.drawScene()
    scene.drawBase()

    if (count % 150 === 0) {
        pipes.push(new Pipe())
    } count++

    for (let i=pipes.length-1; i>=0; i--) {
        pipes[i].show();
        pipes[i].update();

        let offscreen = (pipes[i].x + pipes[i].w) < 0
        if (offscreen) {
            pipes.splice(i,1)
            console.log('Bye')
        }
    }
    
    bird.show()
    bird.update()
}