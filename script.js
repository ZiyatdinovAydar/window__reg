"use strict"

let regSet = document.querySelector('.registration');
let btnReg = regSet.querySelector('#btn-reg');
let erorrReg = regSet.querySelectorAll('.errorAll');
let fields = regSet.querySelectorAll('.field');
let checkboxInput = regSet.querySelector('.checkbox__input');
let star1 = regSet.querySelectorAll('.star1');;

let enterSet = document.querySelector('.enter');
let btnEnter = enterSet.querySelector('#btn-enter')
let erorrEnter = enterSet.querySelectorAll('.errorAll1');
let field1 = enterSet.querySelectorAll('.field1');
let checkboxInput1 = enterSet.querySelector('.check');
let star2 = enterSet.querySelectorAll('.star2');



let openEnter = document.getElementById("btn__in");
let openReg = document.getElementById("btn__init");




console.log(regSet);
console.log(btnReg);
console.log(fields);
console.log(erorrReg);
console.log(checkboxInput);
console.log(star1);

console.log(enterSet);
console.log(btnEnter);
console.log(field1);
console.log(erorrEnter);
console.log(checkboxInput1);
console.log(star2);

/*переключение между окон*/

openReg.addEventListener("click", (event) => {
    if (regSet.style.display = "none") {
        regSet.style.display = "block";
        event.preventDefault();
    }
});


/*окно регистрации*/
regSet.addEventListener('input', function(event) {
    event.preventDefault();

    if (validatePassword(),
        validateEmail(),
        validateEmailReg()) {
        return regSets();
    }
});
let regSets = regSet.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateValue(), validatecheck()) {
        sevedLC()
        enterSet.style.display = 'block';
        regSet.style.display = 'none';

    }
    console.log(sevedLC())
});


/*Правило, если сторока пустая */
let validateValue = function() {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[0].value, !fields[1].value) {

            console.log('не заполнен', fields[i]);

            erorrReg[i].innerHTML = 'Поле обязательно для заполнения';
            fields[i].style.border = '2px solid red';
            star1[i].style.color = 'red';
        } else {

            console.log('заполнен', fields[i]);

            erorrReg[i].innerHTML = '';
            fields[i].style.border = '2px solid #787878';
            star1[i].style.color = '#787878';
        }

    }
};

/*Привило, если нет галочки */
let validatecheck = function() {
    if (checkboxInput.checked === false) {

        console.log('не заполнен', checkboxInput);

        erorrReg[2].innerHTML = 'Поле обязательно для заполнения';
        star1[2].style.color = 'red';
    } else {
        console.log('заполнен', checkboxInput);
        erorrReg[2].innerHTML = '';
        star1[2].style.color = '#787878';

    }
};



/*Правило, если email не валидный */
let validateEmail = function() {
    if (fields[0].validity.typeMismatch) {

        console.log('не заполнен', fields[0]);

        erorrReg[0].innerHTML = 'Email невалидный';
        fields[0].style.border = `2px solid red`;
        star1[0].style.color = 'red';
    } else {
        erorrReg[0].innerHTML = 'Email валидный';
        fields[0].style.border = `2px solid #787878`;
        star1[0].style.color = '#787878';

    }

};

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


let validateEmailReg = function() {

    if (!isEmailValid(fields[0].value)) {
        erorrReg[0].innerHTML = 'Email невалидный';
        fields[0].style.border = `2px solid red`;
        star1[0].style.color = 'red';
    } else {
        erorrReg[0].innerHTML = 'Email валидный';
        fields[0].style.border = `2px solid #787878`;
        star1[0].style.color = '#787878';

    }
};

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
};

/* Проверка валидации пароля */

let validatePassword = function() {
    let passwordReg = document.getElementById('passwordLog').value;
    passwordReg = passwordReg.trim()

    console.log(typeof passwordReg)

    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/iu;

    if (passwordReg.match(decimal)) {

        console.log('пароль верный', passwordReg);

        erorrReg[1].innerHTML = 'Пароль валидный';
        fields[1].style.border = `2px solid #787878`;
        star1[1].style.color = '#787878';

    } else {

        console.log('пароль неверный', passwordReg);

        erorrReg[1].innerHTML = '8-20 символов, A-Z, a-z, или один специальный символ';
        fields[1].style.border = `2px solid red`;
        star1[1].style.color = 'red';
    }
};



/*Окно входа*/
enterSet.addEventListener('submit', function(event) {
    event.preventDefault();

    validateValue2();
    checkboxError2();
    validateUser();
})



/*Правило, если сторока пустая */
let validateValue2 = function() {
    for (let i = 0; i < field1.length; i++) {
        if (!field1[i].value) {

            console.log('не заполнен', field1[i]);

            erorrEnter[i].innerHTML = 'Поле обязательно для заполнения';
            field1[i].style.border = '2px solid red';
            star2[i].style.color = 'red';
        } else {

            console.log('заполнен', field1[i]);

            erorrEnter[i].innerHTML = '';
            field1[i].style.border = '2px solid #787878';
            star2[i].style.color = '#787878';
        }
    }
};


/*Привило, если нет галочки */
let checkboxError2 = function() {
    if (checkboxInput1.checked === false) {

        console.log('не заполнен', checkboxInput1);

        erorrEnter[2].innerHTML = 'Поле обязательно для заполнения';
        star2[2].style.color = 'red';
    } else {

        console.log('заполнен', checkboxInput1);

        erorrEnter[2].innerHTML = '';
        star2[2].style.color = '#787878';
    }
};

/*Сохранение логина и пароля */
function sevedLC() {

    let nameMail = document.getElementById('emailLog');
    let password = document.getElementById('passwordLog');

    let userNames = [];

    console.log(typeof userNames);
    console.log(userNames)

    if (localStorage.getItem('user')) {
        userNames = JSON.parse(localStorage.getItem('user'))
    }

    let userName = ({ nameEmail: nameMail.value, namePassword: password.value });

    userNames.push(userName)

    localStorage.setItem('user', JSON.stringify(userNames));

};



/*Правило валиции логина и пароля */

let validateUser = function() {

    let nameMail1 = document.getElementById('emailInput').value;
    let password1 = document.getElementById('passwordInput').value;

    console.log(typeof nameMail1);
    console.log(typeof password1);
    console.log('nameMail1 :', nameMail1);
    console.log('namePassword :', password1);

    let userEnter = ({ nameEmail: nameMail1, namePassword: password1 })

    localStorage.setItem('user2', JSON.stringify(userEnter));
    const person2 = JSON.parse(localStorage.getItem('user2'));

    const person = JSON.parse(localStorage.getItem('user'));

    for (let i = 0; i < person.length; i++) {
        let pers = person[i]
        if (JSON.stringify(pers) === JSON.stringify(person2)) {
            erorrEnter[1].innerHTML = 'вы ввели верный логин и пароль';
            erorrEnter[1].style.color = 'green';
            alert('вы успешно вошли на сайт')
            break
        } else {
            erorrEnter[1].innerHTML = 'неверный логин или пароль';
        }
    }
};