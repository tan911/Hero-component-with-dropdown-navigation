const buttons = document.querySelectorAll('.menu__button');
const subButtons = document.querySelectorAll('.menu__item__submenu');
const items = document.querySelectorAll('.menu__item');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const submenu = document.querySelectorAll('.menu__sublist');
const arrow = document.querySelectorAll('path');

const showMenu = i => {
  submenu[i].style.display = 'block';
};

const hideMenu = i => {
  submenu[i].style.display = 'none';
};

for (const btn of buttons) {
  btn.addEventListener('click', () => {
    header.classList.toggle('menu__open');
    overlay.classList.toggle('hidden');
  });
}

if (screen.width <= 600) {
  for (let i = 0; i < subButtons.length; i++) {
    subButtons[i].addEventListener('click', () => {
      items[i].classList.toggle('menu__sub__open');
      arrow[i].d = 'm1 5 4-4 4 4';
    });
  }
} else if (screen.width > 600) {
  for (let i = 0; i < subButtons.length; i++) {
    const submenu = document.querySelectorAll('.menu__sublist')[i];
    items[i].onmouseenter = () => showMenu(i);
    submenu.onmouseleave = () => hideMenu(i);
  }
}
