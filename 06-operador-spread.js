/* usando o operador ... como operador spread (espalhar)
na pratica, copiamos o conteudo de um array (bandas) 
para dentro de outro (maisBandas)


IMUTABILIDADE (não muda) */

const bandas = ['tyler the creator', 'kanye west', 'travis scott']
const maisBandas = [...bandas, 'van Halen', 'deep purple', 'slayer']

console.log(maisBandas);

console.log('=====================');

/* spread com objeto */

const dados = {
    nome : 'luisa',
    idade : 21
}

const novosDados = {
    ...dados,
    cidade : 'São paulo',
    estado : 'SP',
    idade : 30 // sobrescrevendo o valor somente da propriedade idade
}

console.log(novosDados); // novo objeto contendo os dados do anterior tambem 
console.log('Idade atualizada: '+novosDados.idade);
console.log(dados);