const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';

const context = canvas.getContext('2d');
context.scale(2, 2);

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let i = 0;
const imgs = [
  "./img/photo1.jpg",
  "./img/photo2.jpg",
  "./img/photo3.jpg",
  "./img/photo4.jpg",
  "./img/photo5.jpg",
  "./img/photo6.jpg",
  "./img/photo7.jpg",
].map(src => {
  const image = document.createElement('img');
  image.src = src;
  return image;
});


document.addEventListener('mousemove', function (e) {
  aimX = e.pageX;
  aimY = e.pageY;
  if (currentX === null) {
    currentX = e.pageX;
    currentY = e.pageY;
  }
});

document.addEventListener('click', function () {
  i = i + 1;
  if (i >= imgs.length) {
    i = 0;
  }
});

const draw = function () {
  if (currentX) {
    if (imgs[i].complete) {
      context.drawImage(imgs[i], currentX - 200, currentY - 300, 400, 600);
    }

    currentX = currentX + (aimX - currentX) * 0.1;
    currentY = currentY + (aimY - currentY) * 0.1;
  }

  requestAnimationFrame(draw);
};

draw();