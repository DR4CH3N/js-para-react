/* desestruturação (destructuring) 
extrair dados facilmente de um array ou objeto
e armazena-los em variaveis/constantes */

// usando desestruturação em arrays
const [a,b] = ['Lucas', 'Matheus']
console.log(a);
console.log(b);

const alunos = ['adriel', 'palloma', 'antonio']
const [adriel, palloma, antonio] = alunos
console.log(adriel);
console.log(palloma);
console.log(antonio);

const unidades = ['penha', 'tatuapé', 'itaquera', 'são miguel paulista']
const [penha, tatuape, , smp] = unidades // pulando itaquera
console.log(penha);
console.log(tatuape);
console.log(smp);

console.log('==========================');

// usando desestruturação em objetos
const {nome, cidade} = {nome: 'fulano', idade: 18, cidade: 'são paulo'}
console.log(nome);
console.log(cidade);

const dados = {
    nome: 'guilherme',
    curso: 'JavaScript',
    nascimento: '31/10/1998'
}

/* definindo um alias (apelido) para nome pois há mais de um nome como constante */
const { nome: aluno , curso} = dados
console.log(aluno);
console.log(curso);