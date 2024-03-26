//Quation number 01 to 02

document.write("<h3>Simple Prompt Calculator</h3>")
var first_num = +prompt("Enter First Number");
var second_num = +prompt("Enter Second Number");

document.write(`The sum of ${first_num} and ${second_num} = ${first_num + second_num}`);
document.write("<br>");
document.write(`The substraction of ${first_num} and ${second_num} = ${first_num - second_num}`);
document.write("<br>");
document.write(`The Multiplication of ${first_num} and ${second_num} = ${first_num * second_num}`);
document.write("<br>");
document.write(`The Division of ${first_num} and ${second_num} = ${first_num / second_num}`);
document.write("<br>");
document.write(`The Modulus of ${first_num} and ${second_num} = ${first_num % second_num}`);

document.write("<br>");document.write("<br>");


//quation number 03


document.write("<h3>Incriment and Decriment Variable using Script</h3>")
let num;
document.write(`The value of variable after declaration is ${num}`);
document.write("<br>");
num = 5;
document.write(`The initial value of variable  is ${num}`);

document.write("<br>");
num++;
document.write(`The value of variable after incriment  is ${num}`);

document.write("<br>");
num += 7;
document.write(`The value of variable after addition  is ${num}`);

document.write("<br>");
num--;
document.write(`The value of variable after decrement  is ${num}`);

document.write("<br>");
num %= 3;
document.write(`The remainder is ${num}`);

//quation number 04

document.write("<br>");
document.write("<br>");
document.write("<h3>Movie Ticket Cost</h3>")
let priceOfticket = 600;
let costOf5tickets = priceOfticket * +prompt("enter ticket quantity to calculate total price");
document.write(`Cost of buying tickets of a movie is ${costOf5tickets}`);

//quation number 05

document.write("<br>");
document.write("<br>");
document.write("<h3>Prompt Maths Table Generator</h3>")
let userInputTable = +prompt("Give me a number to print its table:")
document.write(`Table of ${userInputTable} is;`)
for (i = 1; i < 11; i++) {
    document.write("<br>");
    document.write(`${userInputTable} x ${i} = ${userInputTable * i}`)
}

document.write("<br>");
document.write("<br>");

//quation no 06

document.write("<h3>Temperature Converter</h3>")
let celsiusTemp = +prompt("I can convert Celsius into Farenheit \n You can give me a value in Celsius to convert it into Farenheit")

document.write(`The Output of your Farenheit value is ${(celsiusTemp * 9 / 5) + 32}`);

document.write("<br>");
let farenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write(`The Output of your celsius value is ${(farenheitTemp - 32) * 5 / 9}`);

//quation no 07

document.write("<br>");
document.write("<br>");
document.write("<h3>Shopping Cart Order Receipt</h3>");
let item1Cost = 650;
let item2Cost = 100;
let shipCharges = 100;

document.write(`Total Cost of your Order is ${(item1Cost * 3) + (item2Cost * 7) + 100}`);

//quation no 08

document.write("<br>");
document.write("<br>");
document.write("<h3>Mark Sheet</h3>");
let totalMarks = 980;
let studentMarks = 804;
let percentage = (studentMarks * 100) / totalMarks;
document.write(`Total marks : ${totalMarks};`);
document.write("<br>");
document.write(`Marks Obtained : ${studentMarks};`);
document.write("<br>");
document.write(`Percentage : ${percentage};`);

//quation no 09

document.write("<br>");
document.write("<br>");
document.write("<h3>Currency Calculator</h3>")
let dollarValue = 10;
let riyalValue = 25;
document.write(`Total Currency in PKR : ${(dollarValue * 104.80) + (riyalValue * 28)}`);

//quation no 10

document.write("<h3>Incriment and Decriment Variables</h3>")
let numVariable = 5;
numVariable+=5;//10
numVariable*=10;//100
numVariable/=2;//50
document.write(`The value of Variable after Incriment and Decriment : ${numVariable}`);//Answer=10;

//quation no 11

document.write("<br>");
document.write("<br>");
document.write("<h3>Age Calculator</h3>")
alert( `I can Calculate your age`);
let birthYear=+prompt("Enter your Birth year");
let currentYear = 2024;
document.write(`Your current Age is ${currentYear - birthYear}`);

//quation no 12

document.write("<h3>The Geometrizer</h3>");
let radiusOfcircle = 20;
document.write(`The Circumference of Circle is : ${2 * 3.142 * radiusOfcircle}`);
document.write("<br>");
document.write("<br>");
let radiusOfcircleSquare=radiusOfcircle ** 2;
document.write(`The Area of Circle is : ${3.142 * radiusOfcircleSquare}`);

//quation no 13

document.write("<br>");
document.write("<br>");document.write("<h3>LifeTime Supply Caculator</h3>")
let favouriteSnack = "Choclate Chip";
let current_age = 15;
let estimated_age=65;
let amount_of_sacks_per_day = 3;
document.write(`you will need ${(estimated_age - current_age) * amount_of_sacks_per_day } to last you until the ripe old ageof ${estimated_age};`);