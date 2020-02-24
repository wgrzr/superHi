const ball = document.querySelector("div.ball");

let mouseX = 0
let mouseY = 0

let ballX = 0
let ballY = 0

let speed = 0.02

 
function animate() {
    let distX = mouseX - ballX
    let distY = mouseY - ballY

    ballX = ballX + (distX * speed)
    ballY = mouseY + (distY * speed)
    

    ball.style.left = ballX + "px"
    ball.style.top = ballY + "px"

    requestAnimationFrame(animate); //runs
}

animate(); //runs instantly

document.addEventListener("mousemove", function(event) {
   mouseX = event.pageX
   mouseY = event.pageY
});

