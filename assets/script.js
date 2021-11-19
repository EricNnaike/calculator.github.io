let bill = document.getElementById("billamount");
let people = document.getElementById("clients");
let tipAmount = document.getElementById("tipamount");
let totalPer = document.getElementById('total');

bill.addEventListener('input');
people.addEventListener('input');


function fivePercent() {
    var one = parseFloat(bill.value);
    var two = parseFloat(people.value);
    var operation = (0.05 * one) / two;
    tipAmount.textContent = operation.toFixed(2);

    var totalTip = (one / two) + operation;
    totalPer.textContent = totalTip.toFixed(2);
    
}
function tenPercent() {
    var one = parseFloat(bill.value);
    var two = parseFloat(people.value);
    var operation = (0.1 * one) / two;
    tipAmount.textContent = operation.toFixed(2);

    var totalTip = (one / two) + operation;
    totalPer.textContent = totalTip.toFixed(2);
}
function fifteenPercent() {
    var one = parseFloat(bill.value);
    var two = parseFloat(people.value);
    var operation = (0.15 * one) / two;
    tipAmount.textContent = operation;

    var totalTip = (one / two) + operation;
    totalPer.textContent = totalTip.toFixed(2);
}
function twentyFivePercent() {
    var one = parseFloat(bill.value);
    var two = parseFloat(people.value);
    var operation = (0.25 * one) / two;
    tipAmount.textContent = operation.toFixed(2);

    var totalTip = (one / two) + operation;
    totalPer.textContent = totalTip.toFixed(2);
}
function fiftyPercent() {
    var one = parseFloat(bill.value);
    var two = parseFloat(people.value);
    var operation = (0.5 * one) / two;
    tipAmount.textContent = operation.toFixed(2);

    var totalTip = (one / two) + operation;
    totalPer.textContent = totalTip.toFixed(2);
}

function reset() {
    tipAmount.textContent = 0;
    totalPer.textContent = 0;
}

