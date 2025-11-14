//Блок 1
//1
let a1 = prompt("Ваше число: ")
if (a1>0){
    alert("Положительное")
}else{
    alert('Отрицательное или ноль')
}

//2 
let a2 = prompt("Ваше число: ")
if (a2%2===0){
    alert("Четное")
}else{
    alert('Нечетное')
}

//3
let a3 = prompt("Ваш возраст: ")
if (a3>=18){
    alert("Доступ разрешен")
}else{
    alert('Доступ запрещен')
}

//4
let a4 = prompt("Введите пароль: ")
if (a4==12345){
    alert("Вход выполнен")
}else{
    alert('Неверный пароль')
}


//Блок 2
//6
let a6 = prompt("Ваше число: ")
if (a6>=10 && a6<=20){
    alert("В диапазоне")
}else{
    alert('Не в диапазоне')
}

//7
let a7 = prompt("Ваше число: ")
if (a7<0 || a7>100){
    alert("Вне диапазона")
}

//8
let a8 = prompt("Ваш возраст: ")
let b8 = prompt("У вас есть билет?: ")
if (a8>=18 && b8=="да"){
    alert("Вход разрешен")
}

//9
let a9 = prompt("Какой сегодня день недели?: ")
if (a9=="суббота" || a9=="воскресенье"){
    alert("Выходной")
}else{
    alert('Рабочий день')
}

//10
let a10 = prompt("Какая температура на улице: ")
let b10 = prompt("Идет ли дождь?: ")
if (a10>25 && b10=="нет"){
    alert("Идем гулять")
}else{
    alert('Остаемся дома')
}


//Блок 3
//11
let a11 = prompt("Ваше число: ")
if (a11>0){
    if(a11%2==0){
        alert('Четное')
    }else{
        alert('Нечетное')
    }
}

//12
let a12 = prompt("Ваш возраст: ")
if (a12>=18){
    let b12 = prompt("Есть ли паспорт?: ")
    if(b12=='да'){
        alert('Можно пройти')
    }else{
        alert('Нужен паспорт')
    }
}

//13
let a13 = prompt("Ваш балл: ")
if (a13>90){
    alert('Отлично')
}else{
    if (a13>70){
        alert('Хорошо')
    }else{
        if (a13>50){
            alert('Удволетворительно')
        }else{
            alert('Плохо')
        }
    }
}

//14
let a14 = prompt("Ваш логин: ")
if (a14=='admin'){
    let b14 = prompt("Ваш пароль: ")
    if (b14=='1234'){
        alert('Вход выполнен')
    }else{
        alert('Неверный пароль')
    }
}

//15
let a15 = prompt("Ваше число: ")
if (a15>1000){
    if (a15%5===0){
        alert('Большое и делится на 5')
    }else{
        alert('Большое, но не делится на 5')
    }
}


//Блок 4
//16
let a16 = prompt("Какой сегодня день недели? (1-7): ")
let b16
switch (a16) {
    case '1':
        b16 = 'Понедельник'
        break
    case '2':
        b16 = 'Вторник'
        break
    case '3':
        b16 = 'Среда'
        break
    case '4':
        b16 = 'Четверг'
        break
    case '5':
        b16 = 'Пятница'
        break
    case '6':
        b16 = 'Суббота'
        break
    case '7':
        b16 = 'Воскресенье'
        break
}
alert(b16)

//17
let a17 = prompt("Какой сейчас месяц? (1-12): ")
let b17
switch (a17) {
    case '12': case '1': case '2':
        b17 = 'Зима'
        break
    case '3': case '4': case '5':
        b17 = 'Весна'
        break
    case '6': case '7': case '8':
        b17 = 'Лето'
        break
    case '9': case '10': case '11':
        b17 = 'Осень'
        break
}
alert(b17)

//18
let a18 = prompt("Какое действие выполнить?: ")
let b18
let c18 = 6
let d18 = 2
switch (a18) {
    case '+':
        b18 = c18+d18
        break
    case '-':
        b18 = c18-d18
        break
    case '*':
       b18 = c18*d18
        break
    case '/':
        b18 = c18/d18
        break
}
alert(b18)

//19
let a19 = prompt("Ваша оценка (1-5): ")
let b19
switch (a19) {
    case '1':
        b19 = 'Очень плохо'
        break
    case '2':
        b19 = 'Плохо'
        break
    case '3':
        b19 = 'Удволетворительно'
        break
    case '4':
        b19 = 'Хорошо'
        break
    case '5':
        b19 = 'Отлично'
        break
}
alert(b19)

//20
let a20 = prompt("Выберите напиток: \nчай \nкофе \nсок ")
let b20
switch (a20) {
    case 'чай':
        b20 = 'Цена: 500тг'
        break
    case 'кофе':
        b20 = 'Цена: 1000тг'
        break
    case 'сок':
        b20 = 'Цена: 700тг'
        break
    default:
        b20 = 'Нет в меню'
        break
}
alert(b20)

