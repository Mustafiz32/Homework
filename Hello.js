var number1 = parseFloat(prompt('please enter First number for result , you can see plus, mainus, divition, multiple or remainder'));
var number2 = parseFloat(prompt('please enter Seacend number for result , you can see plus, mainus, divition, multiple or remainder'));

var plus = number1 + number2;
var mainus = number1 - number2;
var divition = number1 / number2;
var multiple = number1 * number2;
var remainder = number1 % number2;

document.write(" number1 = " + number1 + '</br>');
document.write(" number2 = " + number2 + '</br>');
document.write(" Plus = " + plus + '</br>');
document.write(" Mainus = " + mainus + '</br>');
document.write(" Divition = " + divition + '</br>');
document.write(" Multiple = " + multiple + '</br>');
document.write(" Remainder = " + remainder + '</br>');


var inPame = prompt('Enter your name');

function introduction(name = 'Mustafiz'){
    return 'My name is ' + ' = ' + name + '</br>';
}
document.write(introduction(inPame));

// This is another part

var iPame = prompt('Enter your Father name');

function itroduction(nam = ''){
    return 'My Father name is ' + ' = ' + nam +'</br>';
}
document.write(itroduction(iPame));


// This is another part

var iame = prompt('Enter your Mother name');

function iroduction(nam = ''){
    return 'My Mother name is ' + ' = ' + nam +'</br>';
}
document.write(iroduction(iame));
