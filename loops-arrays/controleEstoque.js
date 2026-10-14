function controleEstoque(estoque) {
    let contador = 0;
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i] === 0) {
            contador++;
        }
    }

    return contador;
}

console.log(controleEstoque([10, 7, 0, 15, 3, 0, 9]));