const usernameRegex = /^[a-z0-9]{4,12}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/;

var errors = [];

function createErrorMessage(className, invalidField, needsSelection) {
    return `<p>Please ${needsSelection ? "select" : "enter"} <span class=\"${className}\">${invalidField}</span></p>`;
}

function textValidator(valueFromForm, fieldName, regex) {
    if (valueFromForm === "") {
        errors.push(createErrorMessage('error', fieldName, false));
        return false;
    } else {
        if (!regex.test(valueFromForm)) {
            errors.push(createErrorMessage('warning', 'a valid '+ fieldName, false));
            return false;
        }
    }

    return true;
}

function radioValidator(radioButtons) {
    let isOneUnchecked = [];

    for (let radio of radioButtons) {
        isOneUnchecked.push(radio.checked);
    }

    if (isOneUnchecked.includes(true)) {
        return true;
    }

    errors.push(createErrorMessage('error', 'Gender', true));
    return false;
}

function birthdayValidator(selectArray) {
    let birthdayErrors = [];

    for (let i = 0; i < selectArray.length; i++) {
        birthdayErrors.push(selectArray[i].value !== "");
    }

    if (birthdayErrors.includes(false)) {
        errors.push(createErrorMessage('error', 'Birthday', true));
        return false;
    }

    return true;
}

function eventHandler(event) {
    event.preventDefault();
    errors = [];
    document.getElementById('output').innerHTML = '';
    let allFieldsValid = [];

    // first 5 elements are text elements in order (0 - 4)
    // next 3 are the gender radio buttons (5 - 7)
    // next 6 are the check boxes (8 - 13)
    // last 2 are the buttons (14 - 15)
    const textInputs = document.getElementsByTagName('input');

    // 0 = month
    // 1 = day
    // 2 = year
    const select = document.getElementsByTagName('select');

    let username = textInputs[0].value;
    let email = textInputs[1].value;
    let phoneNumber = textInputs[2].value;
    let firstPasswd = textInputs[3].value;
    let secondPasswd = textInputs[4].value;

    allFieldsValid.push(textValidator(username, 'Username', usernameRegex));
    allFieldsValid.push(textValidator(email, 'Email Address', emailRegex));
    allFieldsValid.push(textValidator(phoneNumber, 'Phone Number', phoneRegex));
    allFieldsValid.push(textValidator(firstPasswd, 'Password', passwordRegex));

    allFieldsValid.push(radioValidator([textInputs[5], textInputs[6], textInputs[7]]));

    allFieldsValid.push(birthdayValidator(select));

    if (!allFieldsValid.includes(false)) {
        if (firstPasswd !== secondPasswd) {
            confirm('Passwords to not match');
        } else {
            window.location.href = 'index.html'
        }
    } else {
        errors.forEach(string => {
            document.getElementById('output').innerHTML += string;
        });
    }
}

myForm.addEventListener('submit', eventHandler);
myForm.addEventListener('reset', event => {
    document.getElementById('output').innerHTML = '';
});