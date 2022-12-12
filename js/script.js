const buttons = document.querySelectorAll('.menu__button');
const subButtons = document.querySelectorAll('.menu__item__submenu');
const items = document.querySelectorAll('.menu__item');
const header = document.querySelector('.header');

const showMenu = () => {
  const submenu = document.querySelector('.menu__sublist')[0];
  submenu.style.display = 'block';
};

const hideMenu = () => {
  const submenu = document.querySelector('.menu__sublist')[0];
  submenu.style.display = 'none';
};

for (const btn of buttons) {
  btn.addEventListener('click', () => {
    header.classList.toggle('menu__open');
  });
}

for (let i = 0; i < subButtons.length; i++) {
  subButtons[i].addEventListener('click', () => {
    items[i].classList.toggle('menu__sub__open');
  });
}
