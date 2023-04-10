const navBtn = document.querySelector('#navIcon');
const nav = document.querySelector('.nav')

navBtn.addEventListener('click',function(e){
    
    // for(let i = 0; i = nav.childElementCount; i++){
    //     nav.children[i]. = "##FDD764"
    // }
    this.parentElement.classList.toggle('headerOn');
    nav.classList.toggle('navOn');
})