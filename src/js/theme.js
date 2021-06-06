const input = document.getElementById('theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

input.addEventListener('click', onInputClick);
checkedTheme();
function onInputClick(event) {
  if (event) {
    document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', document.body.classList);
  }
}

function checkedTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList = localStorage.getItem('theme');
    input.checked = true;
  }
}
