// get elements
let slides = Array.from(document.querySelectorAll('.container img'));

let slidesCount = slides.length;

let currentSlide = 1;

let slideNumber = document.getElementById('slide-number');

let prevBtn = document.getElementById('prev');

let nextBtn = document.getElementById('next');

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;




// create pagination

let paginationUl = document.createElement('ul');

paginationUl.setAttribute('id', 'pagination-ul');

// create pagination lis
for(let i = 1; i <= slidesCount; i++){
    let paginationLi = document.createElement('li');
    paginationLi.setAttribute('data-index', i);
    paginationLi.appendChild(document.createTextNode(i));
    paginationUl.appendChild(paginationLi);
    
}

document.getElementById('indicators').appendChild(paginationUl);

let bullets = Array.from(document.querySelectorAll('#pagination-ul li'));
// get the main ul
let createdUl = document.getElementById('pagination-ul');

for (let i = 0; i < bullets.length; i++){
    bullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

checker();
// create functions
function nextSlide() {
    if(nextBtn.classList.contains('disabled')) {
        return false;
    }else {
        currentSlide++;
        checker();
    }
}
function prevSlide() {
    if(prevBtn.classList.contains('disabled')) {
        return false;
    }else {
        currentSlide--;
        checker();
    }
}
// create checker function

function checker(){
    // set slide number
    slideNumber.textContent = `Slide # ${currentSlide} of ${slidesCount}`;
    // remove all active
    removeActive();
    // set active class on current slide
    slides[currentSlide - 1].classList.add('active');
    // set active on current pagination
    createdUl.children[currentSlide - 1].classList.add('active');

    // current slide first
    if (currentSlide == 1){
        prevBtn.classList.add('disabled');
    }else {
        prevBtn.classList.remove('disabled');
    }
    if (currentSlide == slidesCount) {
        nextBtn.classList.add('disabled');
    }else {
        nextBtn.classList.remove('disabled')
    }
}

function removeActive(){
    slides.forEach(ele => {
        ele.classList.remove("active");
    });
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
}