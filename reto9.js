// Encontrar el número mayor en un array.


let numeros = [2, 4, 6, 7];
let max = 0;
let tamano = numeros.length;

    for(let i = 0; i < tamano; i++){
        if(max < numeros[i]){
            max = numeros[i];
        };      
    };

console.log(max);
