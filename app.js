// Question # 01

// let num1 = +prompt("Enter first number to be compared");
// let num2 = +prompt("Enter second number to be compared");

// (num1 > num2 )? alert('The sign is -') : (num2 > num1)?console.log(`The greater number is: ${num2}`): console.log(`${num1} and ${num2} both are equal`);



// Question # 02

// let userNum = +prompt("Enter the number")

// (userNum >= 0) ? alert('The sign is +') : alert('The sign is -');


// Question 3

// let numbers = [];

// for (let i = 1; i <= 5; i++) {
// 	let num = +prompt(`Enter number ${i}`);
// 	numbers.push(num);
// }

// function findLargestNumber(numbers) {
// 	let largestNum = numbers[0];
// 	for (let i = 1; i < numbers.length; i++) {
// 		if (numbers[i] > largestNum) {
// 			largestNum = numbers[i];
// 		}
// 	}
// 	return largestNum;
// }

// console.log(`The largest number is: ${findLargestNumber(numbers)}`);


// Question # 04

// for (let i = 0; i <= 15; i++){

//     (i % 2 == 0) ? document.write(`${i} is even <br>`) : document.write(`${i} is odd <br>`);
// }

// Question # 05

// let marks = [];

// for (let i = 1; i <= 5; i++) {
// 	let num = +prompt(`Enter subject no. ${i} marks`);
// 	marks.push(num);
// }

// let totalMarks = 0;

// for (let i = 0; i < marks.length; i++) {
// 	totalMarks += marks[i];
// }

// let averageMarks = totalMarks / marks.length;

// let grade;

// switch (true) {
// 	case averageMarks < 60:
// 		grade = 'F';
// 		break;
// 	case averageMarks < 70:
// 		grade = 'D';
// 		break;
// 	case averageMarks < 80:
// 		grade = 'C';
// 		break;
// 	case averageMarks < 90:
// 		grade = 'B';
// 		break;
// 	default:
// 		grade = 'A';
// 		break;
// }

// document.write(`Average marks: ${averageMarks.toFixed(2)}\nGrade: ${grade}`);


// Question # 06

//  for (let i = 1; i <= 100; i++){
   
// (i % 3 === 0 && i % 5 === 0)
// 	? console.log('FizzBuzz')
// 	: (i % 3 === 0)
// 	? console.log('Fizz')
// 	: (i % 5 === 0)
// 	? console.log('Buzz')
// 	: console.log(i);
       
// }
 


// Question # 07

// for (let i = 1; i <=5; i++){
//     for (let j = 1; j <= i; j++){
//         document.write("* ")
//     }
//     document.write("<br>")
// }
