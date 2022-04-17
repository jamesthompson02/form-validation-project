const full_name = document.getElementById('full_name');
const email_address = document.getElementById('email_address');
const confirm_email_address = document.getElementById('confirm_email_address');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');
const inputs = [full_name, email_address, confirm_email_address, password, password2];


const form = document.getElementById('form');
const ticks = [...document.querySelectorAll('.fa-circle-check')];
const exclamation_marks = [...document.querySelectorAll('.fa-circle-exclamation')];
const error_messages = [...document.querySelectorAll('.small')];
const sign_up_box = document.getElementById('sign-up-box');
const btn = document.getElementById('submit-btn');

const email_validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const name_validation = /^[a-zA-Z '-]+$/ 
const capital_validation = /[A-Z]/
const lower_validation = /[a-z]/
const special_validation = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
const number_validation = /[0-9]/




function regExName(x) {
    return name_validation.test(x);
}

function regExEmail(x) {
    return email_validation.test(x);
}


function regExCapital(x) {
    return capital_validation.test(x);
}

function regExLower(x) {
    return lower_validation.test(x);
}

function regExSpecial(x) {
    return special_validation.test(x);
}

function regExNumber(x) {
    return number_validation.test(x);
}

function eightLength(x) {
    return x.length >= 8;
}

function checkInputs() {
    for (let each of inputs) {
        each.classList.remove('error');
        each.classList.remove('success');
        error_messages[inputs.indexOf(each)].style.display = 'none';
        ticks[inputs.indexOf(each)].style.display = 'none';
        exclamation_marks[inputs.indexOf(each)].style.display = 'none';
    }
    for (let each of inputs) {
        if (each == full_name) {
            if (full_name.value === '') {
                full_name.classList.remove('success');
                ticks[inputs.indexOf(full_name)].style.display = 'none';
                full_name.classList.add('error');
                error_messages[inputs.indexOf(full_name)].innerText = 'Name field cannot be blank';
                error_messages[inputs.indexOf(full_name)].style.display = 'block';
                exclamation_marks[inputs.indexOf(full_name)].style.display = 'block';
            }
        }
        if (each == email_address) {
            if (email_address.value === '') {
                email_address.classList.remove('success');
                ticks[inputs.indexOf(email_address)].style.display = 'none';
                email_address.classList.add('error');
                error_messages[inputs.indexOf(email_address)].innerText = 'Email field cannot be blank';
                error_messages[inputs.indexOf(email_address)].style.display = 'block';
                exclamation_marks[inputs.indexOf(email_address)].style.display = 'block';
            }
        }
        if (each == confirm_email_address) {
            if (confirm_email_address.value === '') {
                confirm_email_address.classList.remove('success');
                ticks[inputs.indexOf(confirm_email_address)].style.display = 'none';
                confirm_email_address.classList.add('error');
                error_messages[inputs.indexOf(confirm_email_address)].innerText = 'Email field cannot be blank';
                error_messages[inputs.indexOf(confirm_email_address)].style.display = 'block';
                exclamation_marks[inputs.indexOf(confirm_email_address)].style.display = 'block';
            }
        }
        if (each == password) {
            if (password.value === '') {
                password.classList.remove('success');
                ticks[inputs.indexOf(password)].style.display = 'none';
                password.classList.add('error');
                error_messages[inputs.indexOf(password)].innerText = 'Password field cannot be blank';
                error_messages[inputs.indexOf(password)].style.display = 'block';
                exclamation_marks[inputs.indexOf(password)].style.display = 'block'; 
            }
        }
        if (each == password2) {
            if (password2.value === '') {
                password2.classList.remove('success');
                ticks[inputs.indexOf(password2)].style.display = 'none';
                password2.classList.add('error');
                error_messages[inputs.indexOf(password2)].innerText = 'Password field cannot be blank';
                error_messages[inputs.indexOf(password2)].style.display = 'block';
                exclamation_marks[inputs.indexOf(password2)].style.display = 'block'; 
            }
        }

    }
    for (let each of inputs) {
        if (each == full_name && full_name.classList.contains('error') == false) {
            let test_result = regExName(full_name.value);
            if (test_result == false) {
                full_name.classList.remove('success');
                ticks[inputs.indexOf(full_name)].style.display = 'none';
                full_name.classList.add('error');
                error_messages[inputs.indexOf(full_name)].innerText = 'Invalid name';
                error_messages[inputs.indexOf(full_name)].style.display = 'block';
                exclamation_marks[inputs.indexOf(full_name)].style.display = 'block';
            }
        }
        if (each == email_address && email_address.classList.contains('error') == false) {
            let test_result = regExEmail(email_address.value);
            if (test_result == false) {
                email_address.classList.remove('success');
                ticks[inputs.indexOf(email_address)].style.display = 'none';
                email_address.classList.add('error');
                error_messages[inputs.indexOf(email_address)].innerText = 'Invalid Email';
                error_messages[inputs.indexOf(email_address)].style.display = 'block';
                exclamation_marks[inputs.indexOf(email_address)].style.display = 'block';
            }
        }
        if (each == confirm_email_address && confirm_email_address.classList.contains('error') == false) {
            let test_result = regExEmail(confirm_email_address.value);
            if (test_result == false) {
                confirm_email_address.classList.remove('success');
                ticks[inputs.indexOf(confirm_email_address)].style.display = 'none';
                confirm_email_address.classList.add('error');
                error_messages[inputs.indexOf(confirm_email_address)].innerText = 'Invalid Email';
                error_messages[inputs.indexOf(confirm_email_address)].style.display = 'block';
                exclamation_marks[inputs.indexOf(confirm_email_address)].style.display = 'block';
            }
        }
        if (each == password && password.classList.contains('error') == false) {
            let test_result1 = regExCapital(password.value);
            let test_result2 = regExLower(password.value);
            let test_result3 = regExNumber(password.value);
            let test_result4 = regExSpecial(password.value);
            let test_result5 = eightLength(password.value);
            if (test_result1 == false || test_result2 == false || test_result3 == false || test_result4 == false || test_result5 == false) {
                password.classList.remove('success');
                ticks[inputs.indexOf(password)].style.display = 'none';
                password.classList.add('error');
                error_messages[inputs.indexOf(password)].innerText = 'Password not secure enough';
                error_messages[inputs.indexOf(password)].style.display = 'block';
                exclamation_marks[inputs.indexOf(password)].style.display = 'block';  
            }
        }
        if (each == password2 && password2.classList.contains('error') == false) {
            let test_result1 = regExCapital(password2.value);
            let test_result2 = regExLower(password2.value);
            let test_result3 = regExNumber(password2.value);
            let test_result4 = regExSpecial(password2.value);
            let test_result5 = eightLength(password2.value);
            if (test_result1 == false || test_result2 == false || test_result3 == false || test_result4 == false || test_result5 == false) {
                password2.classList.remove('success');
                ticks[inputs.indexOf(password2)].style.display = 'none';
                password2.classList.add('error');
                error_messages[inputs.indexOf(password2)].innerText = 'Password not secure enough';
                error_messages[inputs.indexOf(password2)].style.display = 'block';
                exclamation_marks[inputs.indexOf(password2)].style.display = 'block';  
            }
        }
    }
    for (let each of inputs) {
        if (each == confirm_email_address && confirm_email_address.classList.contains('error') == false) {
            if (email_address.value !== confirm_email_address.value) {
                confirm_email_address.classList.remove('success');
                ticks[inputs.indexOf(confirm_email_address)].style.display = 'none';
                confirm_email_address.classList.add('error');
                error_messages[inputs.indexOf(confirm_email_address)].innerText = 'Emails do not match';
                error_messages[inputs.indexOf(confirm_email_address)].style.display = 'block';
                exclamation_marks[inputs.indexOf(confirm_email_address)].style.display = 'block';
            }
        }
        if (each == password2 && password2.classList.contains('error') == false) {
            if (password.value !== password2.value) {
                password2.classList.remove('success');
                ticks[inputs.indexOf(password2)].style.display = 'none';
                password2.classList.add('error');
                error_messages[inputs.indexOf(password2)].innerText = 'Passwords do not match';
                error_messages[inputs.indexOf(password2)].style.display = 'block';
                exclamation_marks[inputs.indexOf(password2)].style.display = 'block';
            }
        }
    }
    for (let each of inputs) {
        if (each.classList.contains('error') == false) {
            console.log('false');
            each.classList.add('success');
            ticks[inputs.indexOf(each)].style.display = 'block';
        }
    }
    let error_counter = 0;
    for (let each of error_messages) {
        if (each.style.display == 'block') {
            error_counter += 1;
        }
    }

    let multiple = error_counter*20;
    multiple = multiple + 500;
    multiple = String(multiple);
    multiple = multiple + 'px';
    sign_up_box.style.height = multiple;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})
