class Pessoa {
    // Propriedades
    nome = 'sem nome'
    genero = 'não informado'
    idade = 0

    // metodos
    mostraGenero() {
        console.log(this.genero);
    }

    mostraNome() {
        console.log(this.nome);
    }
    /* apenas colocando "idade" dentro dos parametros do if irá dar errado já que não tem uma variavel chamada idade, voce precisa usar o "this" para poder acessar os recursos da classe. */
    verificaIdade() {
        if (this.idade >= 18) {
            return 'é de maior'
        }
        else {
           return 'é de menor'
        }

        /* if else ternario 
        return this.idade >= 18 ? 'é maior' : 'é menor'
        */
    }
}

/* criando objetos/instancias */
let umaPessoa = new Pessoa
umaPessoa.nome = 'Thiago'
umaPessoa.genero = 'Masculino'
umaPessoa.idade = 20

console.log(umaPessoa);

let outraPessoa = new Pessoa
outraPessoa.nome = 'jessica'
outraPessoa.genero = 'Não informado'
outraPessoa.idade = 16

console.log(outraPessoa);


/* classe aluno irá pegar propriedades da classe mãe Pessoa e irá adicionar (na classe aluno) sua proprias particularidades */
class Aluno extends Pessoa {
    matricula
    curso
    
    

    // métodos
    mostraDados() {
        console.log(this.matricula);
        console.log(this.curso);
        

        // métodos de super classe
        this.mostraNome()
        this.mostraGenero();
        this.verificaIdade()
    }
}

/* objeto herdando recursos */

let aluno = new Aluno
aluno.nome = 'paula'
aluno.genero = 'feminino'
aluno.matricula = '123abc'
aluno.curso = 'JS para react'
aluno.idade = 20
aluno.verificaIdade();

aluno.mostraDados()