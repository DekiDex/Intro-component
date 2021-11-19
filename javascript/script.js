
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('pass');

// button
let btn = document.getElementById('btn');

// error messages and containers
let errorMessageList = document.querySelectorAll('.error');
let errorIcons = document.querySelectorAll('.err-icon');
let errorContainers = document.querySelectorAll('.input-container');

btn.addEventListener('click', (e) => {

    e.preventDefault()

    const regex_email = /\S+@\S+\.\S+/;

    if ( firstName.value.length == 0 ){
        errorMessageList[0].style.display = 'block'
        errorIcons[0].style.display = 'block'
        errorContainers[0].style.border = '2px solid red'
    } else{
        errorMessageList[0].style.display = 'none'
        errorIcons[0].style.display = 'none'
        errorContainers[0].style.border = '2px solid lightgrey'
    }

    if ( lastName.value.length == 0 ){
        errorMessageList[1].style.display = 'block'
        errorIcons[1].style.display = 'block'
        errorContainers[1].style.border = '2px solid red'
    } else{
        errorMessageList[1].style.display = 'none'
        errorIcons[1].style.display = 'none'
        errorContainers[1].style.border = '2px solid lightgrey'
    }

    if ( email.value.length == 0 || regex_email.test(email.value) == false){
        errorMessageList[2].style.display = 'block'
        errorIcons[2].style.display = 'block'
        errorContainers[2].style.border = '2px solid red'
    } else{
        errorMessageList[2].style.display = 'none'
        errorIcons[2].style.display = 'none'
        errorContainers[2].style.border = '2px solid lightgrey'
    }

    if ( password.value.length == 0 ){
        errorMessageList[3].style.display = 'block'
        errorIcons[3].style.display = 'block'
        errorContainers[3].style.border = '2px solid red'
    } else{
        errorMessageList[3].style.display = 'none'
        errorIcons[3].style.display = 'none'
        errorContainers[3].style.border = '2px solid lightgrey'
    }

})