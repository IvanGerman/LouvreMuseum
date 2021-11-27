const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slider-wrapper');
const nextBtn = document.getElementById('slider-next-button');
const prevBtn = document.getElementById('slider-prev-button');
const sliderSpan01 = document.querySelector('.slider-span01');
const allLI = document.querySelectorAll('.slider-li');



let slides = document.querySelectorAll('.slider-pict');
let index = 1;

function setLIcolor(x) {
  for (let i = 0; i < allLI.length; i++) {

    if (i + 1 == x) {
      allLI[i].style.backgroundColor = '#D2B183';
      continue;
    }
    allLI[i].style.backgroundColor = '#ffffff';
  };
};
setLIcolor(1);

const firstClone = slides[0].cloneNode(true); // true makes a deep copy of html-element, fast shallow copy
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';


slide.append(firstClone); // appending, prepending happens after DOM has loaded, so these both elements
slide.prepend(lastClone); // do not appear in the slides [] array, (only 4 elements now there)

const slideWidth = slides[index].clientWidth; 

slide.style.transform = `translateX(${-slideWidth * index}px)`;


const getSlides = () => document.querySelectorAll('.slider-pict');// get all slides

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none'; // this lets the backmove of first slide clone to first slide be invisible
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`; 
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none'; // this lets the backmove of last slide clone to last slide be invisible
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`; 
  }  
});

const moveToNextSlide = () => { 
  slides = getSlides(); 
  if (index >= slides.length - 1) return; // prevents the whole slide line (.slides) to move too far left
  index++;  // if we click very fast many times
  
  let spanIndex = index;
  if (index == 6) {spanIndex = 1};
  setLIcolor(spanIndex);
  sliderSpan01.innerHTML = `0${spanIndex}`;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return; // prevents the whole slide line (.slides) to move too far right
  index--;               // if we click very fast many times

  let spanIndex = index;
  if (index == 0) {spanIndex = 5};
  setLIcolor(spanIndex);
  sliderSpan01.innerHTML = `0${spanIndex}`;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);





// swipe detection
slides = getSlides();

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("mousedown", handleMouseDown, false);

  slides[i].addEventListener("mousemove", handleMouseMove, false);
};

let x1 = null;
let y1 = null;

function handleMouseDown (event) {
  x1 = event.clientX;
  y1 = event.clientY;
};

function handleMouseMove (event) {
  event.preventDefault();
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.clientX; 

  let xDiff = x2 - x1;
  if (xDiff > 0) {
    moveToPreviousSlide();
  } 
  if (xDiff < 0) {
    moveToNextSlide();
  }
  x1 = null;
  y1 = null;
}



