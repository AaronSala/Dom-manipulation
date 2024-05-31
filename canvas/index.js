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

function Circle(){
  
}

let x = Math.random()*innerWidth;
let dx = (Math.random()-0.5)*8
let y = Math.random()*innerHeight
let dy=(Math.random()-0.5)*8
let radius=30

function animate() {
  requestAnimationFrame(animate)
c.clearRect(0, 0, innerWidth, innerHeight)

c.beginPath();
c.arc(x, y, 40, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
  c.stroke();
  
  if (x + radius> innerWidth || x-radius<0) { 
    dx=-dx
  }
  if (y + radius > innerHeight || y-radius<0) {
    dy= -dy
  }
  x += dx
  y +=dy
  
}
animate()