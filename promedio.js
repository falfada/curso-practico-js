const lista1 = [100, 200, 100, 300, 400, 100, 400, 200, 400, 300, 200, 100];
//Promedio
function calcularMediaAritmetica(lista) {
  //   let sumaLista = 0;
  //   for (let i = 0; i < lista.lenght; i++) {
  //     sumaLista = sumalista + lista[i];
  //   }

  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//Mediana
//Reto 1: Ponerlo en una función
//Reto 2: Ordenar la lista utilizando el método sort
function calcularMediana(lista){
    let mediana;
    lista.sort(function(a,b){
        return a - b;
    });
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, elemento2
        ]);
    
        mediana = promedioElemento1y2;
        return mediana;
    } else{
        mediana = lista[mitadLista];
        return mediana;
    }
}
function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}

//Moda
//Convertir en función
 const lista1Count = {};

 lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else{
            lista1Count[elemento] = 1;
        }
    }
 )

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);
//Con Object envío como argumento el objecto que se quiere convertir en array
//Utilizar el método sort para iterar

const moda = lista1Array[lista1Array.length - 1];
