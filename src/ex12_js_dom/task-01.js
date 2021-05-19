let imagesSource = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
let imageIndex = 0;

function nextImage() {
	if (imageIndex === imagesSource.length - 1) {
		imageIndex = 0;
	} else {
		imageIndex++;
	}
	insertNewImage();
	let image = document.querySelector('.slider__image');
	image.classList.add('slider__image_moveToRight')
}

function previousImage() {
	if (imageIndex === 0) {
		imageIndex = imagesSource.length - 1;
	} else {
		imageIndex--;
	}
	insertNewImage();
	let image = document.querySelector('.slider__image');
	image.classList.add('slider__image_moveToLeft')
}

function insertNewImage() {
	createImage();
	let image = document.querySelector('.slider__image');
	let newImage = image.nextSibling;
	newImage.style.opacity = '0%';
	if (newImage.previousSibling !== 'null') {
		newImage.previousSibling.remove();
	}
}

function createImage() {
	let image = document.createElement('img');
	image.src = imagesSource[imageIndex];
	image.classList.add('slider__image');
	document.querySelector('.slider__picarea').append(image);
}

window.onload = createImage();
right.onclick = nextImage;
left.onclick = previousImage;