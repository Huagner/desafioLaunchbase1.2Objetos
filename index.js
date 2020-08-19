// Declaracao de variaveis


// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

const empresa = {
    nome : "Rocketseat",

    cor : "Roxo",

    foco : "Programação",

    endereco : {
        rua : "Rua Guilherme Gembala",
        numero : 260
    } 
}

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereco.rua} no número ${empresa.endereco.numero}`)