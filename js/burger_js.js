const button = document.getElementById('header_button')
const menu = document.getElementById('header__ul_menu')

button.addEventListener('click', () =>{
    menu.classList.toggle('header__menu_ul')
})

const links = document.querySelectorAll('.header__link')

links.forEach( (elem) =>{
        elem.addEventListener('click', () =>{
            menu.classList.remove('header__menu_ul')
        })
    }
)