// ! Cities images
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Sweden',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// * Defining DOM output 

const outputImg = document.getElementById('wrapper-images');


// ? Selecting active element
let activeElement = 0;


// ? Cycling through the list of cities 
for (let i = 0; i < images.length; i++) {
    const imgList = images[i];


    const newImage = document.createElement('div');
    newImage.classList.add("container-1");
    newImage.innerHTML =
        `<img src="${imgList['url']}" alt="cities-images"> 
    <h3>${imgList['title']}</h3> 
    <p>${imgList['description']}</p>`;

    // * Giving conditions to active class
    if (i == activeElement) {
        newImage.classList.add("active");
    }

    outputImg.append(newImage);
}


// * Adding event listener to the images
// ? Next button
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

// * Selecting all imgs in the html div
const imageSelect = document.querySelectorAll(".container-1");


// ? Defining actions on click
nextBtn.addEventListener("click", function () {

    // * Getting carousels images
    const activeImage = document.querySelector(
        ".container-1.active");

    // * Removing active class
    activeImage.classList.remove("active");

    // * Adding images
    activeElement++;

    // * If at list end, restart from zero
    if (activeElement === images.length) {
        activeElement = 0;
    }

    // * Adding active class
    imageSelect[activeElement].classList.add("active");


});



// ! Previous button
prevBtn.addEventListener("click", function () {
    imageSelect[activeElement].classList.remove("active");

    activeElement--;

    // * If at list start, restart from -1
    if (activeElement === 0) {
        activeElement = imagesList.length - 1;
    }

    // * Adding active class
    imageSelect[activeElement].classList.add("active");
});

