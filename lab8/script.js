const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const list = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}


function addTodo() {
    const items = document.createElement('div')
    items.classList.add('items')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    items.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    items.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    items.appendChild(trashbutton)

    list.appendChild(items)
    inputtdl.value = ''
}

function del(e) {
    const item = e.target

    
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
list.addEventListener('click', del)
