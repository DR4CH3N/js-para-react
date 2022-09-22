/* formas de trabalhar com funções */

// sintaxe tradicional
function nomeDaFuncao() {
    console.log('função de sintaxe tradicional....');
}

// sintaxe de função anonima

var outraFuncao = function() {
    console.log('outra forma de declarar função...');
};

// chamadas de função
nomeDaFuncao()
outraFuncao()

/* 1) crie uma função que receba 2 valores numericos, calcule a diferença entre eles e retorne o resultado para uma variavel externa.

2)mostre no console o resultado */

function funcaoQualquer( numero1, numero2) {
   return numero1 - numero2
   
}
let resultado = funcaoQualquer(50, 10);
console.log(resultado);

/* arrow function (função "seta/flecha") possibilita diversas sintaxes, e até simplificação */

const exemplo1 = () => {
    console.log('uma arrow function qualquer..');
}

exemplo1()

// arrow function com parametro
// const ola = (nome) => {}

/*  const ola = nome => { // podemos omitir os parenteses no caso de 1 parametro
   console.log('olá' +nome);
} 
*/

// podemos omitir as {} no caso de uma unica instrução
const ola = nome => console.log('ola' +nome);

ola(' matheus')

// const metade = (valor) => {
//     return valor / 2
// }

const metade = valor => valor / 2



console.log(metade(100) );

const multiplicaValores = (valor, fator) => valor * fator

console.log(multiplicaValores(10, 3) );
console.log(multiplicaValores(50,5) );

/* exercicio:
- Monte uma arrow function que receba o nome de uma pessoa e a converta para letras maiusculas.

- chame a função 3x (passando nomes diferentes) e exibindo no console os resultados
*/

const nomePessoas = nome => nome.toUpperCase(); 

console.log(nomePessoas('matheus') );
console.log(nomePessoas('kleber') );
console.log(nomePessoas('joão') );