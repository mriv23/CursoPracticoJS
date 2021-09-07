
//codigo del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;                 
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const valor = input.value;
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const valor = input.value;
    const area = areaCuadrado(valor);
    alert(area);
 
}