const canvas = document.querySelector(".canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
//let color='#'
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// for (let i = 0; i < 80; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   const color = getRandomColor();
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2);
//   c.strokeStyle = color;
//   c.fillStyle =color;
//   c.stroke();
//   c.fill();
// }

// c.beginPath();
// c.moveTo(480, 280);
// c.lineTo(150, 300);
// c.strokeStyle = "#f134ac";
// c.stroke();

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
       this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
    this.y += this.dy;
    
    this.draw();
  }
}


let circleArray = []


for (let i = 0; i < 100; i++) {

  let radius = 30;
let x = Math.random() * (innerWidth - radius*2)+radius;
let y = Math.random() * (innerHeight - radius*2)+radius;
let dx = (Math.random() - 0.5) ;

let dy = (Math.random() - 0.5);

  circleArray.push(new Circle(x, y, dx, dy, radius))

}

console.log(circleArray)

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for (let i = 0; i < circleArray.length; i++){
    circleArray[i].update()
  }

}
animate();
