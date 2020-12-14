const slides = document.querySelectorAll('.carousel_item');
const prevBtn = document.querySelector('#carousel_button_prev');
const nextBtn = document.querySelector('#carousel_button_next');
const totalSlides = slides.length;

let slidePosition = 0;

console.log(totalSlides);
console.log(slides); //node List 반환(배열) 속성은 객체

prevBtn.addEventListener('click', () => {
    moveToNextSlide();
});
nextBtn.addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition(){
    for(let slide of slides) {
        slide.classList.remove('carousel_item_visible');
        slide.classList.add('carousel_item_hidden');
    }
    slides[slidePosition].classList.add('carousel_item_visible');
}

function moveToNextSlide() {
    
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition()
}

function moveToPrevSlide(){
    if(slidePosition === 0) {
        slidePosition = 2;
    } else {
        slidePosition--;
    }
    updateSlidePosition()
}

// function moveToNextSlide(){
    
//     if(slides[0].classList.contains('carousel_item_visible')){
//         slides[0].classList.remove('carousel_item_visible');
//         slides[1].classList.add('carousel_item_visible');
//     } else if(slides[1].classList.contains('carousel_item_visible')){
//         slides[1].classList.remove('carousel_item_visible');
//         slides[2].classList.add('carousel_item_visible');
//     } else if(slides[2].classList.contains('carousel_item_visible')){
//         slides[2].classList.remove('carousel_item_visible');
//         slides[0].classList.add('carousel_item_visible');
//     }
// }