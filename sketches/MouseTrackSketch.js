export default function sketch(p) {
  let num = 60;
  let x = [];
  let y = [];
  let word = "ghost";

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(24);

    for (let i = 0; i < num; i++) {
      x[i] = 0;
      y[i] = 0;
    }
  };

  p.draw = () => {
    p.background(0);

    for (let i = num - 1; i > 0; i--) {
      x[i] = x[i - 1];
      y[i] = y[i - 1];
    }

    x[0] = p.mouseX;
    y[0] = p.mouseY;

    for (let i = 0; i < num; i++) {
      p.fill(255, i * 4);
      p.textSize(32 - i * 0.4);
      p.text(word, x[i], y[i]);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}
