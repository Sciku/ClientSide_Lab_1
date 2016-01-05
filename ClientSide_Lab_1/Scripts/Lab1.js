//Uppgift 1

function CalculateSquareRoot() {
    var numberinput1 = document.getElementById('numberinput').value;
    var result = Math.sqrt(numberinput1);
    document.getElementById('calculatedroot').value = result;
}

//Uppgift 2
var basicpay = 15000;

function CalculateFullPay() {
    var sales = document.getElementById('salesinput').value;

    var fullpay = basicpay + Math.round(sales * 0.09);

    document.getElementById('calculatedpay').value = fullpay;
}

//Uppgift 3
var minutes = document.getElementById('convertedminutes');
minutes.addEventListener('click', ConvertHoursToMinutes, false);

var seconds = document.getElementById('convertedseconds');
seconds.addEventListener('click', ConvertHoursToSeconds, false);

function ConvertHoursToMinutes() {
    var hours = document.getElementById('hourinput').value;

    var convertToMinutes = hours * 60;

    document.getElementById('convertedminutes').innerHTML = convertToMinutes;
}

function ConvertHoursToSeconds() {
    var hours = document.getElementById('hourinput').value;

    var convertToSeconds = (hours * 60) * 60;

    document.getElementById('convertedseconds').innerHTML = convertToSeconds;
}

//Uppgift 4

var sumofnumbers = document.getElementById('thesum');
sumofnumbers.addEventListener('click', CalculateTheSum, false);

var averageofnumbers = document.getElementById('theaverage');
averageofnumbers.addEventListener('click', CalculateTheAverage, false);

function CalculateTheSum() {
    var input1 = document.getElementById('number1').value;
    var input2 = document.getElementById('number2').value;
    var input3 = document.getElementById('number3').value;

    var calculatesum = +input1 + +input2 + +input3;

    document.getElementById('thesum').innerHTML = calculatesum
}

function CalculateTheAverage() {
    var numberofinputs = 3;

    var input1 = document.getElementById('number1').value;
    var input2 = document.getElementById('number2').value;
    var input3 = document.getElementById('number3').value;


    var calculatesum = parseInt(input1) + parseInt(input2) + parseInt(input3);

    var calculateaverage = calculatesum / numberofinputs;

    document.getElementById('theaverage').innerHTML = calculateaverage
}

//Uppgift 5

var conversiontopounds = document.getElementById('convertedtopounds')
conversiontopounds.addEventListener('click', ConvertSekToPounds, false);

var conversiontodollars = document.getElementById('convertedtodollars')
conversiontodollars.addEventListener('click', ConvertSekToDollars, false);

function ConvertSekToPounds() {
    var SEK = document.getElementById('crownsinput').value;

    var convertToPounds = SEK / 12;

    document.getElementById('convertedtopounds').innerHTML = convertToPounds;
}

function ConvertSekToDollars() {
    var SEK = document.getElementById('crownsinput').value;

    var convertToDollars = SEK / 6;

    document.getElementById('convertedtodollars').innerHTML = convertToDollars;
}