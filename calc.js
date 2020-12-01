// global for now. TODO - implement closure or class component
var listOfNumber = []

function handleOnCHange() {
    const entryNumber = document.getElementById("number").value;
}

function calculate(action) {
    if (action === "sum") {
        document.getElementById("console").innerHTML = listOfNumber.reduce((total, number) => total + number, 0)
    }
    if (action === "average") {
        document.getElementById("console").innerHTML = (listOfNumber.reduce((total, number) => total + number, 0)) / (listOfNumber.length !== 0 ? listOfNumber.length : 1)
    }
}

function addToList() {
    const entryNumber = document.getElementById("number").value;
    listOfNumber.push(parseInt(entryNumber))
    document.getElementById("numberList").innerHTML = document.getElementById("numberList").innerHTML + `<li>${entryNumber}</li>`
    document.getElementById("number").innerHTML = ""
}

function clearDisplay() {
    document.getElementById("number").innerHTML = ""
    document.getElementById("numberList").innerHTML = ""
    document.getElementById("console").innerHTML = ""
}

function resetCalculator() {
    listOfNumber = []
    clearDisplay()
}

function refresh(){
    document.getElementById("numberList").innerHTML =  listOfNumber.reduce( (value, finalValue) => finalValue + `<li>${value}</li>` , '' )`<li>${entryNumber}</li>`
}