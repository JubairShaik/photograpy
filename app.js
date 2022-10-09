window.addEventListener('scroll',()=>{
    document.querySelector('nav').
    classList.toggle
    ('window-scrolled',window,scrollY > 0 );
})
// ---------------------circular:rotation--------


const textButtons = document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton =>{
    let text = textButton.querySelector('p');

    text.innerHTML =  text.innerHTML.split("").map((character, index) =>
     `<span style="transform: rotate(${index * 23}deg)">${character}</span>`).join()
});


var swiper = new Swiper (".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 6,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        599:{
            slidesPerView: 2,
            spaceBetween:10

        },
        1023:{
            slidesPerView: 3,
            spaceBetween:6


        },
        480:{
            slidesPerView: 1,
            spaceBetween:3


        }
    }
  });



//   ===================responsive navbar==========


const nav = document.querySelector('.nav_list');
const openNavBtn = document.querySelector('#open');
const closeNavBtn = document.querySelector('#close');

const openNav = () => {
    nav.style.display ='flex' ;
    openNavBtn.style.display ='none' ;
    closeNavBtn.style.display ='inline-block' ;
}

openNavBtn.addEventListener('click' , openNav);

const closeNav  = () => {
    nav.style.display ='none' ;
    openNavBtn.style.display ='inline-block' ;
    closeNavBtn.style.display ='none' ;
}
closeNavBtn.addEventListener('click' , closeNav);

nav.querySelectorAll('li a').forEach(navLink=>{
    navLink.addEventListener('click',closeNav)
})
