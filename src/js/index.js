////////////////////// Рендер разметки по шаблону //////////////////////
import menu from './menu.json';
import templateFunction from '../template/menu.hbs';

const menuEl = document.querySelector('.js-menu');

const markup = templateFunction(menu);
menuEl.insertAdjacentHTML('beforeend', markup);

////////////////////// Пошук кнопки //////////////////////
const checkBoxEl = document.querySelector('.theme-switch__toggle');

////////////////////// Тема //////////////////////
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//////////////////////  //////////////////////
checkBoxEl.checked = Boolean(localStorage.getItem('checkbox'));

if (checkBoxEl.checked) {
  document.body.classList.add(Theme.DARK);
}
if (!checkBoxEl.checked) {
  document.body.classList.add(Theme.LIGHT);
}

checkBoxEl.addEventListener('input', changeTheme);

function chengeTheme(evt) {
  if (evt.target.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('checkbox', 'on');
  }

  if (!evt.target.checked) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('checkbox', 'off');
  }
}

//////////////////////  //////////////////////
function changeTheme(event) {
    if (event.target.checked) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('checkBox', 'On');
    };

    if (!event.target.checked) {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('checkBox', '');
    }
};
