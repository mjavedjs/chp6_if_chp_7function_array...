//   Chpater 6 start
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

//   Chpater 6 End



// Chpater 8 Array Start

// Declare an empty array using JS literal notation to store 
// student names in 

// let student=[];
// // 2)Declare an empty array using JS object notation to store 
// // student names in future

// let students= new Array();

// 3. Declare and initialize a strings array.
// let userName=["javed","ubad","Abdullah","Musa"];

// 4 Declare and initialize a numbers array

// let id=[45,23,66,77];

// 5 Declare and initialize a boolean array

// let UserValue=[true,false];

// 6. Declare and initialize a mixed array.

// let mixedValue=["javed",238,true]


// 7. Declare and Initialize an array and store available mobile 
// networks in Pakistan

// let Newtworks=["jazz","telenor","zong","ufone","onic"];

// 8. Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like

// let show_value=document.querySelector("#head");
// let Degree=["SSC","BCS","BS","COM","MS","5)M.PHIL","PHD","BCS"];
// for(let i=0; i<=Degree.length; i++){
//     show_value.innerHTML +=  Degree[i] + "<br/>"
// }

// Declare and initialize an empty array to store top movies of 
// & length of array in your browser. (Use array’s length method

// let UserMovie=document.querySelector("#movie");
// let Lenght_array=document.querySelector("#lenght");

// let Movie_name=["Average:age of Ultron","sperture","jurassic world","inside out"];
// for(let i=0; i<=Movie_name.length; i++){
//     UserMovie.innerHTML += Movie_name [i] + "<br/>"
// }
// Lenght_array.innerHTML= "The lenght of Moive is " +Movie_name.length


// Declare and Initialize an array with your favorite cars. Show 
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the arra



// let Cars = ["audi", "G-wagon", "civic", "Reveo"];
// let firstIndex = Cars[0];
// let FavCar = Cars[1];
// let lastCar = Cars[3];

// console.log(`First car at index 0: ${firstIndex}`);
// console.log(`Favorite car at index 1: ${FavCar}`);
// console.log(`Last car at index 3: ${lastCar}`);

// let students = ["javed", "subhan", "wali"];
// let scores = [200, 300, 400];
// let Total = 500;

// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / Total) * 100;
//     console.log(`${students[i]} scored ${scores[i]} out of ${Total}, which is ${percentage.toFixed(2)}%`);
// }
// 12. Initialize an array with color names. Display the array 
// elements in your browser.
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated 
// array in your browser.
// c. Add two more color to the beginning of the array. Display 
// the updated array in your browser

// let colors = ["Red", "Green", "Blue"];
// console.log("Initial array:", colors);

// let newColorBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(newColorBeginning);
// console.log("Updated array after adding to the beginning:", colors);

// let newColorEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(newColorEnd);
// console.log("Updated array after adding to the end:", colors);

// colors.unshift("Yellow", "Purple");
// console.log("Updated array after adding two more colors to the beginning:", colors);


// Write a program to store student scores in an array & sort 
// the array in ascending order using Array’s sort method.

// let studetScore=[450,89,455,99,22];
// let result= studetScore.sort();
// console.log(result)

// Write a program to sort the below mentioned array
// let fruits = ["straberry","apple","mango","pineapple","orange"];
// let result = fruits.sort();
// console.log(result)


// Write a program to initialize an array with city names. Copy 
// 13 array elements from cities array to selectedCities arra

// Initialize an array with city names
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// selectedCities = cities.slice(2, 4);

// console.log("Selected Cities:", selectedCities);


// Write a program to create a single string from the below 
// // mentioned array

// let string=["This " ,"is","javacript","code"];
//  let output=string.join("");
// console.log(output)
// Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were 
// stored. (FIFO-First In First Out


// let devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("pointer");

// while (devices.length > 0) {
//     console.log(devices.shift());
// }
//   Q 18

// let devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("pointer");

// while (devices.length > 0) {
//     console.log(devices.pop());
// }





//   QUSTION NO 19

// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//         document.write('<select>');

