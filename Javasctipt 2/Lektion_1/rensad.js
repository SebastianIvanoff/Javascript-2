const list = document.querySelector('.list')
const addForm = document.querySelector('#addForm')
const titleInput = document.querySelector('#titleInput')

addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const li = document.createElement('li')
    const span = document.createElement('span')
    const deleteBtn = document.createElement('button')

    li.classList.add('list-item')

    span.innerText = titleInput.value
    deleteBtn.textContent = 'Ta Bort'

    li.appendChild(span)
    li.appendChild(deleteBtn)

    list.appendChild(li)

    titleInput.value = ''
})

list.addEventListener('click' , e => {

if(e.target.nodeName === 'BUTTON'){
   e.target.parentElement.remove()
}
})

list.addEventListener('click', e => {
    if(e.target.nodeName === 'SPAN'){
    
    e.target.parentElement.classList.toggle('active')
}
})