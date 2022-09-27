/* usando o ... como operador rest ()
na pratica, usamos para mesclar uma lista de argumentos/parametros para uma função */

// function ordenar(...parametros ) {
    
//     return parametros.sort()
// }

const ordenar = (...parametros ) => parametros.sort()
    
    



console.log(ordenar('lucas', 'antonio', 'adriel') );

console.log(ordenar('rush', 'pink floyd', 'dream theater', 'slayer', 'nightwish') );

console.log('========================');

const cursos = ['react', 'angular', 'vue', 'node.js', 'php', 'SQL']

console.log(cursos);
console.log(ordenar(...cursos)); // spread

console.log('================');

function soma(...valores) {
    let total = 0;

    for(let valor of valores) {
        total += valor
    }
    return total;
}

console.log(soma(10,20));
console.log(soma(5, 1, 9, 15, 80, 20, 30));



console.log('====================');

/* mesmo codigo mas usando arrow function: */





const somaDois = (...valores) => {
    let total = 0;

    for(let valor of valores) {
        total += valor
    }
    return total;
}  

console.log(somaDois(5, 2, 9, 15, 80, 20, 50, 30)); 