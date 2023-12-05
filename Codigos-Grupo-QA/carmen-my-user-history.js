//Classes

class Pessoa{
    constructor(primeiroNome, nomeMeio, ultimoNome, anoNascimento, telefone, moradia, email, redesSociais=[], softSkills=[], hardSkills=[], hobby=[]){
        this.primeiroNome = primeiroNome
        this.nomeMeio = nomeMeio
        this.ultimoNome = ultimoNome
        this.anoNascimento = anoNascimento
        this.telefone = telefone
        this.moradia = moradia
        this.email = email
        this.redesSociais = redesSociais
        this.softSkills = softSkills
        this.hardSkills = hardSkills
        this.hobby = hobby        
    }
    calcularIdade(){
        const date = new Date()
        return date.getFullYear() - this.anoNascimento
    }
    obterNomeCompleto(){
        return `${this.primeiroNome} ${this.nomeMeio} ${this.ultimoNome}`
    }
    obterPessoa(nomeCompleto, idade){
        return 'Sou ' + nomeCompleto + ', tenho '+idade+' anos. \n' +
        'Meu telefone é ' + this.telefone+'. \n'+
        'Moro na '+ this.moradia + '.\n' +
        'Meu email é ' + this.email + '. \n' +
        'Tenho as redes sociais: ' + this.redesSociais + '. \n' +
        'Tenho as soft skills: ' + this.softSkills + '. \n' +
        'E também as hard skills: ' + this.hardSkills + '. \n' +
        'Meus hobbies são: ' + this.hobby + '.'
    }
}

//criar o objeto da classe Pessoa
let pes1 = new Pessoa(
    "Carmen",
    "Gloria Fernandes",
    "Cabral",
    1975,
    "919 814 411",
    "Rua Carlos Teixeira 55 São Lázaro, Braga, Portugal, 4715-092",
    "cgfcabral@gmail.com",
    ["linkedin#carmen-cabral-53786342", "instagram#carmenqaforever", "gitHub#carmencabral"],
    ["curiosidade, persistência e resolução de problemas"],
    ["HTML", "CSS", "JavaScript", "Selenium", "Cypress"],
    ["dançar", "caminhar", "ver filmes"]
)


//mostrar Dados Pessoais
console.log("--------------------------------")
console.log('Dados Pessoais')
console.log("--------------------------------")
let nome = pes1.obterNomeCompleto()
let idade = pes1.calcularIdade()
console.log(pes1.obterPessoa(nome,idade))
console.log("--------------------------------")

//-----------------------------------------------------------------

class Profissional{
    constructor(empresa = [], cargo=[], tempoExperiencia=[], atividades = []){
        this.empresa = empresa
        this.cargo = cargo
        this.tempoExperiencia = tempoExperiencia
        this.atividades = atividades
        }
        obterDadosProfissionais(exp1, pos){
            return exp1[pos].empresa[0] + ' como '+exp1[pos].empresa[1] + ' durante ' +exp1[pos].empresa[2] + ' com: ' + exp1[pos].empresa[3]
        }
}

//Criar os objetos (as experiências da Pessoa1) da classe Profissional
let prof11 = new Profissional(
    ["BBTS", 
    "Analista administrativo", 
    "3 anos", 
    ["analisar folha de pagamento", "incluir e alterar rubricas no sistema", "elaborar manuais e fluxogramas", "compartilhar informações"]]
)

let prof12 = new Profissional(
    ["CEF", "Técnico bancário", "9 anos",
    ["atendimento ao cliente", "cobrança", "renegociação"]]
)

//Mostrar os Dados Profissionais para a Pessoa1
console.log("Experiências Profissionais")
console.log("--------------------------------")
let experiencias1 = [prof11, prof12]
for (let pos = 0; pos < experiencias1.length; pos++) {
    console.log(pos+1 +': ')
    console.log(prof11.obterDadosProfissionais(experiencias1, pos))
}

//---------------------------------------------------------

//Criar classe Formacao
class Formacao{
    constructor(curso=[], entidadeEnsino=[], duracao=[], tipoCurso=[]){
        this.curso = curso
        this.entidadeEnsino = entidadeEnsino
        this.duracao = duracao
        this.tipoCurso = tipoCurso
    }
    obterDadosFormacoes(form1, pos){
        return 'Fiz ' + form1[pos].curso[0] + ' na(o) '+form1[pos].curso[1] + ' durante ' +form1[pos].curso[2] + ' e concluí o(a) ' + form1[pos].curso[3] +'.'
    } 
}

//Criar os objetos (formações da Pessoa1) da classe Formacao
let form11 = new Formacao(
    ["Administração", "Universidade Estácio de Sá/BR/RJ", "4 anos", "bacharelado"],
)
let form12 = new Formacao(
    ["Análise de Sistemas", "PUC-Católica/BR/RJ", "2 anos", "pós-graduação"],
)
let form13 = new Formacao(
    ["Programador", "IEFP/PT/Braga", "1 ano", "técnico"]
)

//Mostrar os Dados das Formações para a Pessoa1
let formacoes1 = [form11, form12, form13]
console.log("--------------------------------")
console.log("Formações")
console.log("--------------------------------")
for (let pos = 0; pos < formacoes1.length; pos++) {
    console.log(pos+1 +': ')
    console.log(form11.obterDadosFormacoes(formacoes1, pos))
}

