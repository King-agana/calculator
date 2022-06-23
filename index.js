var num1 = parseFloat(prompt("number1 : "))
var opr = prompt("operator + or * or / or -: ")
var num2 = parseFloat(prompt("number2: "))
 
let result;

if(opr == "+")
{
 result = num1 + num2
} else if(opr == "-")
{
    result = num1 - num2
} else if(opr == "*")
{
    result = num1 * num2
} else if(opr == "/")
{
    result = num1 / num2
} 
alert(result)

    