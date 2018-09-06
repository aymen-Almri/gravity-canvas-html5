
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.color = 'red';
var gravity = 0.5;
var friction = 1;
var numberCir = 200;
var colors = ['#2185C5', '#7ECEFD', '#FF56E5', '#FF7F66'];

addEventListener('click', function () {
    friction = 0.88;
    init();
    animate();
});
// Objects
function Ball(x, y, dy,radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.update = function() {
        if (this.y + this.radius > canvas.height){
            this.dy = -this.dy * friction;
            console.log(this.dy);
        }else{
            this.dy += gravity;
        }
        this.y += this.dy;
        //console.log(this.y);
        this.draw()
    };

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
}}



// Implementation
var circleArray = [];
function init() {
  circleArray = [];
  for (var i = 0; i < numberCir; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;

    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 4;
    var radius = Math.random() * 14 + 9;
   
    circleArray.push(new Ball(x, y, dy, radius));
  }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
}

init()
animate()
