let menu = document.getElementById('menu');
let menuClose = document.getElementById('menuClose');
let navBar = document.querySelector('.nav-container');

menu.addEventListener('click', (e)=> {
  navBar.style.display = 'block'
  menu.style.display = 'none'
  menuClose.style.display = 'block'
  preventDefault();
});


menuClose.addEventListener('click', (e)=> {
  navBar.style.display = 'none'
  menuClose.style.display = 'none'
  menu.style.display = 'block'
  preventDefault();
})


var swiper = new Swiper(".mySwipers", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      }
    }
  });

