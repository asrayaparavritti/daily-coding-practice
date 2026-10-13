function controleEstoque(array) {

    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            contador++;
        }

    }

    return contador;

}

console.log(controleEstoque([10, 7, 0, 15, 3, 0, 9]));