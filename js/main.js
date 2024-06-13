const images = [
    {
        img : "assets/images/cat01.jpg",
        name :"Premier chat"
    },
    {
        img : "assets/images/cat02.jpg",
        name :"Deuxième chat"
    },
    {
        img : "assets/images/cat03.jpg",
        name :"Troisième chat"
    },
    {
        img : "assets/images/cat04.jpg",
        name :"Quatrième chat"
    },
    {
        img : "assets/images/cat05.jpg",
        name :"Cinquième chat"
    }
];

let image = document.getElementById("slider-img");
let image2 = document.getElementById("slider-img2");
let btnNextImg = document.getElementById("next-img");
let btnNextImg2 = document.getElementById("next-img2");
let btnPreviousImg = document.getElementById("previous-img");
let btnPreviousImg2 = document.getElementById("previous-img2");
let currentIndexSliderOne = 0;
let currentIndexSliderTwo = 0;

function updateImg(element, imgArray, index) {
    element.classList.add("fade-out");

    setTimeout(function() {
        element.src = imgArray[index].img;
        element.alt = imgArray[index].name;
        element.classList.remove('fade-out');
    }, 1000);
}

function createIndicators(sliderId, imgArray) {
    const indicatorsContainer = document.getElementById(sliderId);
    imgArray.forEach((index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) {
            dot.classList.add("active");
        }
        indicatorsContainer.appendChild(dot);
    });
}

function updateDotIndicators(sliderId, currentIndex) {
    const dots = document.getElementById(sliderId).getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[currentIndex].classList.add("active");
}

// Slider 1
function autoPlaySlider() {
    setInterval(function(){
        currentIndexSliderOne++
        if (currentIndexSliderOne == images.length - 1) {
            currentIndexSliderOne = 0;
        } 
        updateImg(image, images, currentIndexSliderOne);
    }, 4000)
}

autoPlaySlider();

btnNextImg.addEventListener('click', function(){
    currentIndexSliderOne++;
    if (currentIndexSliderOne >= images.length - 1) {
        currentIndexSliderOne = 0;
    }
    updateImg(image, images, currentIndexSliderOne);
})

btnPreviousImg.addEventListener('click', function(){
    currentIndexSliderOne--;
    if (currentIndexSliderOne < 0) {
        currentIndexSliderOne = images.length - 1;
    }
    updateImg(image, images, currentIndexSliderOne);
})

// Slider 2

createIndicators("dotForSlider2", images);
updateDotIndicators("dotForSlider2", currentIndexSliderTwo)

btnNextImg2.addEventListener('click', function(){
    currentIndexSliderTwo++;
    if (currentIndexSliderTwo >= images.length - 1) {
        currentIndexSliderTwo = 0;
    }
    updateImg(image2, images, currentIndexSliderTwo);
    updateDotIndicators("dotForSlider2", currentIndexSliderTwo);
})

btnPreviousImg2.addEventListener('click', function(){
    currentIndexSliderTwo--;
    if (currentIndexSliderTwo < 0) {
        currentIndexSliderTwo = images.length - 1;
    }
    updateImg(image2, images, currentIndexSliderTwo);
    updateDotIndicators("dotForSlider2", currentIndexSliderTwo);
})