//         for (let i = 0; i < phoneManufacturers.length; i++) {
//             document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
//         }

//         document.write('</select>');

// QUESTION NO 20;


// let array = ["javed","chohan",[1,2,3]];
// QUESTION NO 21;
  
let  array1=[0,1,2,3,[1,0,1,2],[2,1,0,1]];
let combineArray= array1.flat();
console.log(combineArray);

// Chpater 8 Array End




// Function chpt start

// 1.	Create a block of code that you can use several times. 

// function repeat(a, b){
//     console.log(a+b);
// }
// repeat(50 ,50);
// repeat(500 ,50);
// repeat(5 ,50);
// repeat(50 ,100);

// 2.	Write a function that displays current date & time in your browser.

// function date(){
//     let date= new Date();
//     console.log(date.toLocaleString())
// }
// date();

// 3.	Write a function that takes first & last name and then it greets the user using his full name.


// function greetUser(username,lastName){
//    console.log(username + lastName);
// }
// greetUser("Muhammad ","Javed ");

// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.


// let num1= +prompt("Enter Number 1");
// let num2= +prompt("Enter Number ");

// function sum(){
//     console.log(`The sum of number is ${num1 + num2}`);
// }
// sum();

// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1,num2){

//     return num1 + num2
// }
//  let sum=calculator(10,50);
//  console.log(sum)

// function calculator(num1 ,num2,operator){
// let result;

// if(operator==='+'){
//     result = num1 + num2
// }
// else  if(operator==='-'){
//     result = num1 - num2
// }
// else  if(operator==='*'){
//     result = num1 * num2
// }
// else  if(operator==='/'){
//     result = num1 / num2
// }
//   return result;
// }
// let sum = calculator(20,50 ,'*');
// let sum1 = calculator(20,50 ,'+');
// let sum2 = calculator(20,50 ,'/');
// let sum3 = calculator(20,50 ,'-');
// console.log(` The Mulity${sum} , sum${sum1}, Divison${sum3}, sub ${sum}` );

// 6.	 Write a function that squares its argument

// function Squre(num1){
//     return num1 ** 2
// }
// let result=Squre(9);
// console.log(result);


// 8.	Write a function that take start and end number as inputs & display counting in your browser.f
// 
// function Counter(start,end){
//    let counter=document.querySelector("#counting");
//    counter.innerHTML="";
//    for(start; start<=end; start++){
//    counter.innerHTML +=start + "<br/>";
    
//    }
// }


// 9.	Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function CalculateShape(){
//     function sub(Base,perpendicular){
//       let Hypotenuse = Base ** 2 + perpendicular  ** 2;
//         console.log(`the value of triangle is : ${Hypotenuse} `)
//     }
//     sub(4,10)
// }

// let Length=document.querySelector("#name-lenght");
// function vlength(javed){
//   return  Length.innerHTML=javed.length + "  length of Arrgument"
// }
//  let result=vlength("javedchohann");
//  console.log(result);
  
// Ai generte programmme
// let Length = document.querySelector("#name-length"); 
// function vlength(...args) {  
//   let argList = args.join(", ");  // Join all arguments into a string
//   Length.innerHTML = `Arguments: ${argList} <br> Number of Arguments: ${args.length}`;  // Display list and count
//   return args.length;  // Return the number of arguments
// }

// let result = vlength("javedchohann", "example", "test", 123, true); 
// console.log(result);  


// 11.	Write a function that accepts any number of arguments & find largest of the number
;
// function findLargest(...args) {
//     if (args.length === 0) {
//         return "No numbers provided";
//     }
//     return Math.max(...args);
// }

// console.log(findLargest(5, 10, 3, 8));  // Output: 10
// console.log(findLargest(-5, -10, -3, -8));  // Output: -3
// console.log(findLargest());  // Output: No numbers provided

// 12.	Write a function that calculates the area of a rectangle.
// A = width * height

// function rectangel(width,height){
//  let area=width*height
//  console.log(Shpae);
 
// }
// rectangel(400,300);
  

// 13.	Write a function that receives an array & returns the sorted array.

