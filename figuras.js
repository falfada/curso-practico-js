//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Código del círculo
function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//Código del cuadrado
function calcularPerimetroCuadrado(){
    const value = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroArea(){
    const value = document.getElementById("inputCuadrado").value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo isósceles
function alturaTrianguloIscoceles(lado1, lado2, base){
    if(lado1 == lado2){
        const altura = Math.sqrt((lado1 * lado2) - ((base * base) / 4));
        alert(altura);
    } else {
        alert("Este no es un triángulo iscóceles");
    }
}