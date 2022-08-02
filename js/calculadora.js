function calcular () {
    let primerNro = parseInt(prompt("Ingrea el primer nro."))
    let segundoNro = parseInt(prompt("Ingrea el segundo nro."))
    let operador = prompt("Selecciona la operación {+, -, *, /,}")
        console.log("Resultado", realizarCalculo(primerNro, segundoNro, operador))  

}

function realizarCalculo (num1, num2, ope) {
    switch(ope) {
        case "+":
           return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return "Error en el cálculo"
    }
}