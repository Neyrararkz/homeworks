//1
let languages = ['c++', 'python', 'javascript']
console.log(languages.includes('python'))

//2
let nums2 = [5, 7, 12, 8, 7, 9, 7, 1]
console.log(nums2.indexOf(7))
console.log(nums2.lastIndexOf(7))

//3
let str = 'JavaScript'
console.log(Array.from(str))

//4
let zeros = Array(10).fill(0)
console.log(zeros)

//5
let arr = [[1, [2, 3], [4, [5]]] ]
console.log(arr.flat(3))

//6
let nums = [10, 20, 30, 40, 50] 
console.log(nums.slice(1,4))

//7 
let numbers = [1, 2, 3] 
numbers.splice(1, 0, 100)
console.log(numbers)