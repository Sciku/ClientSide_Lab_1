function CalculateSquareRoot(){
    var numberinput1 = document.entire_site.numberinput.value;

    var result = Math.sqrt(numberinput1);
  
    document.entire_site.calculatedroot.value = result;
}

function CalculateFullPay() {
    var basicpay = 15000;
    var sales = document.entire_site.salesinput.value;

    var fullpay = 15000 + Math.round(sales * 0.09);

    document.entire_site.calculatedpay.value = fullpay;
}
