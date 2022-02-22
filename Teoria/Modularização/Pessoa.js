//export default -> ao importar, não precisa colocar o nome exato da classe, pois já está definido como padrão
export default class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

//Utilizando apenas o export, temos que usar o nome exato da function no momento da importação
export function mostrarIdade(pessoa){
    console.log(pessoa.idade);
}

export function mostrarNome(pessoa){
    console.log(pessoa.nome);
}