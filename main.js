import './style.css'
import './scss/main.scss'

// Меню
document.addEventListener('DOMContentLoaded', function () { // добавляем эвент, запускающий скрипт после загрузки контента страницы.
    const menu = document.querySelector('.menu'); // находим элемент меню в документе.
    const menuOpenBtn = document.querySelector('.button__open-menu'); // находим элемент кнопки открытия в документе.
    const menuCloseBtn = document.querySelector('.button__close-menu'); // находим элемент кнопки закрытия в документе.

    function openMenu() { // функция открытия меню, которая добавляет класс "open" элементу "menu"
        menu.classList.add('open');
    }
    function closeMenu() { // функция закрытия меню, удаляющая класс "open" у элементу "menu"
        menu.classList.remove('open');
    }

    menuOpenBtn.addEventListener('click', openMenu); // Добавляем эвент, запускающий функцию открытия меню
    menuCloseBtn.addEventListener('click', closeMenu); // Добавляем эвент, запускающий функцию закрытия меню

});
