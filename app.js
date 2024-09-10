// Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3”
//  let number=9;
//  if(number % 3 == 0){
//     console.log("The number is divide by 3")
//  }
//  else{
//     console.log("The number is not divide by 3")
//  }

// Q2:Write a program that checks whether the given input is an even 
// number or an odd number

// let number=3;
// if(number % 2==0){
//     console.log("The number is even")
// }
// else{
//     console.log("The number is odd")
// }


// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young".

// let age=17;
// if(age>=18){
//     console.log("old engou")
// }
// else{
//     console.log("Too Young")
// }
// . Write a program that prompts the user for their name, and then 
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output.

// let name=prompt("Enter Name");
// if(name==="javed"){
//     console.log("You are become software Engineer inshallah")
// }
// else{
//     console.log("invalid name")
// }

//  Write a program to check whether the given input number is 
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”

// let number = 3;
// switch (number % 3) {
//     case 1:
//         console.log("The number is not divisible by 3");
//         break;
//     case 2:
//         console.log("The number is not divisible by 3");
//         break;
//     case 0:
//         console.log("The number is divisible by 3");
//         break;
//     default:
//         console.log("The number is not divisible by 3");
// }
 // This is my programme 90% correct.
// let letter=+prompt("Enter number");

// if(letter>=65 && letter<=91){
//     console.log("The letter is Uppercase")
// }
// else if(letter>=97 && letter<=123){
//     console.log("The letter is lowerCase")
// }
// else{
//     console8.log("invalid letter")
// }
// let letter = "A";
// let asciiValue = letter.charCodeAt(0);
// console.log(asciiValue);  

// let letter= prompt("Enter the letter");
// let asciiValue=letter.charCodeAt(0); 

// if(asciiValue>=65 && asciiValue<=91){
//     console.log("The letter is Uppercase")
// }
// else if(asciiValue>=97 && asciiValue<=123){
//     console.log("The letter is Lowerrcase")
// }
// else{
//     console.log("invalid value")
// }

// Write a program to create a calculator for +, -, *, /, % using 
// switch case statements. (number1, number2 and operator will 
// be input

// let number=100;
// let number2=58;
// switch(number2 ,number2){
//     case number , number2:
//    console.log(number+number2);

//    case number , number2:
//    console.log(number * number2)

//    case number , number2:
//     console.log(number / number2);
//     case number , number2:
//         console.log(number - number2)
// }

// user input Taken Time   time format is 1200 till 2350

// let time=+prompt("enter time");
// if(time>=0 && time<=1200){
//     console.log("Good Morning");
// }
// else if(time>=1200 && time<=1700){
//     console.log("Good After none")
// }
// else if(time>=1700 && time<=2100)
// {
//     console.log('good eveing')
// }
// else if(time>=2100 && time<=2350){
//     console.log("Good Night");
// }
// else{
//     console.log("not valid time")
// }

// Q10: Write a program that 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give 
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise

// let password="javed238";
// let enterPassword=prompt("enter  Renter the passwoed");
// if(enterPassword===password){
//     console.log("YOU enter the Correct Password")
// }
// else{
//     console.log("Incorrect Password")
// }

//  Q :Write a program that adds an else statement to the following 
// script to display “You are not Fahad

// let name="javedchohan";
// if(name==="javedchohan"){
//     console.log(`Hello ${name}`)
// }
// else{
//     console.log( "You are not javed")
// }


// var hour = 13;
//  if (hour < 18) {
//  console.log ("Good day");
//  }
//  else
//  {
// console.log("Good evening")
// }
 
// Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

// let number1=89;
// let number2=100;
// if(number1>number2){
//     console.log(`${number1} large name`)
// }
// else if(number2>=number1){
//     console.log(`${number2} Laarge number hia`)
// }
// else{
//     console.log("invlid number")
// }

// Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero

// let number= +prompt("Enter number");
// if(number < 0){
//     console.log(`${number} is nagative numbere`)
// }
// else{
//     console.log(`${number} is Positive  number`)
// }
    //    Q15
// let hours=+prompt("Please Enter Time for Eating");
// if(hours>=6 && hours<=9){
//     console.log("Time for breakFast")
// }
// else if(hours>=11 && hours<=13) { // 1 bejha tak
//  console.log("Tiem for Lunch")
// } 
// else if(hours>=19 && hours<=22){ // 19=7 7 sa 10 bejha tak
//     console.log("Time for Dinnner")  
// }
// else{
//     console.log("app snacks kha sakete hat Khana  k time nh hai");
// }
//   Q16
// let number = 89;
// if (typeof number === "number") {
//     console.log("The type of the variable is number");
// } else if (typeof number === "string") {
//     console.log("The type of the variable is string");
// } else if (typeof number === "boolean") {
//     console.log("The type of the variable is boolean");
// } else {
//     console.log("invalid");
// }
//  Q:17 Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise;

// let Vovwel=prompt("Enter word");
// if(Vovwel==="a" || Vovwel==="e" || Vovwel==="i" ||Vovwel=== "o"||Vovwel=== "u")
//     {
//     console.log(`${Vovwel} is vovwel`)
// }
// else{
//     console.log("Invlid character")
// }

// Operator
// Choose the correct comparison operator to display "true", 
// when:
// 10 is NOT equal to 8
console.log(10 !== 8);

// 20. Use a conditional (ternary) operator

// let age=15;
// let result = age<=18 ? console.log("YOU  not are eilgble for drive"):console.log("YOU are  eliglble for drive");

