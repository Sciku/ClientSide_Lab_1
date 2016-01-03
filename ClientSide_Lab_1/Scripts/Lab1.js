//Uppgift 1

function CalculateSquareRoot() {
    var numberinput1 = document.getElementById('numberinput').value;

    var result = Math.sqrt(numberinput1);
  
    document.getElementById('calculatedroot').value = result;
}

//Uppgift 2
function CalculateFullPay() {
    var basicpay = 15000;
    var sales = document.getElementById('salesinput').value;

    var fullpay = 15000 + Math.round(sales * 0.09);

    document.getElementById('calculatedpay').value = fullpay;
}

//Uppgift 3
var minutes = document.getElementById('convertedminutes');
minutes.addEventListener('click', ConvertHoursToMinutes, false);

var seconds = document.getElementById('convertedseconds');
minutes.addEventListener('click', ConvertHoursToseconds, false);

function ConvertHoursToMinutes() {
    var hours = document.getElementById('hourinput').value;

    var convertToMinutes = hours * 60;

    document.getElementById('convertedminutes').innerHTML = convertToMinutes;

}

function ConvertHoursToSeconds() {

}
