//1
let text = document.getElementById('text')
let changeBtn = document.getElementById('changeBtn')
changeBtn.addEventListener('click', ()=>{
    text.textContent = 'Текст изменён!'
})

//2
let hello = document.getElementById('hello')
let changeColor = document.getElementById('changeColor')
changeColor.addEventListener('click', ()=>{
    hello.style.color = 'red'
})

//3
let paragraph = document.getElementById('paragraph')
let changeClass = document.getElementById('changeClass')
changeClass.addEventListener('click', ()=>{
    paragraph.classList.add('bigText')
})

//4
let paragraph2 = document.getElementById('paragraph2')
let changeHidden = document.getElementById('changeHidden')
changeHidden.addEventListener('click', ()=>{
    if(paragraph2.className === 'hidden'){
        paragraph2.classList.remove('hidden')
        changeHidden.textContent = 'Hide'
    }else{
        paragraph2.classList.add('hidden')
        changeHidden.textContent = 'Show'
    }
})

//5
let changeBgColor = document.getElementById('changeBgColor')
changeBgColor.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'yellow'
})
