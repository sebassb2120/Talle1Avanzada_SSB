/*
PROBLEMA: Watto paga a su personal de ventas un salario de 3500000 mensuales, más una comisión de 1500000 por cada licencia de software vendida menos el 5% de deducciones por impuestos sobre el total devengadp. Codifica un programa que calcule e imprima el salario mensual de un vendedor dado;  
*/

function pago( salario, comisión){

    totalComisiones = comisión * 1500000 
    let salarioMensual = salario + totalComisiones - (5/100)
    
    return salarioMensual
}

let resultado = pago(3500000, 2)
console.log(resultado)