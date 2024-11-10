
const site = document.getElementById("site");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
    site.classList.toggle("teni");
  })
})



// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    // Действие при клике
    document.querySelector(".header").classList.remove("open");
    site.classList.remove("teni");
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open");
  site.classList.remove("teni");
});


// закрытие меню-бургер при клике на пункте меню
const list = document.querySelector('#list');
const listLi = Array.apply(null, list.querySelectorAll('li'));
listLi.forEach(el => {
  el.addEventListener('click', () => {
    header.classList.remove('open');
    site.classList.remove("teni");
  });
});




