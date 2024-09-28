const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

const submitBtn = document.getElementById('btn')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if (userNameValue === '') {
        setError(userName, 'Username is required*')
    }
    else {
        setSuccess(userName)
    }

    if (emailValue !== '') {
        if (!emailValue.includes('@') || !emailValue.includes('.') || emailValue.indexOf('@') > emailValue.lastIndexOf('.')) {
            setError(email, 'Please enter a valid email address.');
        } else {
            setSuccess(email);
        }
    } else {
        setError(email, 'Email is required*');
    }

    if (passwordValue !== '') {
        if (passwordValue.length < 8) {
            setError(password, 'Password must contains 8 characters.')
        }
        else {
            setSuccess(password)
        }
    }
    else {
        setError(password, 'Password is required*')
    }

    if (confirmPasswordValue !== '') {
        if (confirmPasswordValue.length < 8) {
            setError(confirmPassword, 'Password must contains 8 characters')
        }
        else if (confirmPasswordValue !== passwordValue) {
            setError(confirmPassword, 'Passwords must be equal.')
        }
        else {
            setSuccess(confirmPassword)
        }
    }
    else {
        setError(confirmPassword,'Password should be confirmed*')
    }


})

function setError(element, error) {
    const formController = element.parentElement
    const errorElement = formController.querySelector('.error')
    const inputElement=formController.querySelector('input')

    errorElement.innerText = error
    errorElement.classList.remove('success')
    inputElement.classList.remove('success-parent')
    inputElement.classList.add('error-parent')
    console.log(inputElement.classList)
}

function setSuccess(element) {
    const formController = element.parentElement
    const errorElement = formController.querySelector('.error')
    const inputElement=formController.querySelector('input')

    errorElement.innerText = ''
    errorElement.classList.add('success')
    inputElement.classList.add('success-parent')
    inputElement.classList.remove('error-parent')

}