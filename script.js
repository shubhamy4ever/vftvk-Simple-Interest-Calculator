function compute() {
  let amount = document.getElementById("amount");
  let resultdiv = document.getElementById("resultdiv");
  if (amount.value <= 0) {
    alert("please enter a positive number");
  } else {
    resultdiv.style.display = "block";
    let slider = document.getElementById("rate");
    let years = document.getElementById("years");
    let finalresult = document.getElementById("result");
    let res = (amount.value * (slider.value * years.value)) / 100;
    finalresult.innerHTML = res;
    let amounthere = document.getElementById("amounthere");
    let ratehere = document.getElementById("ratehere");
    let yearshere = document.getElementById("yearhere");
    amounthere.innerHTML = amount.value;
    ratehere.innerHTML = slider.value + "%";
    let currentyear = new Date().getFullYear();
    let convertedvalue = Number(years.value);
    yearshere.innerHTML = currentyear + convertedvalue;
  }
}
function changed() {
  let slider = document.getElementById("rate");
  let result = document.getElementById("range");
  result.innerHTML = slider.value + "%";
}
