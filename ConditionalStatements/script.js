// conditional statemnents 
console.log("Conditional Statements in JavaScript");

let age = 18


// if 
if (age >= 18) {
    console.log("You are eligible to vote");
}

// if ... else
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// if ... else if ... else

let score = 90

if (score > 90) {
    console.log("Grade A")
} else if (score >= 75) {
    console.log("Grade B")
} else if (score >= 60) {
    console.log("Grade C")
} else if (score >= 40) {
    console.log("Grade D")
} else {
    console.log("Grade F")
}

// switch ... case

let day = 6
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day");
}

// exercise : prompt user to enter a number & check if multiple of 5 or not

// let number = prompt("Enter a number")
let number = 23

if (number % 5 === 0) {
    console.log(number, "is a multiple of 5");
} else {
    console.log(number, "is NOT a multiple of 5");
}

// exercise : grade students based on marks 80-100 A, 60-79 B, 40-59 C, below 40 F
score = 58

if (score >= 80 && score <= 100) {
    console.log("Grade A")
}
else if (score >= 60 && score <= 79) {
    console.log("Grade B")
}
else if (score >= 40 && score <= 59) {
    console.log("Grade C")
} else {
    console.log("Grade F")
}
