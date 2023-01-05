// // const header = document.getElementById('main-header')
//  const headings = document.getElementsByTagName('h2')
// // const listItems = document.getElementsByClassName('list-item')

// //query selector

// console.log(headings)

const header = document.querySelector('#main-header')

 const ptag = document.querySelector('.list-item:nth-child(2) p')

const listItems = document.querySelectorAll('.list-item') 

// console.log(listItems[0])

// console.log(listItems[0].innerText)
// console.log(listItems[0].textContent)

// console.log(listItems[0].innerHTML)

//listItems[0].innerHTML = '<img src=<"" onerror="alert(document.cookie)"></button>'

const list = document.querySelector('.list')
// console.log(list.children)
// console.log(list.parentNode)
// console.log(list.previousSibling)
// console.log(list.nextSibling)
// console.log(list.nextElementSibling)

// console.log(list.parentElement.parentElement)

// listItems.forEach(item => {
//     item.querySelector('button').addEventListener('click', (e) => {
//         console.log(e.target)
//         e.target.parentElement.remove()
//     })
// })

//Event

const btn = document.querySelector('#btn')
const stopBtn = document.querySelector('#btn2')
const link = document.querySelector('#link')

// btn.onclick = function(){
//     console.log('Do stuff 1')
// }

// function eventFunction() {
//     console.log('do stuff 2')
// }

// btn.addEventListener('click', function(e){
//     console.log('do stuff 1')
// }, {once: true})

// btn.addEventListener('click', eventFunction)

// stopBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', eventFunction)
// })

// btn.addEventListener('dblclick', (e) => {
//     console.log(e)
// })

// const logTarget = (e) => {
//     console.log(e.target)
// }

// btn.addEventListener('click' , logTarget)
// stopBtn.addEventListener('click', logTarget)

// header.addEventListener('mousemove', (e) => {
//    //console.log(e)
//      header.style.background = `rgb(${e.offsetX}, ${e.offsetY} , 0)`
// })

// link.addEventListener('click', (e) => {
//     e.preventDefault()
//     link.innerText = 'Till Youtube'
//     window.location.replace('https://www.youtube.com/')
// })

// document.forms[0].addEventListener('submit', e => {
//     e.preventDefault()
//     console.log('Skickar formulär')
// })

//const addForm = document.forms[0];

const addForm = document.querySelector('#addForm')
const titleInput = document.querySelector('#titleInput')

addForm.addEventListener('submit', (e) => {
    e.preventDefault()

//     list.innerHTML += `
//     <li class="list-item">
//     <span>${titleInput.value}</span>
//     <button>Delete3</button>
// </li>
//     `


list.insertAdjacentHTML('beforeend', `
<li class="list-item">
<span>${titleInput.value}</span>
<button>Delete3</button>
</li>
`) 

})

list.addEventListener('click', e => {
    console.log(e.target.getAttribute('data-delete'))
   // e.target.parentElement.remove()
})