// function sortArry(arry){
//        let result= arry.sort();
//        console.log(result)
// }
//  sortArry([45,86,96,75]);
//   Q14
// function sum(arry){
//  return arry.reduce((accumlator,currentValue)=> accumlator +currentValue);
//  console.log(Addition);
// }
//  let outPut=sum([12,85,96,74]);
//  console.log(outPut); // output is 267


// var param = function inner() { 
//     return typeof inner; 
// }
// alert(param()); // function store in varibale and retur type of function which store in variabl

// var param = function inner() { 
//     return typeof inner; 
// }
// alert(param()); 

// 16.	Write a function that computes power of a number. E.g. 23 is 8.

    // function Power(num1,num2){
    //   return Math.pow(num1 , num2)// pow method required two number 
    // }
    //  let result=Power(23,8);
    //  console.log(result);

    // 17.	Write a function that simulates a dice & returns a random dice value.

//    function dic(){
//     return Math.floor(Math.random(dic)*6 +1);
//    }
//   let result= dic();
//   console.log(result);

// 18.	Write a JavaScript function that reverse a number. 
// Example x = 32243;
// EXPECTED OUTPUT : 34223

// function  reverseNumber(){
//     let number=32243;
//     let result= parseInt(number.toString().split('').reverse().join(''))
//     console.log(result)
// }
// reverseNumber()

// 20.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox' 
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function ConvertString(str){
//     let result =str.charAt(0).toUpperCase()+ str.slice(1);
//     return result
// }

//  let output=ConvertString("javed qucic brown fox");
//  console.log(output)  // only first word Javed is capital

// 21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial' 
// EXPECTED OUTPUT : 'Development'

// function FindLargWord(str){
//       let words= str.split(" ");
//       let Lword=" ";

//       words.forEach(word => {
//         if(word.length>Lword.length){
//             Lword = word;
//         }
//       });   

//     return Lword;
// }
// let result=FindLargWord(" Web Development Tutorial");
// console.log(result)

// function CheckVowel(str){
//     let CheckValue= str.split().join(" ");
//      let countVowel=0;
//     console.log(CheckValue);
//     for(char of CheckValue){
//         if("aeiouAEIOU".includes(char)){
//             countVowel ++;
//         }
//     }
//     return countVowel
// }

//  let result= CheckVowel("The quick brow fox");
//  console.log(result)



// 23.	Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function Func(inner){
//     let result=  typeof  inner.toString();
//     return result;
// }
// let ouput=Func("javed");
// console.log(ouput)

// Write a JavaScript function to extract unique characters from a string. 
// EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog"
// EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg

// function remove(str){
//       let removeVlue= new Set(str);
//       return [...removeVlue].join("");
// }
//  let result=remove("javedchohanandChohan");
//  console.log(result);


// 25.	Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o' 
// EXPECTED OUTPUT : 2 

// function countOccurrences(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

//  exampleString = "123451234512345";
// let result = countOccurrences(exampleString,"5");
// console.log(result);
  
// Q26  

// function calculateAge(birthYear, currentYear) {
//     let age1 = currentYear - birthYear;
//     let age2 = age1 - 1;
//     console.log(`You are either ${age2} or ${age1}`);
// }

// // Example usage
// calculateAge(2006, 2024); 


// 27
// function calculateSupply(age, amountPerDay) {
//     const maxAge = 60; 
//     const yearsRemaining = maxAge - age;
//     const daysRemaining = yearsRemaining * 365;
//     const totalAmount = Math.round(daysRemaining * amountPerDay);
//     console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
// }

// calculateSupply(25, 2.5); 

// Q 28
// function calculateArea(radius) {
//     const pi = Math.PI;
//     return pi * Math.pow(radius, 2);
// }

// let radius1 = 5;
// console.log(`The area of a circle with radius ${radius1} is ${calculateArea(radius1).toFixed(2)}`); 

// Q29
// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
// }

// let celsiusTemp = 30;
// celsiusToFahrenheit(celsiusTemp);


// Function chpt End
