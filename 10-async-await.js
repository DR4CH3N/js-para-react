import fetch from 'node-fetch'

/* trabalhando com comunicação assincrona (ajax) */
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then( resposta => resposta.json() )
.then(dados => console.log(dados))
.catch(error => console.log('Erro na operação: '+error.errno) )

/* npm install node-fetch <- comando necessario para este codigo funcionar */

/* sintaxe usando função e async/await */
// async function acessaApi() { // função tradicional
const acessaApi = async () => { // arrow function
    try {
        // comando await NÃO irá funcionar caso você não coloque que a função é assincrona
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const dados = await resposta.json()
        console.log(dados);
    } catch (error) {
        console.log('Deu ruim: '+error.errno);
    }
}

acessaApi();