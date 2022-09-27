/* ao importar diversos recursos, separamos as funções por "," e com o comando "as" podemos dar um apelido para essas funções */
import { pessoa, curso as treinamento } from "./modules/pessoa.js";

console.log(pessoa.nome );
console.log(treinamento.titulo );

