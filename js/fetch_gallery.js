// wrapper for gallery
const wrapper = document.querySelector(".pictures");

// empty array for picture src
const arr = [];

// get picture src and alt from gallery.json
window.addEventListener("load", createGallery);

function createGallery() {
  fetch("gallery.json")
    .then((res) => res.json())
    .then((data) => {
      for (let i in data.gallery) {
        let src = data.gallery[i].src;
        let alt = data.gallery[i].alt;

        // push file src to arr
        arr.push(src);
        
        // create a tag for each picture in json file
        wrapper.innerHTML += `
        <a href="#" class="picture">
        <img src="${src}"
             alt="${alt}">
        </a>`;

        // add event listeners on each picture in gallery
        const pictures = document.querySelectorAll('.picture');
        NodeList.prototype.addEventListener = function (event, func) {
          this.forEach(function (content, item) {
            content.addEventListener(event, func);
          });
        }

        for (i = 0; i < pictures.length; i++) {
          pictures[i].addEventListener("click", showPicture(i));
        }
      }
    })
}