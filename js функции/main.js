//Базовый уровень
//1
function multiply(a, b) {
    return a*b
}

//2
const isPositive = (num) => {
    return num>0
}

//3
function sayHello(name) {
    return 'Привет, ' + name
}

//4
function getFirstElement(arr) {
    return arr[0]
}

//Средний уовень 
//5
function min(a, b) {
    if(a>b){
        return a
    } else{
        return b
    } 
}

//6
const sumArray = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

//7
function getEvenNumbers(arr) {
    return arr.filter(num => num%2 ===0)
}

//8
function reverseWord(word) {
    return word.split('').reverse('').join('')
}

//9
const getShortWords = (words) => {
    return words.filter(word => word.length <=3)
}

//Продвинутый уровень
//10
function palindrome(str) {
    reverse = word.split('').reverse('').join('')
    return reverse = str
}






