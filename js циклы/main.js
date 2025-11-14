//1
let nums1 = [15, 10, 4, 9, 25, 3, 48, 17, 5, 36]
let max = nums1[0]
let min = nums1[0]
for (let i=1; i<nums1.length; i++){
  if (nums1[i]>max){
    max = nums1[i]
  }
  if (nums1[i]<min){
    min = nums1[i]
  }
}
console.log("Максимальное значение:", max)
console.log("Минимальное значение:", min)

//2
let nums2 = [1, 2, 3, 4, 5, 6]
let nums2new = []
for (let i=nums2.length - 1; i>=0; i--){
    nums2new.push(nums2[i])
}
console.log(nums2new)

//3
let str3 = ['cat', 'elephant', 'horse', 'dog', 'giraffe']
let str3new = str3.filter(words => words.length <= 5)
console.log(str3new)

//4
let nums4 = []
for(let i=1; i<=50; i++){
    nums4.push(i)
}
let nums4new = nums4.filter(num => num%3 === 0 && num%5 === 0)
console.log(nums4new)

//5
let students = [
    { name: "Дарья", grade: 86 },
    { name: "Ксения", grade: 92 },
    { name: "Кирилл", grade: 59 },
    { name: "Артур", grade: 84 },
    { name: "Дана", grade: 78 },
    { name: "Богдан", grade: 63 }
]
let sum = 0;
for (let i=0; i<students.length; i++) {
    sum += students[i].grade;
}
let average = sum/students.length;
console.log("Средний балл:", average);
// for (let i=0; i<students.length; i++){
//     if(students[i].grade>average){
//         console.log(students[i].name + ': ' + students[i].grade)
//     }
// }
let studentsnew = students.filter(a => a.grade >= average)
studentsnew.forEach(student => {
  console.log(student.name + ': ' + student.grade)
})

//6
let str6 = ['Great', 'thought', 'through', 'a', 'space']
let str6new = ''
for (let i=0; i<str6.length; i++){
    str6new += str6[i] + ' '
}
console.log(str6new)

//7
let nums7 = [1, 1, 1, 1, 2, 3, 3, 3, 4, 5, 5]
for (let i=0; i<nums7.length; i++){
    for (let j=nums7.length-1; j>i; j--){
        if(nums7[j]===nums7[i]){
            nums7.splice(j, 1)
        }
    }
}
console.log(nums7)

//8
let nums8 = [1, 1, 1, 1, 2, 3, 3, 3, 4, 5, 5]
const frequency = nums8.reduce((acc, num) => {
  acc[num] = (acc[num] || 0 ) + 1
  return acc
}, {})
console.log(frequency)

//9
let nums9 = [1, 2, 3, 4, 5, 6]
let nums9new = nums9.map(num => num*num)
console.log(nums9new)

//10
let objects = [
    { name: "Дарья", age: 14 },
    { name: "Ксения", age: 17 },
    { name: "Кирилл", age: 12 },
    { name: "Артур", age: 24 },
    { name: "Дана", age: 16 },
    { name: "Богдан", age: 18 }
]
objects.sort((a, b) => a.age - b.age)
objects.forEach(object => {
  console.log(object.name + ' - ' + object.age)
})