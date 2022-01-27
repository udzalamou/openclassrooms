const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
// const hide = document.getElementById('hide')
// const show = document.getElementById('show')
// const img = document.getElementById('img')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active') 
  modals.forEach(modal => {
    closeModal(modal)  
  })  
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})  

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active') 
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active') 
}

// Onclick Events

let image=document.getElementById('img')
let hide=document.getElementById('hide')
let show=document.getElementById('show')

hide.onclick=function(){
    image.style.display='none'
}

show.onclick=function(){
    image.style.display='block'
}

// Onmouseover

text.onmouseover=function(){
    text.innerHTML='Ooops Write JavaScript for the Web'
}

// onmouseout

text.onmouseout=function(){
    text.innerHTML='My JavaScript'
}