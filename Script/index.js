const dataForm = document.querySelector('.inputForm')

dataForm.addEventListener ('submit', (event) => {
    event.preventDefault()
    const inputEmail = document.querySelector('.email')
    const inputPassword = document.querySelector('.password')

    if (!inputEmail.value || !inputPassword.value) {
        alert('Semua data Harus diisi!')
        return
    } else {
        window.open('home.html')
    }

    inputEmail.value = ''
    inputPassword.value = ''
}, false)