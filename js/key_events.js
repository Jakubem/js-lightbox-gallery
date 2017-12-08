// handle key events
let startValue = 0;
document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      getPrev(e);
      break;
    case 'ArrowRight':
      getNext(e);
      break;
    case 'Escape':
      closeGallery(e);
      break;
    case 'Enter':
      showPicture(e);
      break;
  }
});