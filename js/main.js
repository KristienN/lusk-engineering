const menuBtn = document.querySelector('button.mobile-menu-btn')
const menu = document.querySelector('.mobile-menu')
const navBtns = document.querySelectorAll('.nav-menu-item')

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('hidden')
})

navBtns.forEach(n => {
    n.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('clicked!')
        let remove = document.querySelector('.selected')
        remove.classList.remove('selected')
        n.classList.add('selected')
    })
})