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
    return reverse === str
}

//11
const factorial = (n) => {
    for(let i=1; i<=n; i++){
        n *= i
    }
    return n
}

//12
function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length
}

//13
function findMax(arr) {
    return Math.max(...arr)
}

//14
const getUnique = (arr) => { 
    return [...new Set(arr)]
}

//Задания со звездочкой
//15
function compose(f, g) {
    return function(x) {
        return f(g(x));
    }
}

//16
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

//17
function groupByLength(words) {
    let result = {};
    for (let word of words) {
        if (!result[word.length]) {
            result[word.length] = [];
        }
        result[word.length].push(word);
    }
    return result;
}

