// Transport Block
const title = document.getElementsByClassName('title');
const content = document.getElementsByClassName('content');
const icon = document.getElementsByClassName('fa-angle-down');

for(let i = 0; i < title.length ;i++){
    title[i].addEventListener('click',function(e){
        console.log(i);
        this.parentElement.classList.toggle('transportWayShow');
        content[i].classList.toggle('contentShow');
        icon[i].classList.toggle('iconUp');
    })
}

// Caution Block
const cautionTitle = document.getElementsByClassName('cautionTitle');
const cautionContent = document.getElementsByClassName('cautionContent');

for(let i = 0; i < cautionTitle.length ;i++){
    cautionTitle[i].addEventListener('click',function(e){
        this.parentElement.classList.toggle('cautionWrapperShow');
        cautionContent[i].classList.toggle('cautionContentShow');
        icon[i+3].classList.toggle('iconUp')
    })
}