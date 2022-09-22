// jeito antigo de usar variaveis:

// var meuNome = 'Matheus'; 

// jeito moderno de usar variaveis:

// let meuNome = 'Matheus'; 

const meuNome = 'Matheus'; // const obriga a inicialização

console.log(meuNome);

console.log('===================================');


let idade = 20;
let mensagem // ESCOPO GLOBAL (pode ser usada em qualquer lugar porque não esta em um bloco)

if (idade >= 18) {
    let mensagem = 'é maior de idade';
} else {
    let mensagem = 'é menor de idade';
}

console.log(mensagem);

/* let e const: possuem o escopo de BLOCO ou seja, vai executar apenas em um bloco de codigo (como condicionais, loops) e escopo GLOBAL quando declarados fora dos blocos.

uma variavel/constante em escopo de BLOCO só existe e é acessivel DENTRO do bloco que foi criada.
*/