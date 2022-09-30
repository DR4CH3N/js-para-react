/* map (mapeia, transformar em outra coisa) passa pelos elementos de um array e realiza operações neles através de uma função (callback) gerando um novo array. */

const numeros = [10, 20, 30, 40, 50]

/* normal:
const numerosDobrados = numeros.map (function (numero) ) {
    return numero * 2
}
*/

// com arrow function (codigo faz a mesma coisa):

const numerosDobrados = numeros.map( numero => numero * 2 )


console.log(numeros); // original
console.log(numerosDobrados); // tranformado/mapeado

console.log('============ EXERCICIO ====================');

const nomes = ['henrique', 'kaike', 'paulo', 'gustavo']

const nomesCaps = nomes.map( function (nome) {
    return nome.toUpperCase()
} )

console.log(nomesCaps);

console.log('======== FILTER =============');

/* filter (filtra/remove)
retorna um array de valores de acordo com o resultado do filtro aplicado
*/

/* no JS nas versões mais recentes, ele aceita o underline como separador de milhar para facilitar a leitura. */
const vendas = [1500, 2_000, 10_000, 1_000, 500]
const meta = 1000

const vendasAcimaDaMedia = vendas.filter( venda => venda > meta)

console.log(vendas);
console.log(vendasAcimaDaMedia);



const listaDeAlunos = ['Marcelo', 'Matheus', 'Adriel', 'Palloma', 'Antônio', 'Rafael', 'Rodrigo']

/* const resultados = alunos.filter(aluno => {
    if (aluno.charAt(0) === 'M') {
        return aluno
    }
}) 

console.log(alunos);
console.log(resultados); */


/* ↑↑↑↑↑ metodo antigo (mas ainda funcionando) nas versões antigas do JS */

/* ↓↓↓↓↓ metodo atual/moderno/novo para versões mais atualizadas do JS */

/* 
const resultados = alunos.filter( aluno => {
    if (aluno.startsWith('M') ) {
        return aluno
    }
})

const result = alunos.filter( aluno => aluno.startsWith('M') ?? aluno)

console.log(aluno);
console.log(resultados);
console.log(result);

*/

console.log('=======================');

const cursos = [
    { id: 1, titulo: 'HTML5 e CSS3', categoria: 'Front-End', preco: 500},
    { id: 2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    { id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    { id: 4, titulo: 'Photoshop', categoria: 'Design', preco: 400},
    { id: 5, titulo: 'PHP e MySQL', categoria: 'Back-End', preco: 600},
    { id: 6, titulo: 'Flutter', categoria: 'Mobile', preco: 900}
]

/* neste codigo, ele irá acessar e retornar o parametro categoria da constante cursos e irá filtrar apenas por cursos na area de front-end */
const cursosFront = cursos.filter( curso => curso.categoria == 'Front-End' )

console.log(cursos);
console.log(cursosFront);

console.log('---------------------------');

const titulos = cursosFront.map( curso => curso.titulo)
console.log(titulos);

console.log('-------------------------');

const titulosFront = cursos.filter(curso => curso.categoria == 'Front-End').map(curso => curso.titulo)
console.log(titulosFront);

console.log('=============== REDUCE ===============');

/* Reduce (reduz/reduzir a um unico valor/resultado) */

const valores = [10, 50, 2_000, 5, 25]

const soma = valores.reduce( (acumulador, valor) =>  {
    return acumulador + valor
}, 0)
// ↑ ponto de partida do reduce

console.log(soma);

console.log('========== FILTER e REDUCE =======');

const somaCursosMobile = cursos
.filter(curso => curso.categoria == 'Mobile')
.reduce( (acumulador, curso) => {
    return acumulador + curso.preco
}, 0) // 0 será o valor inicial do reduce

console.log(somaCursosMobile);