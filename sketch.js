let totems = [];
function preload() {
  for (let i = 0; i < 4; i++) {
    totems[i] = loadImage("images/totem-" + i + ".png");
  }
}

let xStart = 0;
let yStart = 0;
function setup() {
  createCanvas(800, 800);
  background(0);

  let xCount = floor(random(3, 10));
  let xWidth = width / xCount;

  let yCount = floor(random(3, 10));
  let yHeight = width / yCount;

  if (xWidth < yHeight) {
    yHeight = xWidth;
    yStart = (height - yCount * yHeight) / 2;
  } else if (xWidth > yHeight) {
    xWidth = yHeight;
    xStart = (width - xCount * xWidth) / 2;
  }

  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      let randomRot = floor(random(0, 4)) * 90;
      if (random() < 0.1) {
        tint(255, 0, 0);
      } else if (random() < 0.3) {
        tint(255, 100, 0);
      } else {
        tint(255, 255, 255);
      }
      JoeImage(x * xWidth, y * yHeight, xWidth, yHeight, randomRot);
    }
  }
}

function JoeImage(_x, _y, _w, _h, _rotation) {
  let tx = xStart + _x + _w * 0.5;
  let ty = yStart + _y + _h * 0.5;

  let dx = -0.5 * _w;
  let dy = -0.5 * _h;

  push();

  translate(tx, ty);
  angleMode(DEGREES);
  rotate(_rotation);

  let totemIndex = floor(random(0, 4));
  image(totems[totemIndex], dx, dy, _w, _h);

  pop();
}

function draw() {}
