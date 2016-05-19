function hover(img) {
	img.setAttribute('src', 'img/carla3-mod.jpg');
  img.classList.remove('animated', 'jello');
	img.classList.add('animated', 'rubberBand');
}
function unhover(img) {
		img.setAttribute('src', 'img/carla2-mod.jpg');
		img.classList.remove('animated', 'rubberBand');
    img.classList.add('animated', 'jello');
}

function hoverStar(img) {
  img.classList.add('animated', 'tada');
}
function unhoverStar(img) {
  img.classList.remove('animated', 'tada');
}

function hoverContact(img) {
  img.classList.add('animated', 'jello');
}
function unhoverContact(img) {
  img.classList.remove('animated', 'jello');
}
