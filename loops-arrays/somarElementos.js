function somarElementos(array) {
    let somador = 0;
    for (let i = 0; i < array.length; i++) {
        somador = somador + array[i];
    }

    return somador;
}

console.log(somarElementos([10, 20, 30, 40]));