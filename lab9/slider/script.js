let sliderImages = Array.from(document.querySelectorAll(".container img"));
let numberOfSlides = sliderImages.length;


let currentSlide = 1;
let slideNumber = document.getElementById("slider__number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
let indicator = document.getElementById("indicator");


var paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= numberOfSlides; i++) {
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
  
  indicator.appendChild(paginationElement);
var paginationNewUl = document.getElementById('pagination-ul');
var pagination = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < pagination.length; i++){
    pagination[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

function checker() {
    removeAllActive();
    slideNumber.textContent = `slide # ${currentSlide} of ${numberOfSlides}`;
    sliderImages[currentSlide - 1].classList.add('active');
    paginationNewUl.children[currentSlide - 1].classList.add('active');
    if (currentSlide === 1) {
        prevButton.classList.add('disabled');
    }
    else if (currentSlide === numberOfSlides) {
        nextButton.classList.add("disabled");
    }
    else {
        prevButton.classList.remove('disabled');
        nextButton.classList.remove("disabled");
    }
}
function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    pagination.forEach(function (li) {
        li.classList.remove('active');
    });
}
function nextSlide() {
    
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
    checker();
    }
}
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
    checker();
    }
}
checker();

