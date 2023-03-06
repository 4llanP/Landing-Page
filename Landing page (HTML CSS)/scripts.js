var box = document.querySelector('.box');

document.addEventListener('mousemove', function(event) {
  box.style.left = event.clientX + 'px';
  box.style.top = event.clientY + 'px';
});
