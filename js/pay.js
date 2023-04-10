const supportWay = document.querySelector('.supportWay');

function showAnimal(){
    if(supportWay.children[1].selected === true){
        console.log('ll')
    }else{
        console.log('kk')
    }
}

// supportWay.children[1].addEventListener('click',showAnimal())

showAnimal();