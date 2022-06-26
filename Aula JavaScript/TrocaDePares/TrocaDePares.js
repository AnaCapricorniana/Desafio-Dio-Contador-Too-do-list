function substituirNumerosPares(array){
    if (!array.length) return console.log(-1);

    const numImpar = (numero) => numero !== 0;
    const numPar = (numero) => numero % 2 ===0;

    for (let n = 0; n < array.length; n++) {
        if (numPar(array[n]) && numImpar(array[n])) {
            console.log(`trocando ${array[n]} por 0 ...`)
            array[n] = 0;

        }else if (!numImpar(array[n])){
            console.log(`Ops,vale 0`);
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituirNumerosPares(arr));
