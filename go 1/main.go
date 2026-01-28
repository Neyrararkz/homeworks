package main

import "fmt"

//1
func add(a int,b int) int {
	return a+b
}
//2
func sub(a int,b int) int {
	return a-b
}
//3
func mul(a int,b int) int {
	return a*b
}
//4
func max(a int,b int) int {
	if a>b{
		return a
	} else {
		return b
	}
}
//5
func min(a int,b int) int {
	if a<b{
		return a
	} else {
		return b
	}
}
//6
func isEven(n int) bool {
	if n%2==0{
		return true
	} else {
		return false
	}
}
//7
func isPositive(n int) bool {
	if n>0{
		return true
	} else {
		return false
	}
}
//8
func abs(n int) int {
	if n<0{
		return -n
	} else {
		return n
	}
}
//9
func sumToN(n int) int {
	if n<=0{
		return 0
	} else {
		sum := 0
		for i:=1; i<=n; i++{
			sum+=i
		}
		return sum
	}
}
//10
func factorial(n int) int {
	fac := 1
	for i:=1; i<=n; i++{
		fac*=i
	}
	return fac
}
//11
func sumDigits(n int) int {
	var m int
	sum := 0
	for n>0{
		m = n%10
		sum += m
		n /= 10
	}
	return sum
}
//12
func reversNumber(n int) int {
	m := 0
	for n>0{
		m = m*10 + n%10
		n /=10
	}
	return m
}
//13
func countDigits(n int) int {
	if n==0{
		return 1
	}
	count := 0
	for n>0{
		count ++
		n /= 10
	}
	return count
}
//14
func isPrime(n int) bool {
	if n<=1{
		return false
	} 
	if n==2 {
		return true
	}
	if n%2 == 0 {
		return false
	}
	count:= 0
	for i:=1; i<=n; i++{
		if n%i == 0{
			count ++
		}
	} 
	if count > 2 {
		return false
	}else{
		return true
	}
}
//15
func divide(a int, b int) (int, bool) {
	if b==0{
		return 0,false
	}else{
		return a/b, true
	}
}

func main() {

	// //1
	// var a,b int 
	// fmt.Print("Enter two numbers: ")
	// fmt.Scan(&a,&b)
	// result := add(a,b)
	// fmt.Println("Result: ", result)

	// //2
	// var a,b int 
	// fmt.Print("Enter two numbers: ")
	// fmt.Scan(&a,&b)
	// result := sub(a,b)
	// fmt.Println("Result: ", result)

	// //3
	// var a,b int 
	// fmt.Print("Enter two numbers: ")
	// fmt.Scan(&a,&b)
	// result := mul(a,b)
	// fmt.Println("Result: ", result)

	// //4
	// var a,b int 
	// fmt.Print("Enter two numbers: ")
	// fmt.Scan(&a,&b)
	// result := max(a,b)
	// fmt.Println("Max: ", result)

	// //5
	// var a,b int 
	// fmt.Print("Enter two numbers: ")
	// fmt.Scan(&a,&b)
	// result := min(a,b)
	// fmt.Println("Min: ", result)

	// //6
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := isEven(n)
	// fmt.Println("Even: ", result)

	// //7
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := isEven(n)
	// fmt.Println("Positive: ", result)

	// //8
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := abs(n)
	// fmt.Println("Module: ", result)

	// //9
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := sumToN(n)
	// fmt.Println("Sum to n: ", result)

	// //10
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := factorial(n)
	// fmt.Println("Factorial: ", result)

	// //11
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := sumDigits(n)
	// fmt.Println("Sum Digits: ", result)

	// //12
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := reversNumber(n)
	// fmt.Println("Revers: ", result)

	// //13
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := countDigits(n)
	// fmt.Println("Count Digits: ", result)

	// //14
	// var n int 
	// fmt.Print("Enter number: ")
	// fmt.Scan(&n)
	// result := isPrime(n)
	// fmt.Println("Prime: ", result)

	// //15
	// var a,b int 
	// fmt.Print("Enter two number: ")
	// fmt.Scan(&a,&b)
	// result, ok := divide(a,b)
	// if ok {
	// 	fmt.Println("Divide: ", result)
	// } else{
	// 	fmt.Println("Error")
	// }
	

}