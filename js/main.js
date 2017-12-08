const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const gallery = document.querySelector('.gallery')
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('.form');
const output = document.querySelector('.output');

// open gallery
function showPicture(i) {
  return function () {
    output.style.display = 'block';
    gallery.style.display = 'block';
    output.style.backgroundImage = `url(${arr[i]})`;
    startValue = i;
  }
}
next.addEventListener('click', getNext, false);
prev.addEventListener('click', getPrev, false);

closeBtn.addEventListener('click', closeGallery);

// close gallery
function closeGallery(e) {
  e.preventDefault();
  output.style.display = 'none';
  gallery.style.display = 'none';
  startValue = 0;
};

// load next picture
function getNext(e) {
  if (startValue >= arr.length - 1) {
    return;
  } else {
    startValue++;
    output.style.backgroundImage = `url(${arr[startValue]})`;
  }
};

// load previous picture
function getPrev(e) {
  if (startValue < 1) {
    return;
  } else {
    startValue--;
    output.style.backgroundImage = `url(${arr[startValue]})`;
  }
};