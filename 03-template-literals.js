// metodo de concatenação de strings (tradicional)
const nome = 'Matheus'
const sobreNome = 'Anthony'
let idade = 20
let cidade = 'são paulo'
let estado = 'SP'

/* meu nome é matheus anthony, tenho 20 anos e moro atualmente na cidade de são paulo - SP. */

let mensagem = "Meu nome é "+nome+ " "+sobreNome+ " e tenho "+idade+ " anos de idade e moro na cidade de "+cidade+ " - "+estado+ ".";

console.log(mensagem);

console.log("=============");

/* metodo template literal/string */

let mensagem2 = `Meu nome é ${nome} ${sobreNome}, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}.`;

console.log(mensagem2);