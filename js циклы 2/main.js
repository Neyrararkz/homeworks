//1
console.log('Задание 1')
let n1 = 1;
while(n1<=10){
    console.log(n1)
    n1++
}

//2
console.log('Задание 2')
let n2 = 1;
let sum = 0
while(n2<=100){
    sum += n2
    n2++
}
console.log('Сумма: ' + sum)

//3
let n3
do{
    n3 = prompt('Задание 3. Введите число: ')
} while(n3!=='0')

//4
let n4 = Math.floor(Math.random()*10) + 1
let m4
do{
    m4 = parseInt(prompt('Задание 4. Ваше предположение: '))
} while (m4 !== n4)

//5
console.log('Задание 5')
for(let i=1; i<=10; i++){
    console.log('5 * ' + i + ' = ' + 5*i)
}

//6
console.log('Задание 6')
for(let i=2; i<=50; i++){
    if(i%2===0){
        console.log(i)
    }
}

//7
console.log('Задание 7')
let n7 = parseInt(prompt('Задание 7. Введите число: '))
let fac = 1
for(let i=1; i<=n7; i++){
    fac *= i
}
console.log('Факториал числа ' + n7 + ': ' + fac)

//8
console.log('Задание 8')
for(let i=10; i>=1; i--){
    console.log(i)
}

//9
console.log('Задание 9')
let sum9 = 0
for(let i=1; i<=20; i++){
    sum9 += i*i
}
console.log('Сумма квадратов: ' + sum9)

//10
console.log('Задание 10')
let n = 5
for(let i=1; i<=n; i++){
    let row = ''
    for(let j=1; j<=n; j++){
        row += '*'
    }
    console.log(row)
}