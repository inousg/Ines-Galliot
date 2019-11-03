const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const body = document.querySelector('body');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
    body.style.backgroundColor = '#727272'
    body.style.backgroundImage =  'repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)'
    main.style.display = 'block';
    
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}

init();
