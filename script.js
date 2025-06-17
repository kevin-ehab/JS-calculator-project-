const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")

const equal = document.getElementById("equal")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const clear = document.getElementById("clear")

const div = document.getElementById("display-div")

let num1 = ""
let num2 = ""
let oper = null

//numbers:
one.addEventListener("click", function(){
    div.textContent += "1"
    Nums()
})
two.addEventListener("click", function(){
    div.textContent += "2"
    Nums()
})
three.addEventListener("click", function(){
    div.textContent += "3"
    Nums()
})
four.addEventListener("click", function(){
    div.textContent += "4"
    Nums()
})
five.addEventListener("click", function(){
    div.textContent += "5"
    Nums()
})
six.addEventListener("click", function(){
    div.textContent += "6"
    Nums()
})
seven.addEventListener("click", function(){
    div.textContent += "7"
    Nums()
})
eight.addEventListener("click", function(){
    div.textContent += "8"
    Nums()
})
nine.addEventListener("click", function(){
    div.textContent += "9"
    Nums()
})
zero.addEventListener("click", function(){
    div.textContent += "0"
    Nums()
})

//operators:
plus.addEventListener("click", function(){
    div.textContent=""
    oper = "+"
})
minus.addEventListener("click", function(){
    div.textContent=""
    oper = "-"
})
multiply.addEventListener("click", function(){
    div.textContent=""
    oper = "*"
})
divide.addEventListener("click", function(){
    div.textContent=""
    oper = "/"
})
equal.addEventListener("click", function(){
    num1 = Number(num1)
    num2 = Number(num2)
    div.textContent = eval(`${num1} ${oper} ${num2}`)
})

clear.addEventListener("click", function(){
    num1 = ""
    num2 = ""
    oper = null
    div.textContent = ""
})

function Nums(){
    if (!oper){
        num1 = div.textContent
    }else{
        num2 = div.textContent
    }
}
