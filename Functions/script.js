//--- CURRENT DATE,TIME
function currentTime() {
    let d = new Date();
    document.write(d);
}
currentTime();
// //--- GREETINGS
let firstname = prompt("Emter Your First Name");
let lastname = prompt("Emter Your Last Name");
function greets(firstname,lastname){
    document.write("<br> Welcome " + firstname + " " + lastname + "!")
}
greets(firstname,lastname);
// //--- SUMS OF NUMBERS
let num1 = +prompt("Enter a number");
let num2 = +prompt("Enter a number");
function sum(num1,num2) {
    return num1 + num2;
}
document.write("<br> The Sum is: " + sum(num1,num2));
//--- CALCULATOR
let a = +prompt("Enter number 1");
let b = +prompt("Enter number 2");
let c = prompt("Enter operator");

function calculator(a,b,c) {
    if(c === "+"){
        document.write(a + " " + c + " " + b + " " + "=" + " " + (a + b));
    }
   else if(c === "-"){
        document.write(a + " " + c + " " + b + " " + "=" + " " + (a - b));
    }
    if(c === "*"){
        document.write(a + " " + c + " " + b + " " + "=" + " " + (a * b));
    }
    else if(c === "/"){
        document.write(a + " " + c + " " + b + " " + "=" + " " + (a / b));
    }
    if(c === "%"){
        document.write(a + " " + c + " " + b + " " + "=" + " " + (a % b));
    }
}
calculator(a,b,c);
// //--- SQUARES OF NUMBERS
let number = +prompt("Enter a number for taking Square");
function square(number){
    return number * number;
}
document.write("<br> The Square of the Number is: " + square(number));
//--- AREA OF RECTANGLE
let width = +prompt("Width of the Rectangle");
let height = +prompt("Height of the Rectangle");
function area(width,height){
    return width * height;
}
document.write("<br> The Area of the Rectangle is: " + area(width,height));
//--- CIRCUMFERENCE OF THE CIRCLE
let radius = +prompt("Enter radius");
let circumference = 6.28;
function circumferenceCircle (radius,circumference){
    return circumference * radius;
}
document.write("<br> The Circumference is: " + circumferenceCircle(radius,circumference));
//--- AREA OF CIRCLE
// let r = +prompt("Enter radius");
// let area = 3.14;
// function areaOfCircle(r,area){
//     return area * (r * r);
// }
// document.write("<br> The Area of the Circle is: " + areaOfCircle(r,area));
//--- COUNTING
let start_num = +prompt("Enter Start number");
let last_num = +prompt("Enter Last number");
document.write("<br> <h2>COUNTING</h2>");
function counting(start_num,last_num) {
    if (start_num > last_num) {
        for(let i = start_num; i > last_num; i-- )
            document.write("<br>" + i + "<br>")
    }
    else if (start_num <= last_num){
        for(let i = start_num; i <= last_num; i++)
        document.write("<br>" + i + "<br>")
    }
    else if (start_num === last_num){
        document.write("both are equal")
    }
}
counting(start_num,last_num);

function even(number){
    return number % 2 === 0;
}
console.log(even(6));

