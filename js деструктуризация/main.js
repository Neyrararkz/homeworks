//1
const student = { name: "Aruzhan", gpa: 3.9, city: "Almaty" };

const {name, gpa} = student

console.log(name)
console.log(gpa)

//2
const exam = { title: "Frontend", attempts: 3 };

const {title: examTitle} = exam

console.log(examTitle)

//3
const user = { name3: "Dana" }

const {name3, country = 'Kazakhstan'} = user

console.log(name3)
console.log(country)

//4
const attempt = {  
    student: { name4: "Aruzhan", id: "s001" },
    exam: { title: "JS", score: 88 }
}

const {student: {name4}, exam: {score} } = attempt

console.log(name4)
console.log(score)

//5
const numbers = [10, 20, 30];

const [a, ...rest] = numbers
const c = rest[1]

console.log(a)
console.log(c)

//6
const user6 = {
    id: 1,
    name6: "Dana",
    role: "student",
    city: "Astana",
};

const {name6,...other} = user6

console.log(name6)
console.log(other)

//7
const student7 = { name: "Aruzhan", gpa: 3.8 };

const updatedStudent = {...student7, city: "Almaty"}

console.log(updatedStudent)

//8
const grades = [5, 4, 5, 3, 4]

const [first,...other8] = grades

console.log(first)
console.log(other8)

//9
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

const stack = [...frontend, ...backend]

console.log(stack)

//10
const product = {
    title: "Phone",
    price: 100000,
    discount: 0.15,
    getFinalPrice() {
        return this.price * (1 - this.discount)
    }
};

console.log(product.getFinalPrice())
