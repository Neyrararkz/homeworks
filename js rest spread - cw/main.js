//1
const userA = { name: "Alice", age: 20, city: "Almaty" };
const userB = { name: "Ivan", age: 25, city: "Moscow" };
const userC = { name: "John", age: 30, city: "London" };

const newUsers = { ...userA, ...userB, ...userC };

//2
const data = [
    { name: "Tom", grade: 85 },
    { name: "Sara", grade: 91 },
    { name: "Liam", grade: 78 },
    { name: "Bob", grade: 63 },
];

const [, { name: secondStu }, { name: thirdStu }] = data;

//3
const arr = [10, 20, 30, 40, 50, 60];

const [first, second, third, fourth, ...rest] = arr;
const others = [first, third, ...rest]; 

//4
const products = [
    { id: 1, title: "Laptop", price: 1000 },
    { id: 2, title: "Phone", price: 600 },
    { id: 3, title: "Mouse", price: 40 },
];

const newProducts = products.map(p => p.id === 1 ? { ...p, price: 1200 } : p);

//5
const response = {
    status: "ok",
    user: {
        name: "Emily",
        city: "Paris",
        age: 22,
        email: "emily@mail.com",
        phone: "123-45-67"
    }
};

const {user: {name, city, ...privateInfo}} = response;

//6
const entries = [
    { a: 1 },
    { b: 2, c: 3 },
    { d: 4 }
];

const result = entries.reduce((acc, obj) => {return { ...acc, ...obj }}, {});

//7
const config = {
    token: "token",
    url: "https://blalbs",
    timeout: 5000,
    retries: 3
};

const { token, ...safeConfig } = config;

//8
const numbers = [1, 2, 3, 4, 5];

const reverse = ([first, ...rest]) => {
    if (first === undefined) return [];
    return [...reverse(rest), first];
};

//9
const a = {
    id: 1,
    info: {
        name: "Anna",
        age: 20
    }
};

const b = {
    id: 2,
    info: {
        age: 25,
        city: "Berlin"
    }
};

const info = {...a.info, ...b.info};

//10
const user = {
    id: 10,
    name10: "Michael",
    age: 19,
    email: "mike@mail.com",
    city10: "Rome",
    university: "Sapienza",
    course: 1
};

const {id, name10, ...other1} = user;
const {age, email, city10, ...other2} = other1;
const main = {id, name10};
const profile = {age, email, city10};
const academic = {other2};