let form = document.forms.form
let data = localStorage.getItem('user')
let text = document.querySelector('.text2')
let next = document.querySelector('.next')
let inps = document.querySelectorAll('.inp')

    next.onclick = () => {
        window.location.assign("../index.html")
    }

text.onclick = () => {
    localStorage.clear()
    window.location.assign("../Начните с этой папки/registration.html")
}