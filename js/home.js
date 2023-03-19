const title = document.querySelector('#title')

title.addEventListener('mouseup',function(e){
    console.log('mouseup')
    title.offsetTop = 160;
})

title.addEventListener('mousedown',function(e){
    title.offsetTop=200;
})