let navList = document.getElementById('navList');
let bar = document.getElementById('bar');

bar.addEventListener('click', () => {
    bar.classList.toggle('fa-bars');
    bar.classList.toggle('fa-times');
    navList.classList.toggle('-translate-y-full');
    navList.classList.toggle('-translate-y-0');
    navList.classList.toggle('top-0');
    navList.classList.toggle('top-16');
    navList.classList.toggle('invisible');
});

const element = document.getElementById('myElement');

// Get the bounding rectangle of the element
const rect = element.getBoundingClientRect();

// Get the top position of the element relative to the viewport
const topPosition = rect.top;
console.log(window.innerHeight)
console.log('Top position relative to viewport:', topPosition);