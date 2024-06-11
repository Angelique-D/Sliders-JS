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
let currentIndex = 0;

function autoPlaySlider() {
    setInterval(function(){

        image.src = images[currentIndex].img;
        image.alt = images[currentIndex].name;
       
        currentIndex++
        if (currentIndex == images.length - 1) {
            currentIndex = 0;
        } 
    }, 3000)
}


autoPlaySlider();
