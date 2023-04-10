let oldScrollY = window.scrollY;
const monkey = document.querySelector('.monkeyIcon')
const title = document.querySelector('#title');

window.onscroll = function(e) {
  if(oldScrollY < window.scrollY){
    monkey.classList.remove('monkeyIconHide');
    title.classList.add('titleHide');
    // direction = "Down";
  } else {
      monkey.classList.add('monkeyIconHide'); 
      title.classList.remove('titleHide') 
    // direction = " Up";
  }
  oldScrollY = window.scrollY;
}
