const dataForm = document.querySelector('.inputForm')

dataForm.addEventListener ('submit', (event) => {
    event.preventDefault()
    const inputFirstName = document.querySelector('.firstName')
    const inputLastName = document.querySelector('.lastName')
    const inputPhoneNumber = document.querySelector('.phoneNumber')
    const inputEmail = document.querySelector('.email')
    const inputPassword = document.querySelector('.password')

    if (!inputFirstName.value || !inputLastName.value || !inputPhoneNumber.value || !inputEmail.value || !inputPassword.value) {
        alert('Semua data Harus diisi!')
        return
    } else {
        window.open('signIn.html')
    }

    inputFirstName.value = ''
    inputLastName.value = ''
    inputPhoneNumber.value = ''
    inputEmail.value = ''
    inputPassword.value = ''
}, false)