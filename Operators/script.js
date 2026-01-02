
let a = 10
let b = 2


console.log("a = ", a, ", b = ", b)



// arithmatic operators  +, -, *, /, %, **, ++ , --

console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a / b =", a / b)
console.log("a % b =", a % b)
console.log("a ** b =", a ** b)

// unary operators ++ --

// ++a, --a -> pre 
// a++,a-- -> post

console.log("++a =", ++a) // 11
console.log("After ++a , a =", a) // 11

console.log("a++ =", a++) // 11
console.log("After a++ , a =", a) // 12

console.log("--b =", --b) // 1
console.log("After --b , b =", b) // 1

console.log("b-- =", b--) // 1
console.log("After b-- , b =", b) // 0


//assignment operator =, +=, -=, *=, /=, %=, **=

a += 4 // a = a + 4
console.log("a =", a) // 16

a -= 4 // a = a - 4
console.log("a =", a) // 12

a *= 2 // a = a * 2
console.log("a =", a) // 24

a /= 2 // a = a / 2
console.log("a =", a) // 12

a %= 5 // a = a % 5
console.log("a =", a) // 2

a **= 3 // a = a ** 3
console.log("a =", a) // 8


// comparison operators > , < , >= , <= , == , != , === , !==

a = 20
b = 10

console.log("a > b =", a > b) // true
console.log("a >= b =", a >= b) // true

a = 5
b = 10

console.log("a < b =", a < b) // true
console.log("a <= b =", a <= b) // true

a = 5
b = 5

console.log("a == b =>", a == b) // true
console.log("a != b =>", a != b) // false

a = 5
b = "5"

console.log("a === b =>", a === b) // false
console.log("a !== b =>", a !== b) // true


// logical operators Logical AND && , Logical OR || , Logical NOT !

a = 10 
b = 5 

console.log("(a > b) && (b == 5) =>", (a > b) ,"&&", (b == 5), "=>", (a > b) && (b == 5)) // true

console.log("(a < b) || (b > 10) =>", (a < b) ,"||", (b > 10), "=>", (a < b) || (b > 10)) // false

console.log("!(a > b) =>", "!", (a > b), "=>", !(a > b)) // false


//  ternary operator  condition ? true output : false output

age = 25

let eligiblity = age >= 18 ? "eligible" : "not eligible"
console.log("You are",eligiblity,"to vote")
