const btn = document.getElementsByClassName('btn');
const listWrapper = document.getElementsByClassName('listWrapper');

for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click',function(){
        this.classList.add('btnAreaOn');
        listWrapper[i].classList.add('listWrapperOn');
        console.log(btn[i]);
        console.log(listWrapper[i])
        for(let j = 0;j < btn.length; j++){
            if(j != i){
                btn[j].classList.remove('btnAreaOn');
                listWrapper[j].classList.remove('listWrapperOn')
            }
        }
    })

}

