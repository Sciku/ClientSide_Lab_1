//Uppgift 1

function CalculateSquareRoot() {
    var numberinput1 = document.entire_site.numberinput.value;

    var result = Math.sqrt(numberinput1);
  
    document.entire_site.calculatedroot.value = result;
}

//Uppgift 2
function CalculateFullPay() {
    var basicpay = 15000;
    var sales = document.entire_site.salesinput.value;

    var fullpay = 15000 + Math.round(sales * 0.09);

    document.entire_site.calculatedpay.value = fullpay;
}

//Uppgift 3
var convertedminutes = document.getElementById('convertedminutes');
minutes.addEventListener('click', ConvertHoursToMinutes, false);

var convertedseconds = document.getElementById('convertedseconds');
minutes.addEventListener('hover', ConvertHoursToseconds, false);

function ConvertHoursToMinutes() {
    var hours = document.getElementById('hourinput').value;

    var convertToMinutes = hours * 60;

    document.getElementById('convertedminutes').innerHTML = convertToMinutes;

}

function ConvertHoursToSeconds() {

}
