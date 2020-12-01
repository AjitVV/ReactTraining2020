// global for now. TODO - implement closure or class component
var listOfNumber = []

function calculate(action) {
    if (action === "sum") {
        document.getElementById("console").innerHTML = listOfNumber.reduce((total, number) => total + number, 0)
    }
    if (action === "average") {
        document.getElementById("console").innerHTML = (listOfNumber.reduce((total, number) => total + number, 0)) / (listOfNumber.length !== 0 ? listOfNumber.length : 1)
    }
    if (action === "min") {
        document.getElementById("console").innerHTML = Math.min(...listOfNumber)
    }
}

function addToList() {
    const entryNumber = document.getElementById("number").value;
    listOfNumber.push(parseInt(entryNumber))
    document.getElementById("numberList").innerHTML = document.getElementById("numberList").innerHTML + `<div>${entryNumber}</div>`
    document.getElementById("number").value = "" 
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
    console.log()
    document.getElementById("numberList").innerHTML =  listOfNumber.reduce( (value, finalValue) => finalValue + `<div>${value}</div>` )
}