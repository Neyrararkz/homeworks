//1
console.log("//1")
for(let i=1; i<=100; i++){
    if (i%7==0){
        console.log('Seven!')
    } else{
        let isprime = true;
        for(let j=2; j<i; j++){
            if (i%j===0){
                isprime = false;
            }
        } if (isprime === true){
            console.log(i*i)
        } else{
            console.log(i)
        }
    }

}

//2
console.log("//2")
let n = 10;
while (n<=500){
    let n1 = n;
    let m = 0;
    while(n1>0){
        m = m*10 + n1%10;
        n1 = Math.floor(n1/10);
    }
    if (m==n){
        console.log (n)
    }
    n++;
}

//3
let sum = 0;
do {
    let num = prompt('Введите число: ')
    sum += parseInt(num);
} while(sum<=200)
alert(sum)

//4
console.log("//4")
for(let i=1; i<=9; i++){
    if (i%2===1){
        for(let j=1; j<=9; j++){
            if(j%2===1){
                console.log(i + ' x ' + j + ' = ' + i*j)
            }
        }
    }
}

//5
console.log("//5")
let o = 20;
while(o>=1){
    if(o%2===0 && o%3===0){
        console.log(o)
    }
    o--
}